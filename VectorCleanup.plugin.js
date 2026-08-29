const {
log,
LogLevel
} = require(
"@peacockproject/core/loggingInterop"
)

const {
PEACOCKVER,
PEACOCKVERSTRING,
compare
} = require(
"@peacockproject/core/utils"
)

const {
existsSync,
readFileSync,
writeFileSync
} = require(
"fs"
)

const path =
require(
"path"
)

module.exports =
function VectorCleanup(controller) {

    const prefix =
        "[Vector Cleanup]"


    // ========================================================
    // PEACOCK VERSION CHECK
    // ========================================================

    if (
        Math.abs(
            PEACOCKVER
        ) < 6000 ||
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


    function pluginFileExists(
        pluginFile
    ) {

        if (
            !pluginFile ||
            typeof pluginFile !==
                "string"
        ) {

            return false
        }


        const possiblePaths = [

            path.resolve(
                pluginFile
            ),

            path.resolve(
                "plugins",
                pluginFile
            )
        ]


        return possiblePaths.some(
            possiblePath =>
                existsSync(
                    possiblePath
                )
        )
    }


    function getLegacyPluginFile(
        marker
    ) {

        if (
            typeof marker !==
            "string"
        ) {

            return null
        }


        const legacyMarkers = {

            DefaultColoradoVector:
                "ColoradoDefaultVector.plugin.js",

            HayVariantVector:
                "HayVariantVector.plugin.js",

            "Bryn.HayVariantVector":
                "HayVariantVector.plugin.js",

            PumpkinVariantVector:
                "PumpkinVariantVector.plugin.js",

            "Bryn.PumpkinVariantVector":
                "PumpkinVariantVector.plugin.js"
        }


        return (
            legacyMarkers[
                marker
            ] ||
            null
        )
    }



    function getMarkerPluginFile(
        marker
    ) {

        if (
            marker &&
            typeof marker ===
                "object" &&
            !Array.isArray(
                marker
            ) &&
            typeof marker.pluginFile ===
                "string"
        ) {

            return marker.pluginFile
        }


        return getLegacyPluginFile(
            marker
        )
    }


    function cleanupConfig(
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


        let changed =
            false


        for (
            const patch
            of config.patches
        ) {

            if (
                !patch ||
                typeof patch !==
                    "object"
            ) {

                continue
            }


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


            const markedBricks =
                Object.keys(
                    patch.vectorMarkers
                )


            for (
                const brick
                of markedBricks
            ) {

                const marker =
                    patch.vectorMarkers[
                        brick
                    ]


                const pluginFile =
                    getMarkerPluginFile(
                        marker
                    )


                if (
                    !pluginFile
                ) {

                    continue
                }


                if (
                    pluginFileExists(
                        pluginFile
                    )
                ) {

                    continue
                }


                if (
                    Array.isArray(
                        patch.bricks
                    )
                ) {

                    const oldBrickLength =
                        patch.bricks.length


                    patch.bricks =
                        patch.bricks.filter(
                            existingBrick =>
                                existingBrick !==
                                brick
                        )


                    if (
                        patch.bricks.length !==
                        oldBrickLength
                    ) {

                        changed =
                            true
                    }
                }


                delete patch.vectorMarkers[
                    brick
                ]


                changed =
                    true
            }


            if (
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
            config.patches.length


        config.patches =
            config.patches.filter(
                patch => {

                    if (
                        !patch ||
                        typeof patch !==
                            "object"
                    ) {

                        return false
                    }


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
            config.patches.length !==
            oldPatchLength
        ) {

            changed =
                true
        }


        return changed
    }


    const configFiles = [

        "VariantCollector.json",

        "FreelancerVariations.json"
    ]


    for (
        const configFile
        of configFiles
    ) {

        const configPath =
            findConfigPath(
                configFile
            )


        if (
            !configPath
        ) {

            continue
        }


        const config =
            loadConfig(
                configPath
            )


        if (
            !config
        ) {

            continue
        }


        if (
            !Array.isArray(
                config.patches
            )
        ) {

            continue
        }


        const changed =
            cleanupConfig(
                config
            )


        if (
            !changed
        ) {

            continue
        }


        saveConfig(
            configPath,
            config
        )
    }


    log(
        LogLevel.INFO,
        `${prefix} Plugin successfully loaded.`
    )
}

