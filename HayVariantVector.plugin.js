const {
    log,
    LogLevel
} = require("@peacockproject/core/loggingInterop")

const {
    PEACOCKVER,
    PEACOCKVERSTRING,
    compare
} = require("@peacockproject/core/utils")

const {
    existsSync,
    readFileSync,
    writeFileSync
} = require("fs")

const path = require("path")


module.exports = function HayVariantVector(controller) {

    const prefix = "[Hay Variant Vector]"

    if (
        Math.abs(PEACOCKVER) < 6000 ||
        compare(PEACOCKVERSTRING, "8.0.0") < 0
    ) {

        log(
            LogLevel.ERROR,
            `${prefix} This plugin requires Peacock v8.0.0 or above!`
        )

        return
    }

    const freelancerVariationsMod =
        "KevinRudd.FreelancerVariations"

    const freelancerDeployed =
        controller.smf.modIsInstalled(
            freelancerVariationsMod
        )


    const variants = [

        {
            name:
                "Colorado Harvest Festival",

            modId:
                "Bryn.HayFestival",

            contractId:
                "1a98c48e-d618-4d4d-b17b-90ca3b180d2a",

            brick:
                "assembly:/_pro/scenes/missions/colorado_2/mission_mild_hay.brick"
        }

    ]

    function findConfigPath(filename) {

        const possiblePaths = [

            path.resolve(
                filename
            ),

            path.resolve(
                "plugins",
                filename
            )

        ]

        for (
            const possiblePath
            of possiblePaths
        ) {

            if (
                existsSync(
                    possiblePath
                )
            ) {

                return possiblePath
            }
        }

        return null
    }


    function loadConfig(configPath) {

        try {

            return JSON.parse(
                readFileSync(
                    configPath,
                    "utf8"
                )
            )

        } catch (error) {

            log(
                LogLevel.ERROR,
                `${prefix} Could not read ${configPath}: ${error.message}`
            )

            return null
        }
    }


    function saveConfig(
        configPath,
        config
    ) {

        try {

            writeFileSync(
                configPath,
                JSON.stringify(
                    config,
                    null,
                    2
                ),
                "utf8"
            )

            return true

        } catch (error) {

            log(
                LogLevel.ERROR,
                `${prefix} Could not write ${configPath}: ${error.message}`
            )

            return false
        }
    }


    function removeBrick(
        config,
        contractId,
        brick
    ) {

        if (
            !config ||
            !Array.isArray(
                config.patches
            )
        ) {

            return false
        }

        let changed = false

        for (
            const patch
            of config.patches
        ) {

            if (
                patch.id !==
                contractId
            ) {

                continue
            }

            if (
                !Array.isArray(
                    patch.bricks
                )
            ) {

                continue
            }

            const oldLength =
                patch.bricks.length

            patch.bricks =
                patch.bricks.filter(
                    existingBrick =>
                        existingBrick !==
                        brick
                )

            if (
                patch.bricks.length !==
                oldLength
            ) {

                changed = true
            }
        }

        return changed
    }


    function addBrick(
        config,
        contractId,
        brick
    ) {

        let changed = false

        let patch =
            config.patches.find(
                patch =>
                    patch.id ===
                    contractId
            )

        if (!patch) {

            patch = {

                id:
                    contractId,

                bricks: [],

                hardbricks: [],

                clearDefaultBricks:
                    false,

                resetVRBricks:
                    false
            }

            config.patches.push(
                patch
            )

            changed = true
        }

        if (
            !Array.isArray(
                patch.bricks
            )
        ) {

            patch.bricks = []

            changed = true
        }

        if (
            !patch.bricks.includes(
                brick
            )
        ) {

            patch.bricks.push(
                brick
            )

            changed = true
        }

        return changed
    }


    function removeEmptyPatches(
        config
    ) {

        if (
            !config ||
            !Array.isArray(
                config.patches
            )
        ) {

            return false
        }

        const oldLength =
            config.patches.length

        config.patches =
            config.patches.filter(
                patch => {

                    const bricks =
                        Array.isArray(
                            patch.bricks
                        )
                            ? patch.bricks
                            : []

                    const hardbricks =
                        Array.isArray(
                            patch.hardbricks
                        )
                            ? patch.hardbricks
                            : []

                    return (
                        bricks.length > 0 ||
                        hardbricks.length > 0
                    )
                }
            )

        return (
            config.patches.length !==
            oldLength
        )
    }

    let variantCollectorPath =
        findConfigPath(
            "VariantCollector.json"
        )


    if (!variantCollectorPath) {

        variantCollectorPath =
            path.resolve(
                "VariantCollector.json"
            )

        try {

            writeFileSync(
                variantCollectorPath,

                JSON.stringify(
                    {
                        patches: [],
                        configFileVersion: 1.12
                    },
                    null,
                    2
                ),

                "utf8"
            )

            log(
                LogLevel.INFO,
                `${prefix} Created VariantCollector.json.`
            )

        } catch (error) {

            log(
                LogLevel.ERROR,
                `${prefix} Could not create VariantCollector.json: ${error.message}`
            )

            return
        }
    }


    const variantCollector =
        loadConfig(
            variantCollectorPath
        )


    if (!variantCollector) {
        return
    }


    if (
        !Array.isArray(
            variantCollector.patches
        )
    ) {

        log(
            LogLevel.ERROR,
            `${prefix} VariantCollector.json does not contain a valid patches array.`
        )

        return
    }

    const freelancerPath =
        findConfigPath(
            "FreelancerVariations.json"
        )

    let freelancerConfig =
        null


    if (!freelancerPath) {

        if (freelancerDeployed) {

            log(
                LogLevel.WARN,
                `${prefix} Freelancer Variations is deployed but FreelancerVariations.json was not found.`
            )
        }

    } else {

        freelancerConfig =
            loadConfig(
                freelancerPath
            )

        if (
            freelancerConfig &&
            !Array.isArray(
                freelancerConfig.patches
            )
        ) {

            log(
                LogLevel.ERROR,
                `${prefix} FreelancerVariations.json does not contain a valid patches array.`
            )

            freelancerConfig =
                null
        }
    }

    let variantCollectorChanged =
        false

    let freelancerChanged =
        false


    for (
        const variant
        of variants
    ) {

        const variantDeployed =
            controller.smf.modIsInstalled(
                variant.modId
            )

        if (
            !freelancerDeployed &&
            variantDeployed
        ) {

            if (
                addBrick(
                    variantCollector,
                    variant.contractId,
                    variant.brick
                )
            ) {

                variantCollectorChanged =
                    true
            }

        } else {

            if (
                removeBrick(
                    variantCollector,
                    variant.contractId,
                    variant.brick
                )
            ) {

                variantCollectorChanged =
                    true
            }
        }

        if (
            freelancerConfig
        ) {

            if (
                freelancerDeployed &&
                variantDeployed
            ) {

                if (
                    addBrick(
                        freelancerConfig,
                        variant.contractId,
                        variant.brick
                    )
                ) {

                    freelancerChanged =
                        true
                }

            } else {

                if (
                    removeBrick(
                        freelancerConfig,
                        variant.contractId,
                        variant.brick
                    )
                ) {

                    freelancerChanged =
                        true

                    log(
                        LogLevel.INFO,
                        `${prefix} Removed ${variant.brick} from FreelancerVariations.json.`
                    )
                }
            }
        }
    }

    if (
        removeEmptyPatches(
            variantCollector
        )
    ) {

        variantCollectorChanged =
            true
    }


    if (
        freelancerConfig &&
        removeEmptyPatches(
            freelancerConfig
        )
    ) {

        freelancerChanged =
            true
    }


    if (
        variantCollectorChanged
    ) {

        if (
            saveConfig(
                variantCollectorPath,
                variantCollector
            )
        ) {

            log(
                LogLevel.INFO,
                `${prefix} VariantCollector.json updated successfully.`
            )
        }
    }

    if (
        freelancerConfig &&
        freelancerChanged
    ) {

        if (
            saveConfig(
                freelancerPath,
                freelancerConfig
            )
        ) {

            log(
                LogLevel.INFO,
                `${prefix} FreelancerVariations.json updated successfully.`
            )
        }
    }


    let patchesToApply =
        []


    if (
        freelancerDeployed &&
        freelancerConfig
    ) {

        patchesToApply =
            freelancerConfig.patches

    } else {

        patchesToApply =
            variantCollector.patches
    }

    for (
        const patch
        of patchesToApply
    ) {

        const contract =
            controller.resolveContract(
                patch.id,
                "h3"
            )


        if (!contract) {

            log(
                LogLevel.WARN,
                `${prefix} Could not resolve contract ${patch.id}.`
            )

            continue
        }

        if (
            patch.clearDefaultBricks
        ) {

            contract.Data.Bricks =
                []
        }

        if (
            !contract.Data.RandomBricks
        ) {

            contract.Data.RandomBricks =
                {}
        }


        contract.Data.RandomBricks.TimeOfDay =
            Array.isArray(
                patch.bricks
            )
                ? [
                    ...patch.bricks
                ]
                : []


        if (
            patch.resetVRBricks
        ) {

            contract.Data.VR = [

                {
                    Quality:
                        "base",

                    Bricks: [

                        "assembly:/_pro/Scenes/Bricks/vr_setup.brick",

                        "assembly:/_pro/Scenes/Bricks/evergreen_vr_setup.brick",

                        "assembly:/_pro/scenes/missions/coastaltown/vr_overrides_low_performance.brick"
                    ]
                },

                {
                    Quality:
                        "better",

                    Bricks: [

                        "assembly:/_pro/Scenes/Bricks/vr_setup.brick",

                        "assembly:/_pro/Scenes/Bricks/evergreen_vr_setup.brick"
                    ]
                }
            ]
        }

        if (
            Array.isArray(
                contract.Data.GameDifficulties
            )
        ) {

            for (
                const difficulty
                of contract.Data.GameDifficulties
            ) {

                if (
                    difficulty.Difficulty ===
                    "hard"
                ) {

                    difficulty.Bricks =
                        Array.isArray(
                            patch.hardbricks
                        )
                            ? [
                                ...patch.hardbricks
                            ]
                            : []
                }
            }
        }


        controller.addMission(
            contract
        )
    }

    log(
        LogLevel.INFO,
        `${prefix} Plugin successfully loaded.`
    )
}