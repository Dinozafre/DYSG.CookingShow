
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

const path =
    require("path")


module.exports =
    function HayVariantVector(controller) {

        const prefix =
            "[Hay Variant Vector]"


        // ========================================================
        // PEACOCK VERSION CHECK
        // ========================================================

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


        // ========================================================
        // VECTOR IDENTITY
        // ========================================================

        const vectorPluginId =
            "Bryn.HayVariantVector"


        const vectorPluginFile =
            "HayVariantVector.plugin.js"


        // ========================================================
        // VECTOR CLEANUP CHECK
        // ========================================================

        const vectorCleanupPath =
            path.resolve(
                "plugins",
                "VectorCleanup.plugin.js"
            )


        if (
            !existsSync(
                vectorCleanupPath
            )
        ) {

            log(
                LogLevel.WARN,
                `${prefix} VectorCleanup.plugin.js was not found in the plugins folder. Please install VectorCleanup.plugin.js or this vector may leave its brick behind if the plugin is later removed.`
            )

        } else {

            log(
                LogLevel.INFO,
                `${prefix} VectorCleanup.plugin.js detected. Orphan protection is active.`
            )
        }


        // ========================================================
        // GAME
        // ========================================================

        const gameVersion =
            "h3"


        const platform =
            "steam"


        // ========================================================
        // FREELANCER VARIATIONS
        // ========================================================

        const freelancerVariationsMod =
            "KevinRudd.FreelancerVariations"


        const freelancerDeployed =
            controller.smf.modEnabledForGame(
                gameVersion,
                platform,
                freelancerVariationsMod
            )


        // ========================================================
        // VARIANTS
        // ========================================================

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
            },
            {
                name:
                    "Cooking Show",

                modId:
                    "DYSG.CookingShow",

                contractId:
                    "358e3f41-9acc-4896-a22a-4a3107611520",

                brick:
                    "assembly:/_pro/scenes/missions/elegant/scene_potato_mild.brick"
            }

        ]


        // ========================================================
        // MAP IDS
        // ========================================================

        // Paris normal: ebb8cdab-e521-4ba8-9288-d697b1aaaba7
        // Paris showdown: c945b720-12c4-4f62-8026-4b4011a67dff

        // Sapienza normal: d4719601-83ce-4ca9-83cd-5164331d643f
        // Sapienza showdown: 47d10233-0008-4f34-abd2-a84ca2bb7530

        // Marrakesh normal: ff0264f0-c9b8-476f-b8f2-a5762d077a09
        // Marrakesh showdown: 2f5db1a8-dfcb-4b2a-9c5a-bd80fec93026

        // Bangkok normal: d40076af-74d1-484e-8936-1367d5b107ce
        // Bangkok showdown: 2f562dba-2b14-42f3-b9fb-eb72e79450ba

        // Colorado normal: 1a98c48e-d618-4d4d-b17b-90ca3b180d2a
        // Colorado showdown: 4a95baa5-6ad6-43c8-ae3e-be8449d578ec

        // Hokkaido normal: 76fd7c40-83a0-48c9-be49-cef107583eae
        // Hokkaido showdown: 65659b19-fb1a-4a14-b074-65227ffac128

        // Hawke's Bay normal: 5e2d2784-1fb0-4006-8e0b-d7d907bae1b5
        // Hawke's Bay showdown: bdda4dc3-6af8-44b6-b4ca-09de1b5cb6fd

        // Miami normal: 4a34f12a-ab98-4dc5-9262-c600193b2629
        // Miami showdown: ee67660e-4bd6-4743-9163-40331056f690

        // Santa Fortuna normal: 107100ca-f910-49a9-ac13-59d0bb5691a4
        // Santa Fortuna showdown: aab7a569-cead-40b8-81b5-c1605070b366

        // Mumbai normal: 59c15d1e-c65e-4394-9906-46cdeb944c64
        // Mumbai showdown: 0d2a243a-f140-4be5-bfe7-e151878ec88e

        // Whittleton Creek normal: dac2d6fd-4f25-4a63-b338-aef458c05a7f
        // Whittleton Creek showdown: 6efd360a-5f78-44ac-9823-df077018c2b3

        // Isle of Sgail normal: 37be638c-4265-4622-9326-8835b8535180
        // Isle of Sgail showdown: aa6447f6-7566-4e54-b1c9-15fa3d4acb39

        // New York normal: be4714d4-c7a5-4c21-a63a-89c5643965e7
        // New York showdown: a3aab02b-be9a-4f97-8ddb-80843dceb3c4

        // Haven Island normal: f075fbc3-79ef-4e42-9326-9572f712a298
        // Haven Island showdown: d2419fe4-ea72-4e61-b91b-bb39706f551d

        // Dubai normal: 84727ec8-7f13-4c00-94c1-b5c60a8a181f
        // Dubai showdown: cd1c3479-e3e4-42c3-a9a4-bfedd2ea31f

        // Dartmoor normal: d84fb174-2cbb-4337-8a66-f13f9fb170cd
        // Dartmoor showdown: dec0ed42-41bf-4ff0-bc0a-08d73b3e7430

        // Berlin normal: 0ffe44ea-d241-49ec-835c-74d5714db343
        // Berlin showdown: c147e93f-2fa6-4618-a84e-d929c5d3d391

        // Chongqing normal: 4d9b38ab-5ea8-4bc3-8fbe-273a36c72731
        // Chongqing showdown: 5162c4a1-4b07-43b1-82ad-37c9e350764c

        // Mendoza normal: 89500fa3-2466-4c52-8b90-9890cc5039ee
        // Mendoza showdown: 8caa8f0e-ac39-4088-95c1-42075afe8213

        // Ambrose Island normal: 060a48f0-117b-4b22-a165-111fd4a5b745
        // Ambrose Island showdown: 3e72588a-46ea-4cb8-a10f-e2242ca8cc99


        // ========================================================
        // FIND CONFIG PATH
        // ========================================================

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


        // ========================================================
        // LOAD CONFIG
        // ========================================================

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


        // ========================================================
        // SAVE CONFIG
        // ========================================================

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


        // ========================================================
        // ADD VECTOR MARKER
        // ========================================================

        function addVectorMarker(
            patch,
            brick
        ) {

            let changed =
                false


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


            const existingMarker =
                patch.vectorMarkers[
                    brick
                ]


            if (
                !existingMarker ||
                typeof existingMarker !==
                    "object" ||
                existingMarker.pluginId !==
                    vectorPluginId ||
                existingMarker.pluginFile !==
                    vectorPluginFile
            ) {

                patch.vectorMarkers[
                    brick
                ] = {

                    pluginId:
                        vectorPluginId,

                    pluginFile:
                        vectorPluginFile
                }


                changed =
                    true


                log(
                    LogLevel.INFO,
                    `${prefix} Registered vector marker for ${brick}.`
                )
            }


            return changed
        }


        // ========================================================
        // REMOVE VECTOR MARKER
        // ========================================================

        function removeVectorMarker(
            patch,
            brick
        ) {

            if (
                !patch.vectorMarkers ||
                typeof patch.vectorMarkers !==
                    "object" ||
                Array.isArray(
                    patch.vectorMarkers
                )
            ) {

                return false
            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    patch.vectorMarkers,
                    brick
                )
            ) {

                return false
            }


            const marker =
                patch.vectorMarkers[
                    brick
                ]


            // Only remove our own marker.
            if (
                !marker ||
                typeof marker !==
                    "object" ||
                marker.pluginId !==
                    vectorPluginId
            ) {

                return false
            }


            delete patch.vectorMarkers[
                brick
            ]


            return true
        }


        // ========================================================
        // REMOVE BRICK
        // ========================================================

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
                    removeVectorMarker(
                        patch,
                        brick
                    )
                ) {

                    changed =
                        true
                }
            }


            return changed
        }


        // ========================================================
        // ADD BRICK
        // ========================================================

        function addBrick(
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


            let patch =
                config.patches.find(
                    existingPatch =>
                        existingPatch.id ===
                        contractId
                )


            if (
                !patch
            ) {

                patch = {

                    id:
                        contractId,

                    bricks:
                        [],

                    hardbricks:
                        [],

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


            // ====================================================
            // REGISTER OUR OWNERSHIP
            // ====================================================

            if (
                addVectorMarker(
                    patch,
                    brick
                )
            ) {

                changed =
                    true
            }


            return changed
        }


        // ========================================================
        // REMOVE EMPTY PATCHES
        // ========================================================

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


                        const markers =
                            patch.vectorMarkers &&
                            typeof patch.vectorMarkers ===
                                "object" &&
                            !Array.isArray(
                                patch.vectorMarkers
                            )
                                ? Object.keys(
                                    patch.vectorMarkers
                                )
                                : []


                        return (
                            bricks.length > 0 ||
                            hardbricks.length > 0 ||
                            markers.length > 0
                        )
                    }
                )


            return (
                config.patches.length !==
                oldLength
            )
        }


        // ========================================================
        // FIND VARIANTCOLLECTOR
        // ========================================================

        const possibleCollectorPaths = [

            path.resolve(
                "VariantCollector.json"
            ),

            path.resolve(
                "plugins",
                "VariantCollector.json"
            )

        ]


        const existingCollectorPaths =
            possibleCollectorPaths.filter(
                possiblePath =>
                    existsSync(
                        possiblePath
                    )
            )


        if (
            existingCollectorPaths.length > 1
        ) {

            log(
                LogLevel.WARN,
                `${prefix} Multiple VariantCollector.json files were found.`
            )
        }


        let variantCollectorPath =
            existingCollectorPaths.length > 0
                ? existingCollectorPaths[0]
                : null


        // ========================================================
        // CREATE VARIANTCOLLECTOR IF NECESSARY
        // ========================================================

        if (
            !variantCollectorPath
        ) {

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


        // ========================================================
        // LOAD VARIANTCOLLECTOR
        // ========================================================

        const variantCollector =
            loadConfig(
                variantCollectorPath
            )


        if (
            !variantCollector
        ) {

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


        let freelancerChanged =
            false


        // ========================================================
        // FIND FREELANCER VARIATIONS CONFIG
        // ========================================================

        const freelancerPath =
            findConfigPath(
                "FreelancerVariations.json"
            )


        let freelancerConfig =
            null


        if (
            !freelancerPath
        ) {

            if (
                freelancerDeployed
            ) {

                log(
                    LogLevel.WARN,
                    `${prefix} Freelancer Variations is enabled but FreelancerVariations.json was not found.`
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


        // ========================================================
        // PROCESS VARIANTS
        // ========================================================

        for (
            const variant
            of variants
        ) {

            const variantDeployed =
                controller.smf.modEnabledForGame(
                    gameVersion,
                    platform,
                    variant.modId
                )


            // ====================================================
            // NORMAL VARIANTCOLLECTOR
            // ====================================================

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


                    log(
                        LogLevel.INFO,
                        `${prefix} Added ${variant.brick} to VariantCollector.json.`
                    )
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


                    log(
                        LogLevel.INFO,
                        `${prefix} Removed ${variant.brick} from VariantCollector.json.`
                    )
                }
            }


            // ====================================================
            // FREELANCER VARIATIONS
            // ====================================================

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


                        log(
                            LogLevel.INFO,
                            `${prefix} Added ${variant.brick} to FreelancerVariations.json.`
                        )
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


        // ========================================================
        // REMOVE EMPTY PATCHES
        // ========================================================

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


        // ========================================================
        // SAVE VARIANTCOLLECTOR
        // ========================================================

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


        // ========================================================
        // SAVE FREELANCER VARIATIONS
        // ========================================================

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


        // ========================================================
        // DETERMINE WHICH PATCHES TO APPLY
        // ========================================================

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


        // ========================================================
        // APPLY PATCHES
        // ========================================================

        for (
            const patch
            of patchesToApply
        ) {

            const contract =
                controller.resolveContract(
                    patch.id,
                    "h3"
                )


            if (
                !contract
            ) {

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

