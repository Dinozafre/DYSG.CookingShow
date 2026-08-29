
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
    function VectorCleanup(controller) {

        const prefix =
            "[Vector Cleanup]"


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

        function vectorPluginExists(
            pluginFilename
        ) {

            if (
                typeof pluginFilename !==
                "string" ||
                pluginFilename.length ===
                0
            ) {

                return false
            }


            const possiblePaths = [

                path.resolve(
                    "plugins",
                    pluginFilename
                ),

                path.resolve(
                    pluginFilename
                )
            ]


            return possiblePaths.some(
                possiblePath =>
                    existsSync(
                        possiblePath
                    )
            )
        }


        const variantCollectorPath =
            findConfigPath(
                "VariantCollector.json"
            )


        if (
            !variantCollectorPath
        ) {

            log(
                LogLevel.INFO,
                `${prefix} VariantCollector.json was not found. Nothing to clean.`
            )

            return
        }


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


        let changed =
            false


        let removedBricks =
            0


        for (
            const patch
            of variantCollector.patches
        ) {

            if (
                !patch.vectorMarkers ||
                typeof patch.vectorMarkers !==
                    "object" ||
                Array.isArray(
                    patch.vectorMarkers
                )
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


            const markers = {

                ...patch.vectorMarkers

            }


            for (
                const [
                    brick,
                    marker
                ]
                of Object.entries(
                    markers
                )
            ) {

                if (
                    !marker ||
                    typeof marker !==
                        "object" ||
                    Array.isArray(
                        marker
                    )
                ) {

                    log(
                        LogLevel.DEBUG,
                        `${prefix} Found a legacy or invalid vector marker for ${brick}. Leaving it untouched.`
                    )

                    continue
                }


                const pluginFile =
                    marker.pluginFile


                if (
                    typeof pluginFile !==
                        "string" ||
                    pluginFile.length ===
                        0
                ) {

                    log(
                        LogLevel.DEBUG,
                        `${prefix} Vector marker for ${brick} does not contain a pluginFile. Leaving it untouched.`
                    )

                    continue
                }


                if (
                    vectorPluginExists(
                        pluginFile
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


                const brickWasRemoved =
                    patch.bricks.length !==
                    oldLength


                delete patch.vectorMarkers[
                    brick
                ]


                changed =
                    true


                if (
                    brickWasRemoved
                ) {

                    removedBricks +=
                        1


                    log(
                        LogLevel.WARN,
                        `${prefix} Removed orphaned brick ${brick}. Vector plugin ${pluginFile} is no longer installed.`
                    )

                } else {

                    log(
                        LogLevel.INFO,
                        `${prefix} Removed orphaned marker for ${brick}. Vector plugin ${pluginFile} is no longer installed.`
                    )
                }
            }
        }

        for (
            const patch
            of variantCollector.patches
        ) {

            if (
                patch.vectorMarkers &&
                typeof patch.vectorMarkers ===
                    "object" &&
                !Array.isArray(
                    patch.vectorMarkers
                ) &&
                Object.keys(
                    patch.vectorMarkers
                ).length ===
                    0
            ) {

                delete patch.vectorMarkers

                changed =
                    true
            }
        }


        const oldPatchLength =
            variantCollector.patches.length


        variantCollector.patches =
            variantCollector.patches.filter(
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


        if (
            variantCollector.patches.length !==
            oldPatchLength
        ) {

            changed =
                true


            log(
                LogLevel.INFO,
                `${prefix} Removed empty VariantCollector patch entries.`
            )
        }


        if (
            changed
        ) {

            if (
                saveConfig(
                    variantCollectorPath,
                    variantCollector
                )
            ) {

                log(
                    LogLevel.INFO,
                    `${prefix} Cleanup completed. Removed ${removedBricks} orphaned vector brick(s).`
                )
            }

        } else {

            log(
                LogLevel.INFO,
                `${prefix} No orphaned vector entries found.`
            )
        }


        log(
            LogLevel.INFO,
            `${prefix} Plugin successfully loaded.`
        )
    }

