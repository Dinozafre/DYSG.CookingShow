
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


module.exports = function DefaultColoradoVector(controller) {

    const prefix =
        "[Default Colorado Vector]"

    if (
        Math.abs(PEACOCKVER) < 6000 ||
        compare(
            PEACOCKVERSTRING,
            "8.0.0"
        ) < 0
    ) {

        log(
            LogLevel.ERROR,
            `${prefix} This plugin requires Peacock v8.0.0 or above!`
        )

        return
    }


    const vectorId =
        "DefaultColoradoVector"


    const cleanupPlugin =
        "VectorCleanup.plugin.js"


    const freelancerVariationsMod =
        "KevinRudd.FreelancerVariations"


    const freelancerEnabled =
        controller.smf.modEnabledForGame(
            "h3",
            "steam",
            freelancerVariationsMod
        )

    const cleanupPaths = [

        path.resolve(
            "plugins",
            cleanupPlugin
        ),

        path.resolve(
            cleanupPlugin
        )
    ]


    const cleanupInstalled =
        cleanupPaths.some(
            cleanupPath =>
                existsSync(
                    cleanupPath
                )
        )


    if (!cleanupInstalled) {

        log(
            LogLevel.WARN,
            `${prefix} VectorCleanup.js was not found in the plugins folder. Please install VectorCleanup.js so this vector can be automatically removed from VariantCollector.json if this plugin is deleted.`
        )
    }


    const variants = [

        {
            name:
                "Colorado Normal",

            contractId:
                "1a98c48e-d618-4d4d-b17b-90ca3b180d2a",

            brick:
                "assembly:/_pro/scenes/missions/colorado_2/mission_mild_spades.brick"
        }

    ]


    function findConfigPath(
        filename
    ) {

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


    function loadConfig(
        configPath
    ) {

        try {

            return JSON.parse(
                readFileSync(
                    configPath,
                    "utf8"
                )
            )

        } catch (
            error
        ) {

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

        } catch (
            error
        ) {

            log(
                LogLevel.ERROR,
                `${prefix} Could not write ${configPath}: ${error.message}`
            )

            return false
        }
    }


    function addBrick(
        config,
        contractId,
        brick
    ) {

        let changed =
            false


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
                    false,

                vectorMarkers:
                    {}
            }


            config.patches.push(
                patch
            )


            changed =
                true
        }


        if (
            !Array.isArray(
                patch.bricks
            )
        ) {

            patch.bricks =
                []

            changed =
                true
        }


        if (
            !patch.bricks.includes(
                brick
            )
        ) {

            patch.bricks.push(
                brick
            )

            changed =
                true
        }


        if (
            !patch.vectorMarkers ||
            typeof patch.vectorMarkers !==
                "object" ||
            Array.isArray(
                patch.vectorMarkers
            )
        ) {

            patch.vectorMarkers =
                {}

            changed =
                true
        }


        if (
            patch.vectorMarkers[brick] !==
            vectorId
        ) {

            patch.vectorMarkers[brick] =
                vectorId

            changed =
                true
        }


        return changed
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


        let changed =
            false


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
                Array.isArray(
                    patch.bricks
                )
            ) {

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

                    changed =
                        true
                }
            }


            if (
                patch.vectorMarkers &&
                typeof patch.vectorMarkers ===
                    "object" &&
                !Array.isArray(
                    patch.vectorMarkers
                ) &&
                Object.prototype.hasOwnProperty.call(
                    patch.vectorMarkers,
                    brick
                )
            ) {

                delete patch.vectorMarkers[brick]

                changed =
                    true
            }
        }


        return changed
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

        } catch (
            error
        ) {

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


    let variantCollectorChanged =
        false


    for (
        const variant
        of variants
    ) {

        if (
            freelancerEnabled
        ) {

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


            continue
        }


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
        !freelancerEnabled
    ) {

        for (
            const patch
            of variantCollector.patches
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
    }


    log(
        LogLevel.INFO,
        `${prefix} Plugin successfully loaded.`
    )
}

