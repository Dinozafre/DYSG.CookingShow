/**
 * @import {SavedChallengeGroup} from "@peacockproject/core/types/challenges.d.ts"
 * @import {Controller} from "@peacockproject/core/controller.d.ts"
 */
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
const { getUserData, writeUserData } = require("@peacockproject/core/databaseHandler")
const { defaultSuits } = require("@peacockproject/core/utils")

/**
 * @type {SavedChallengeGroup[]}
 */
const cookingshowChallenges = [
	{
		Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
		Image: "images/challenges/categories/assassination/tile.jpg",
		Icon: "challenge_category_assassination",
		CategoryId: "assassination",
		Description: "UI_MENU_PAGE_CHALLENGE_CATEGORY_DESCRIPTION_SIGNATUREKILL",
		OrderIndex: 0,
		Challenges: [
                {
					"Id": "ca1fd06c-0b0b-4cac-93a7-bb9b35b03fc7",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_TARGETS_POISON_ONLY_NAME",
					"Description": "UI_CHALLENGES_STINGRAY_POISON_ALL_DESC",
					"ImageName": "images/challenges/potato/potato_ass_three_targets_down_by_posion.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "Goal": 3
                        },
                        "Context": {
                            "Count": 0
                        },
                        "ContextListeners": {
                            "Count": {
                                "type": "challengecounter",
                                "count": "$.Count",
                                "total": "$.Goal"
                            }
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        true
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillClass",
                                                        "poison"
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$inc": "Count"
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$.Count", "$.Goal"]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
				{
					"Id": "4f4c5376-0ebd-4c09-92bf-ccceb5a273a0",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_JUDGE_BY_PRODUCER_NAME",
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_JUDGE_BY_PRODUCER_DESC",
					"ImageName": "images/challenges/potato/potato_ass_elimination_by_proxy.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillType",
                                                    4
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.TotalDamage",
                                                    100000
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
				{
					"Id": "e4a8d70c-87e2-4ce0-a108-f0b1e2804947",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_DELICIIOUS_FOOD_NAME",
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_DELICIIOUS_FOOD_DESC",
					"ImageName": "images/challenges/potato/potato_ass_delicious_food.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.SetPieceType",
                                                    "a56ee73f-1aec-4612-b9ff-48b9ed09137a"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
				{
					"Id": "3072cece-fd6c-4904-aab0-c945a1742dd5",
					"Name": "UI_CHALLENGES_POTATO_ASSASINATION_TARGET_DOUBLE_KILL_NAME", //// kill judge and wtl in same time, one bullet
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_TARGET_DOUBLE_KILL_DESC",
					"ImageName": "images/challenges/potato/potato_ass_double_kill.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "Context": {},
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$or": [
                                             {
                                                "$and": [
                                                    {
                                                        "$eq": [
                                                            "$Value.RepositoryId",
                                                            "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                        ]
                                                    },
                                                    {
                                                        "$eq": [
                                                            "$Value.KillItemCategory",
                                                            "sniperrifle"
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "$and": [
                                                    {
                                                          "$eq": [
                                                            "$Value.RepositoryId",
                                                            "c4f56dd4-a8f0-4893-9da3-a5f1394245e3"
                                                        ]
                                                    },
                                                    {
                                                        "$eq": [
                                                            "$Value.KillItemCategory",
                                                            "sniperrifle"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Is_DoubleKill"
                                }
                            },
                            "Is_DoubleKill": {
                                "$timer": {
                                    "Condition": {
                                        "$after": 0.1
                                    },
                                    "Transition": "Failure"
                                },
                                "Kill": {
                                    "Condition": {
                                        "$or": [
                                            {
                                                "$and": [
                                                    {
                                                        "$eq": [
                                                            "$Value.RepositoryId",
                                                            "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                        ]
                                                    },
                                                    {
                                                        "$eq": [
                                                            "$Value.KillItemCategory",
                                                            "sniperrifle"
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "$and": [
                                                    {
                                                          "$eq": [
                                                            "$Value.RepositoryId",
                                                            "c4f56dd4-a8f0-4893-9da3-a5f1394245e3"
                                                        ]
                                                    },
                                                    {
                                                        "$eq": [
                                                            "$Value.KillItemCategory",
                                                            "sniperrifle"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "targets"]
                },
                {
					"Id": "23912fec-9552-490d-ba1a-d4f1fc062e39",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_SNIPER_TOWER_KILL_NAME", // kill main targets at tower by sniper rifle
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_SNIPER_TOWER_KILL_DESC",
					"ImageName": "images/challenges/potato/potato_ass_tower_triple_kill.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "Goal": 3
                        },
                        "ContextListeners": {
                            "Count": {
                                "type": "challengecounter",
                                "count": "$.Count",
                                "total": "$.Goal"
                            }
                        },
                        "Context": {
                            "Count": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "-": {
                                    "Transition": "InPosition"
                                }
                            },
                            "NotInPosition": {
                                "EnterVolume": {
                                    "Transition": "InPosition"
                                }
                            },
                            "InPosition": {
                                "Exit_Volume": {
                                    "Transition": "NotInPosition"
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$contains": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        true
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$inc": "Count"
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$.Count", "$.Goal"]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
                {
					"Id": "29711c4e-02ba-43c7-924d-7e15617506aa",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_WTL_BY_A_GAS_PLATE_NAME", // WTL ELIMINATION BY A GAS PLATE
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_WTL_BY_A_GAS_PLATE_DESC",
					"ImageName": "images/challenges/potato/potato_ass_gas_plate.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "227a86cb-3ce3-4de9-9106-f2729c88f302"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.SetPieceType",
                                                    "fab9eacb-dcc6-41e5-894b-4b14acc34b78"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
                {
					"Id": "18d1ae28-9761-4fc5-aa92-94d52a2fca11",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_DOUBLE_EXPLOSION_NAME", // WTL AND JUDGE A SINGLE EXPLOSION
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_DOUBLE_EXPLOSION_DESC",
					"ImageName": "images/challenges/potato/potato_ass_single_explosion_kill.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Is_DoubleKill": {
                                "$timer": {
                                    "Condition": {
                                        "$after": 0.1
                                    },
                                    "Transition": "Start"
                                },
                                "Kill": {
                                    "Condition": {
                                        "$or": [
                                            {
                                                "$and": [
                                                    {
                                                        "$eq": [
                                                            "$Value.RepositoryId",
                                                            "227a86cb-3ce3-4de9-9106-f2729c88f302"
                                                        ]
                                                    },
                                                    {
                                                        "$eq": [
                                                            "$Value.KillClass",
                                                            "explosion"
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "$and": [
                                                    {
                                                        "$eq": [
                                                            "$Value.RepositoryId",
                                                            "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                        ]
                                                    },
                                                    {
                                                        "$eq": [
                                                            "$Value.KillClass",
                                                            "explosion"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            },
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$or": [
                                            {
                                                "$and": [
                                                    {
                                                        "$eq": [
                                                            "$Value.RepositoryId",
                                                            "227a86cb-3ce3-4de9-9106-f2729c88f302"
                                                        ]
                                                    },
                                                    {
                                                        "$eq": [
                                                            "$Value.KillClass",
                                                            "explosion"
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "$and": [
                                                    {
                                                        "$eq": [
                                                            "$Value.RepositoryId",
                                                            "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                        ]
                                                    },
                                                    {
                                                        "$eq": [
                                                            "$Value.KillClass",
                                                            "explosion"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Is_DoubleKill"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
                {
					"Id": "a7dc1a40-fd5c-4d42-af74-27fa3c9fbe21",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_DOUBLE_ELECTRICITY_NAME", // WTL AND JUDGE BY ELECTICITY
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_DOUBLE_ELECTRICITY_DESC",
					"ImageName": "images/challenges/elegant/llama_electrocution_kill.jpg", // replace on other
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "Goal": 2
                        },
                        "ContextListeners": {
                            "Count": {
                                "type": "challengecounter",
                                "count": "$.Count",
                                "total": "$.Goal"
                            }
                        },
                        "Context": {
                            "Count": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                    "Condition": {
                                    "$or": [
                                             {
                                                "$and": [
                                                    {
                                                        "$eq": [
                                                            "$Value.RepositoryId",
                                                            "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                        ]
                                                    },
                                             {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "accident_electric"
                                                        ]
                                                    },
                                                    "in": [
                                                        "$Value.KillMethodBroad",
                                                        "$Value.KillMethodStrict"
                                                    ]
                                                }
                                            }
                                                ]
                                            },
                                            {
                                                "$and": [
                                                    {
                                                          "$eq": [
                                                            "$Value.RepositoryId",
                                                            "227a86cb-3ce3-4de9-9106-f2729c88f302"
                                                        ]
                                                    },
                                               {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "accident_electric"
                                                        ]
                                                    },
                                                    "in": [
                                                        "$Value.KillMethodBroad",
                                                        "$Value.KillMethodStrict"
                                                    ]
                                                }
                                            }
                                                ]
                                            }
                                        ]
                                        },
                                        "Actions": {
                                            "$inc": "Count"
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$.Count", "$.Goal"]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
                {
					"Id": "be3d3349-be13-44d9-9d46-aab6948fef5f",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_JUDGE_CONSUME_POISON_NAME", // JUDGE ELIMINATION BY CONSUME POSION
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_JUDGE_CONSUME_POISON_DESC",
					"ImageName": "images/challenges/potato/potato_ass_consume_poison.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "consumed_poison"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
                {
					"Id": "9c8f70c5-6f81-4685-a65f-8b305c5f2505",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_JUDGE_PUSH_NAME", // JUDGE ELIMINATION BY PUSH
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_JUDGE_PUSH_DESC",
					"ImageName": "images/challenges/potato/potato_ass_push_kill.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "PushOver"
                                                        ]
                                                    },
                                                    "in": "$Value.DamageEvents"
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
                {
					"Id": "53cfd001-4b0e-4f3e-bad7-ab832bf6e95f",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_JUDGE_GAS_HEATING_LAMP_NAME", // JUDGE ELIMINATION BY A GAS HEATING LAMP
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_JUDGE_GAS_HEATING_LAMP_DESC",
					"ImageName": "images/challenges/potato/potato_ass_gas_heating_lamp.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "8dd7dc42-948e-4884-8581-5b4a9e8279c9"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.SetPieceType",
                                                    "518b6c2d-2a3d-4f87-afbf-2e84393d260d"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
                {
					"Id": "3472686d-9d5c-4518-8eac-143d001a2dde",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_PRODUCER_CONSUME_POISON_NAME", // PRODUCER ELIMINATION BY CONSUME POISON
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_PRODUCER_CONSUME_POISON_DESC",
					"ImageName": "images/challenges/potato/potato_ass_the_great_legecy.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "c4f56dd4-a8f0-4893-9da3-a5f1394245e3"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "consumed_poison"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
                {
					"Id": "5a4a7686-5ce8-4e95-89ef-78f6403dafe1",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_PRODUCER_AFTER_MEETING_NAME", // PRODUCER ELIMINATION BY A BUSH AFTER MEETING
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_PRODUCER_AFTER_MEETING_DESC",
					"ImageName": "images/challenges/potato/potato_ass_after_meeting.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Meeting_Over_Event": {
                                    "Transition": "CheckKill"
                                }
                            },
                            "CheckKill": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "c4f56dd4-a8f0-4893-9da3-a5f1394245e3"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "PushOver"
                                                        ]
                                                    },
                                                    "in": "$Value.DamageEvents"
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "$timer": {
                                    "Condition": {
                                        "$after": 30
                                    },
                                    "Transition": "Failure"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                },
                {
					"Id": "39b36ce9-e10b-42f8-a853-2166eeb6813c",
		            "Name": "UI_CHALLENGES_POTATO_ASSASINATION_WTL_FLOWER_POT_NAME", // WTL ELIMINATION BY A FLOWER POT
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_WTL_FLOWER_POT_DESC",
					"ImageName": "images/challenges/potato/potato_ass_flower_pot.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "227a86cb-3ce3-4de9-9106-f2729c88f302"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.SetPieceType",
                                                    "26353452-9302-4fd6-bd1d-d26051728d23"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "assassination"]
                }
                /// ADD HERE CHALLANGE FOR ELIMINATION JUDGE BY POISINING THE BOTTLE OF WATER (done)
                /// ADD HERE CHALLANGE FOR ELIMINATION JUDGE BY ELECTRICITY (united in one challenge) (done)
                /// ADD HERE CHALLANGE FOR ELIMINATION WTL BY ELECTRICITY (united in one challenge) (done)
                /// ADD HERE CHALLANGE FOR ELIMINATION JUDGE BY PUSHING (done)
                /// ADD HERE CHALLANGE FOR ELIMINATION JUDGE BY EXPLOSING DURING SMOKING (done)
                /// ADD HERE CHALLANGE FOR ELIMINATION JUDGE BY A GAS HEATING LAMP (done)
                /// ADD HERE CHALLANGE FOR ELIMINATION WTL BY A FALLING OBJECT (done)
                /// CHALLANGE FOR ELIMINATION HABKO BY CONSUME POSION
                /// CHALLANGE FOR ELIMINATION HABKO AFER MEETING WITH JUDGE
        ]
	},
	{
		Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
		Image: "images/challenges/categories/targets/tile.jpg",
		Icon: "challenge_category_targets",
		CategoryId: "targets",
		Description: "UI_MENU_PAGE_CHALLENGE_CATEGORY_DESCRIPTION_PROFESSIONAL",
		OrderIndex: 3,
		Challenges: [
			{
					"Id": "f32aa844-b82d-4b16-acff-6ce09a552f99",
					"Name": "UI_CHALLENGES_POTATO_ASSASINATION_TARGET_WTL_NAME",
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_TARGET_WTL_DESC",
					"ImageName": "images/challenges/potato/potato_targets_wtl.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
					"Icon": "challenge_category_targets",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "hit",
						"States": {
							"Start": {
								"Kill": {
									"Condition": {
										"$eq": [ "$Value.RepositoryId","227a86cb-3ce3-4de9-9106-f2729c88f302" ]
									},
									"Transition": "Success"
								}
							}
						}
					},
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "targets"]
                },
				{
					"Id": "f7f075bd-e225-4663-b2f1-ff14d182f0a8",
					"Name": "UI_CHALLENGES_POTATO_ASSASINATION_TARGET_JUDGE_NAME",
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_TARGET_JUDGE_DESC",
					"ImageName": "images/challenges/potato/potato_targets_judge.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
					"Icon": "challenge_category_targets",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "hit",
						"States": {
							"Start": {
								"Kill": {
									"Condition": {
										"$eq": [ "$Value.RepositoryId","8dd7dc42-948e-4884-8581-5b4a9e8279c9" ]
									},
									"Transition": "Success"
								}
							}
						}
					},
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "targets"]
                },
				{
					"Id": "f891c47d-a90c-4e81-ba3b-436fb722a8e5",
					"Name": "UI_CHALLENGES_POTATO_ASSASINATION_TARGET_PRODUCER_NAME",
					"Description": "UI_CHALLENGES_POTATO_ASSASINATION_TARGET_PRODUCER_DESC",
					"ImageName": "images/challenges/potato/potato_targets_producer.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
					"Icon": "challenge_category_targets",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "hit",
						"States": {
							"Start": {
								"Kill": {
									"Condition": {
										"$eq": [ "$Value.RepositoryId","c4f56dd4-a8f0-4893-9da3-a5f1394245e3" ]
									},
									"Transition": "Success"
								}
							}
						}
					},
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "targets"]
                }
		]
	},
	{
		Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Image: "images/challenges/categories/discovery/tile.jpg",
		Icon: "challenge_category_discovery",
		CategoryId: "discovery",
		Description: "UI_MENU_PAGE_CHALLENGE_CATEGORY_DESCRIPTION_EXPLORATION",
		OrderIndex: 1,
		Challenges: [
				{
					"Id": "e98242df-b053-4c9f-a71d-1ce2b71b6c10",
					"Name": "UI_CHALLENGES_POTATO_DISCOVARY_FROM_THE_ELITE_NAME",
					"Description": "UI_CHALLENGES_POTATO_DISCOVARY_FROM_THE_ELITE_DESC",
					"ImageName": "images/challenges/potato/potato_discovery_elite_st.jpg",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
					"Icon": "challenge_category_discovery",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Disguise": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value",
                                            "022f88b9-3a58-4e6c-9958-5589d301b543"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "medium", "discovery"]
                },
				{
					"Id": "0bae73bd-db82-40fd-8203-a44935f8a26e",
					"Name": "UI_CHALLENGES_POTATO_DISCOVARY_GET_BTL_DISGUISE_NAME",
					"Description": "UI_CHALLENGES_POTATO_DISCOVARY_GET_BTL_DISGUISE_DESC",
					"ImageName": "images/challenges/potato/potato_discovery_master_chief.jpg", // update image
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
					"Icon": "challenge_category_discovery",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Disguise": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value",
                                            "b7ce1e36-f504-487e-abc6-21298d1756cc"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "medium", "discovery"]
                },
				{
					"Id": "eb2c0bae-cb12-44f8-9dff-baeead62e8c8",
					"Name": "UI_CHALLENGES_POTATO_DISCOVARY_GET_BTA_DISGUISE_NAME",
					"Description": "UI_CHALLENGES_POTATO_DISCOVARY_GET_BTA_DISGUISE_DESC",
					"ImageName": "images/challenges/potato/potato_discovery_mr_helper.jpg", // update image
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
					"Icon": "challenge_category_discovery",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Disguise": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value",
                                            "b9803976-1234-4df3-8740-7d21f22eac4d"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "medium", "discovery"]
                },
				{
					"Id": "88f216bc-561e-43e1-81dc-5151396b2a70",
					"Name": "UI_CHALLENGES_POTATO_DISCOVARY_GET_WTA_DISGUISE_NAME",
					"Description": "UI_CHALLENGES_POTATO_DISCOVARY_GET_WTA_DISGUISE_DESC",
					"ImageName": "images/challenges/potato/potato_discovery_rookie_oguzok.jpg", // update image
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
					"Icon": "challenge_category_discovery",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Disguise": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value",
                                            "73cb0e63-4464-49c4-ada8-6b1cdbd49ca3"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "medium", "discovery"]
                },
								{
					"Id": "e9b664d5-6a82-4943-a239-00abdb3ebe6a",
					"Name": "UI_CHALLENGES_POTATO_DISCOVARY_GET_WTL_DISGUISE_NAME",
					"Description": "UI_CHALLENGES_POTATO_DISCOVARY_GET_WTL_DISGUISE_DESC",
					"ImageName": "images/challenges/potato/potato_discovery_mr_chief_to_your_service.jpg", // update image
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
					"Icon": "challenge_category_discovery",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Disguise": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value",
                                            "d95d1c0b-98a1-49b0-9988-bf711db3d326"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "medium", "discovery"]
                },
				{
					"Id": "7ad6fbb6-a39c-46fc-9fa0-524f80b50d28",
					"Name": "UI_CHALLENGES_POTATO_DISCOVARY_GET_JOURNALIST_DISGUISE_NAME",
					"Description": "UI_CHALLENGES_POTATO_DISCOVARY_GET_JOURNALIST_DISGUISE_DESC",
					"ImageName": "images/challenges/potato/potato_discovery_free_press.jpg", // update image
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
					"Icon": "challenge_category_discovery",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Disguise": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value",
                                            "723e73f3-9fa4-40d8-bb11-b66184c9a795"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "medium", "discovery"]
                }
		]
	},
	{
		Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Image: "images/challenges/categories/feats/tile.jpg",
		Icon: "challenge_category_feats",
		CategoryId: "feats",
		Description: "UI_MENU_PAGE_CHALLENGE_CATEGORY_DESCRIPTION_COMMUNITY",
		OrderIndex: 2,
		Challenges: [
				{
					"Id": "8bafa206-d38d-4b7e-bb77-51863c19bf95",
					"Name": "UI_CHALLENGES_POTATO_FEATS_OPP_STONEHOSTAGE_NAME",
					"Description": "UI_CHALLENGES_POTATO_FEATS_OPP_STONEHOSTAGE_DESC",
					"ImageName": "images/challenges/potato/potato_feats_missionstory_stonehostage.jpg",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
					"Icon": "challenge_category_feats",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "Target": "3fbb389f-adaa-4c94-9794-4cb2935b44a6"
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "OpportunityEvents": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "$.Target"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.Event",
                                                    "Completed"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "feats"]
                },
				{
					"Id": "e99057c6-1dd7-4e39-bdd8-53b0c921bfaa",
					"Name": "UI_CHALLENGES_POTATO_FEATS_OPP_JUDGECOSPIRACY_NAME",
					"Description": "UI_CHALLENGES_POTATO_FEATS_OPP_JUDGECOSPIRACY_DESC",
					"ImageName": "images/challenges/potato/potato_feats_missionstory_conspiracy.jpg",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
					"Icon": "challenge_category_feats",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "Target": "ec9c7b89-1813-4413-85ca-8c933572d8d6"
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "OpportunityEvents": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "$.Target"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.Event",
                                                    "Completed"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "feats"]
                },
				{
					"Id": "c503c70c-cdd4-44df-9796-34420b274a0d",
                    "Name": "UI_CHALLENGES_POTATO_FEATS_COMPLETE_SHOW_CONTRACT_NAME",
					"Description": "UI_CHALLENGES_POTATO_FEATS_COMPLETE_SHOW_CONTRACT_DESC",
					"ImageName": "images/challenges/potato/potato_feats_complete_the_mission.jpg",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
					"Icon": "challenge_category_feats",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$eq": [
                                            "$ContractId",
                                            "358e3f41-9acc-4896-a22a-4a3107611520"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
					},
					"InclusionData": {
						"ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
					},
                    "Tags": ["story", "easy", "feats"]
                },
                {
                    "Id": "0661ad26-207c-4e18-bcb4-58cc2f96ef02",
                    "Name": "UI_CHALLENGES_POTATO_MISSIONSTORY_COMPLETED_NAME",
                    "ImageName": "images/challenges/potato/potato_feats_full_menu.jpg",
                    "Description": "UI_CHALLENGES_POTATO_MISSIONSTORY_COMPLETED_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
                    "Icon": "challenge_category_feats",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "Targets": [
                                "e99057c6-1dd7-4e39-bdd8-53b0c921bfaa",
                                "8bafa206-d38d-4b7e-bb77-51863c19bf95"
                            ]
                        },
                        "Context": {
                            "CompletedChallenges": []
                        },
                        "ContextListeners": {
                            "CompletedChallenges": {
                                "comparand": "$.Targets",
                                "type": "challengetree"
                            }
                        },
                        "Scope": "profile",
                        "States": {
                            "Start": {
                                "ChallengeCompleted": [
                                    {
                                        "$pushunique": [
                                            "CompletedChallenges",
                                            "$Value.ChallengeId"
                                        ]
                                    },
                                    {
                                        "Condition": {
                                            "$all": {
                                                "?": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$.##"
                                                            ]
                                                        },
                                                        "in": "$.CompletedChallenges"
                                                    }
                                                },
                                                "in": "$.Targets"
                                            }
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "feats", "hard"],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "7ae58ab1-6427-4225-b77b-0f863743ab6c",
                    "Name": "UI_CHALLENGES_POTATO_NO_BODY_NO_CRIME_NAME",
                    "ImageName": "images/challenges/potato/potato_feats_no_body_no_crime.jpg",
                    "Description": "UI_CHALLENGES_POTATO_NO_BODY_NO_CRIME_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
                    "Icon": "challenge_category_feats",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "Goal": 2
                        },
                        "Context": {
                            "Count": 0
                        },
                        "ContextListeners": {
                            "Count": {
                                "type": "challengecounter",
                                "count": "$.Count",
                                "total": "$.Goal"
                            }
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "NoBodyNoCrime_Event": [
                                    {
                                        "Actions": {
                                            "$inc": "Count"
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$.Count", "$.Goal"]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "feats", "hard"],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "c5546413-421b-4dfe-9c21-7019ed3f22b0", // complete mission without show's cancelling
                    "Name": "UI_CHALLENGES_POTATO_CLEAN_RUN_NAME",
                    "ImageName": "images/challenges/potato/potato_feats_clean_run.jpg",
                    "Description": "UI_CHALLENGES_POTATO_CLEAN_RUN_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
                    "Icon": "challenge_category_feats",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$eq": [
                                            "$ContractId",
                                            "358e3f41-9acc-4896-a22a-4a3107611520"
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "ShowCancelled_Event": {
                                    "Transition": "Failure"
                                }
                            }
                        }
                    },
                    "Tags": ["story", "feats", "hard"],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "329bda57-95c4-4327-85ef-5ee135b7ef88", // wait for show is ended
                    "Name": "UI_CHALLENGES_POTATO_THE_END_NAME",
                    "ImageName": "images/challenges/potato/potato_feats_the_end.jpg",
                    "Description": "UI_CHALLENGES_POTATO_THE_END_DESC",
                    "Rewards": {
                        
                    },
                    "Drops": ["STARTING_LOCATION_SKIP5MINUTES"],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
                    "Icon": "challenge_category_feats",
					"LocationId": "LOCATION_PARENT_ELEGANT",
					"ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ShowEnded_Event": {
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
                    "Tags": ["story", "feats", "hard"],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                }
		]
	},
	{
		Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
		Image: "images/challenges/categories/classic/tile.jpg",
		Icon: "profile",
		CategoryId: "classic",
		Description: "",
		OrderIndex: 4,
            "Challenges": [
                {
                    "Id": "0410f4cc-f330-4a65-b81f-f47d407c0f2c",
                    "Name": "UI_CHALLENGES_STINGRAY_SUIT_ONLY_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_hard_47_suit_only.jpg",
                    "Description": "UI_CHALLENGES_STINGRAY_SUIT_ONLY_DIFFICULTY_HARD_DESC",
                    "Rewards": {
                        "MasteryXP": 1000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["hard"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "Context": {},
                        "States": {
                            "Start": {
                                "ContractStart": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsHitmanSuit",
                                                false
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "Disguise": {
                                    "Transition": "Failure"
                                },
                                "ContractEnd": {
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
                    "Tags": ["story", "easy", "classic", "difficulty_hard"],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "b0472568-82e7-4418-827d-3a93e949b5dc",
                    "Name": "UI_CHALLENGES_STINGRAY_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_easy_47_sa_suit.jpg",
                    "Description": "UI_CHALLENGES_POTATO_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["easy"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "Targets": [],
                            "RecordingDestroyed": true,
                            "LastAccidentTime": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.Targets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "AccidentBodyFound": {
                                    "$set": ["LastAccidentTime", "$Timestamp"]
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "ContractStart": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsHitmanSuit",
                                                false
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$Value.KillContext",
                                                            1
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "MurderedBodySeen": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                true
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Witnesses",
                                                "$Value.Witness"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsWitnessTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$.LastAccidentTime",
                                                            "$Timestamp"
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Disguise": {
                                    "Transition": "Failure"
                                }
                            }
                        }
                    },
                    "Tags": [
                        "story",
                        "hard",
                        "suitonly",
                        "classic",
                        "difficulty_easy"
                    ],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "0099e9a4-d071-4467-a262-af2cbb25fc04",
                    "Name": "UI_CHALLENGES_STINGRAY_SNIPER_ASSASSIN_DIFFICULTY_HARD_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_easy_47_sniper_assassin.jpg",
                    "Description": "UI_CHALLENGES_POTATO_SNIPER_ASSASSIN_DIFFICULTY_EASY_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["easy"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "Targets": [],
                            "RecordingDestroyed": true,
                            "SniperKillSierraCar": false
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.Targets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "SniperKillSierraCar": {
                                    "$set": ["SniperKillSierraCar", true]
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$and": [
                                                        {
                                                            "$not": {
                                                                "$contains": [
                                                                    "$Value.KillItemCategory",
                                                                    "sniperrifle"
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "$eq": [
                                                                "$Value.IsTarget",
                                                                true
                                                            ]
                                                        },
                                                        {
                                                            "$or": [
                                                                {
                                                                    "$not": {
                                                                        "$eq": [
                                                                            "$Value.RepositoryId",
                                                                            "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    "$and": [
                                                                        {
                                                                            "$eq": [
                                                                                "$Value.RepositoryId",
                                                                                "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                            ]
                                                                        },
                                                                        {
                                                                            "$eq": [
                                                                                "$.SniperKillSierraCar",
                                                                                false
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "$and": [
                                                        {
                                                            "$eq": [
                                                                "$Value.IsTarget",
                                                                false
                                                            ]
                                                        },
                                                        {
                                                            "$not": {
                                                                "$eq": [
                                                                    "$Value.KillContext",
                                                                    1
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": [
                        "story",
                        "medium",
                        "sniper",
                        "classic",
                        "difficulty_easy"
                    ],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "028e6ae1-3956-49fc-913e-ad2c13abcdee",
                    "Name": "UI_CHALLENGES_STINGRAY_SNIPER_ASSASSIN_DIFFICULTY_HARD_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_hard_47_silent_assassin.jpg",
                    "Description": "UI_CHALLENGES_POTATO_SILENT_ASSASSIN_DIFFICULTY_HARD_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["hard"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "KilledTargets": [],
                            "RecordingDestroyed": true,
                            "LastAccidentTime": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.KilledTargets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "AccidentBodyFound": {
                                    "$set": ["LastAccidentTime", "$Timestamp"]
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$Value.KillContext",
                                                            1
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "MurderedBodySeen": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                true
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Witnesses",
                                                "$Value.Witness"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsWitnessTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$.LastAccidentTime",
                                                            "$Timestamp"
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "hard", "classic", "difficulty_hard"],
                    "InclusionData": {
                       "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "bd704615-4757-461f-a768-a1fa42d13425",
                    "Name": "UI_CHALLENGES_STINGRAY_SILENT_ASSASSIN_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_normal_47_silent_assassin.jpg",
                    "Description": "UI_CHALLENGES_POTATO_SILENT_ASSASSIN_DIFFICULTY_EASY_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["normal"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "KilledTargets": [],
                            "RecordingDestroyed": true,
                            "LastAccidentTime": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.KilledTargets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "AccidentBodyFound": {
                                    "$set": ["LastAccidentTime", "$Timestamp"]
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$Value.KillContext",
                                                            1
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "MurderedBodySeen": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                true
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Witnesses",
                                                "$Value.Witness"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsWitnessTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$.LastAccidentTime",
                                                            "$Timestamp"
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "hard", "classic", "difficulty_normal"],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "2b308a78-9551-45ca-a023-27249e7fab5a",
                    "Name": "UI_CHALLENGES_STINGRAY_SUIT_ONLY_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_normal_47_suit_only.jpg",
                    "Description": "UI_CHALLENGES_STINGRAY_SUIT_ONLY_DIFFICULTY_EASY_DESC",
                    "Rewards": {
                        "MasteryXP": 1000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["normal"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "Context": {},
                        "States": {
                            "Start": {
                                "ContractStart": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsHitmanSuit",
                                                false
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "Disguise": {
                                    "Transition": "Failure"
                                },
                                "ContractEnd": {
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
                    "Tags": ["story", "easy", "classic", "difficulty_normal"],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "4c6358fc-df73-4b66-9eb4-ba83ba0d5730",
                    "Name": "UI_CHALLENGES_STINGRAY_SNIPER_ASSASSIN_DIFFICULTY_HARD_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_normal_47_sniper_assassin.jpg",
                    "Description": "UI_CHALLENGES_POTATO_SNIPER_ASSASSIN_DIFFICULTY_HARD_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["normal"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "Targets": [],
                            "RecordingDestroyed": true,
                            "SniperKillSierraCar": false
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.Targets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "SniperKillSierraCar": {
                                    "$set": ["SniperKillSierraCar", true]
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$and": [
                                                        {
                                                            "$not": {
                                                                "$contains": [
                                                                    "$Value.KillItemCategory",
                                                                    "sniperrifle"
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "$eq": [
                                                                "$Value.IsTarget",
                                                                true
                                                            ]
                                                        },
                                                        {
                                                            "$or": [
                                                                {
                                                                    "$not": {
                                                                        "$eq": [
                                                                            "$Value.RepositoryId",
                                                                            "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    "$and": [
                                                                        {
                                                                            "$eq": [
                                                                                "$Value.RepositoryId",
                                                                                "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                            ]
                                                                        },
                                                                        {
                                                                            "$eq": [
                                                                                "$.SniperKillSierraCar",
                                                                                false
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "$and": [
                                                        {
                                                            "$eq": [
                                                                "$Value.IsTarget",
                                                                false
                                                            ]
                                                        },
                                                        {
                                                            "$not": {
                                                                "$eq": [
                                                                    "$Value.KillContext",
                                                                    1
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": [
                        "story",
                        "medium",
                        "sniper",
                        "classic",
                        "difficulty_normal"
                    ],
                    "InclusionData": {
                       "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "400a78d5-46e0-45a6-9912-bb8b8c24433d",
                    "Name": "UI_CHALLENGES_STINGRAY_BIG5_HARD_NAME",
                    "ImageName": "Images/Challenges/profile_challenges/classics_location_hard.jpg",
                    "Description": "UI_CHALLENGES_POTATO_BIG5_HARD_DESC",
                    "Rewards": {
                        "MasteryXP": 8000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["hard"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "RequiredChallenges": [
                                "0410f4cc-f330-4a65-b81f-f47d407c0f2c",
                                "028e6ae1-3956-49fc-913e-ad2c13abcdee",
                                "e08aedaa-f159-447e-adc2-05d0979286ad",
                                "42655732-6b93-422d-87db-4424b27971b3"
                            ]
                        },
                        "Context": {
                            "CompletedChallenges": []
                        },
                        "ContextListeners": {
                            "CompletedChallenges": {
                                "comparand": "$.RequiredChallenges",
                                "type": "challengetree"
                            }
                        },
                        "Scope": "hit",
                        "States": {
                            "Start": {
                                "ChallengeCompleted": [
                                    {
                                        "$pushunique": [
                                            "CompletedChallenges",
                                            "$Value.ChallengeId"
                                        ]
                                    },
                                    {
                                        "Condition": {
                                            "$all": {
                                                "?": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$.##"
                                                            ]
                                                        },
                                                        "in": "$.CompletedChallenges"
                                                    }
                                                },
                                                "in": "$.RequiredChallenges"
                                            }
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": [
                        "story",
                        "very-hard",
                        "difficulty_hard",
                        "classic"
                    ],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "a3afaa95-9e5c-48ff-8527-4e1ae043e42d",
                    "Name": "UI_CHALLENGES_STINGRAY_SNIPER_ASSASSIN_DIFFICULTY_HARD_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_easy_47_silent_assassin.jpg",
                    "Description": "UI_CHALLENGES_POTATO_SILENT_ASSASSIN_DIFFICULTY_EASY_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["easy"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "KilledTargets": [],
                            "RecordingDestroyed": true,
                            "LastAccidentTime": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.KilledTargets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "AccidentBodyFound": {
                                    "$set": ["LastAccidentTime", "$Timestamp"]
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$Value.KillContext",
                                                            1
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "MurderedBodySeen": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                true
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Witnesses",
                                                "$Value.Witness"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsWitnessTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$.LastAccidentTime",
                                                            "$Timestamp"
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "hard", "classic", "difficulty_easy"],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "e08aedaa-f159-447e-adc2-05d0979286ad",
                    "Name": "UI_CHALLENGES_STINGRAY_SNIPER_ASSASSIN_DIFFICULTY_HARD_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_hard_47_sniper_assassin.jpg",
                    "Description": "UI_CHALLENGES_POTATO_SNIPER_ASSASSIN_DIFFICULTY_HARD_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["hard"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "Targets": [],
                            "RecordingDestroyed": true,
                            "SniperKillSierraCar": false
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.Targets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "SniperKillSierraCar": {
                                    "$set": ["SniperKillSierraCar", true]
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$and": [
                                                        {
                                                            "$not": {
                                                                "$contains": [
                                                                    "$Value.KillItemCategory",
                                                                    "sniperrifle"
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "$eq": [
                                                                "$Value.IsTarget",
                                                                true
                                                            ]
                                                        },
                                                        {
                                                            "$or": [
                                                                {
                                                                    "$not": {
                                                                        "$eq": [
                                                                            "$Value.RepositoryId",
                                                                            "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    "$and": [
                                                                        {
                                                                            "$eq": [
                                                                                "$Value.RepositoryId",
                                                                                "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                            ]
                                                                        },
                                                                        {
                                                                            "$eq": [
                                                                                "$.SniperKillSierraCar",
                                                                                false
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "$and": [
                                                        {
                                                            "$eq": [
                                                                "$Value.IsTarget",
                                                                false
                                                            ]
                                                        },
                                                        {
                                                            "$not": {
                                                                "$eq": [
                                                                    "$Value.KillContext",
                                                                    1
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": [
                        "story",
                        "medium",
                        "sniper",
                        "classic",
                        "difficulty_hard"
                    ],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "ffd4e501-d027-4d5a-a57d-52e3e606b507",
                    "Name": "UI_CHALLENGES_STINGRAY_SUIT_ONLY_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_easy_47_suit_only.jpg",
                    "Description": "UI_CHALLENGES_STINGRAY_SUIT_ONLY_DIFFICULTY_EASY_DESC",
                    "Rewards": {
                        "MasteryXP": 1000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["easy"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "Context": {},
                        "States": {
                            "Start": {
                                "ContractStart": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsHitmanSuit",
                                                false
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "Disguise": {
                                    "Transition": "Failure"
                                },
                                "ContractEnd": {
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
                    "Tags": ["story", "easy", "classic", "difficulty_easy"],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "582797d9-4a7f-436b-a9b5-53e20acfdfea",
                    "Name": "UI_CHALLENGES_STINGRAY_BIG5_HARD_NAME",
                    "ImageName": "Images/Challenges/profile_challenges/classics_location_easy.jpg",
                    "Description": "UI_CHALLENGES_POTATO_BIG5_EASY_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["easy"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "RequiredChallenges": [
                                "b0472568-82e7-4418-827d-3a93e949b5dc",
                                "0099e9a4-d071-4467-a262-af2cbb25fc04",
                                "a3afaa95-9e5c-48ff-8527-4e1ae043e42d",
                                "ffd4e501-d027-4d5a-a57d-52e3e606b507"
                            ]
                        },
                        "Context": {
                            "CompletedChallenges": []
                        },
                        "ContextListeners": {
                            "CompletedChallenges": {
                                "comparand": "$.RequiredChallenges",
                                "type": "challengetree"
                            }
                        },
                        "Scope": "hit",
                        "States": {
                            "Start": {
                                "ChallengeCompleted": [
                                    {
                                        "$pushunique": [
                                            "CompletedChallenges",
                                            "$Value.ChallengeId"
                                        ]
                                    },
                                    {
                                        "Condition": {
                                            "$all": {
                                                "?": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$.##"
                                                            ]
                                                        },
                                                        "in": "$.CompletedChallenges"
                                                    }
                                                },
                                                "in": "$.RequiredChallenges"
                                            }
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "medium", "difficulty_easy", "classic"],
                    "InclusionData": {
                       "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "6582e9d0-5b61-4668-adc6-1a680f54d91c",
                    "Name": "UI_CHALLENGES_STINGRAY_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_normal_47_sa_suit.jpg",
                    "Description": "UI_CHALLENGES_POTATO_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["normal"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "Targets": [],
                            "RecordingDestroyed": true,
                            "LastAccidentTime": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.Targets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "AccidentBodyFound": {
                                    "$set": ["LastAccidentTime", "$Timestamp"]
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "ContractStart": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsHitmanSuit",
                                                false
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$Value.KillContext",
                                                            1
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "MurderedBodySeen": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                true
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Witnesses",
                                                "$Value.Witness"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsWitnessTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$.LastAccidentTime",
                                                            "$Timestamp"
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Disguise": {
                                    "Transition": "Failure"
                                }
                            }
                        }
                    },
                    "Tags": [
                        "story",
                        "hard",
                        "suitonly",
                        "classic",
                        "difficulty_normal"
                    ],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "42664708-921b-443f-8c71-86a864897860",
                    "Name": "UI_CHALLENGES_STINGRAY_BIG5_HARD_NAME",
                    "ImageName": "Images/Challenges/profile_challenges/classics_location_normal.jpg",
                    "Description": "UI_CHALLENGES_POTATO_BIG5_NORMAL_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["normal"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "RequiredChallenges": [
                                "f741efcf-34c1-4596-ae77-46ab767bdfd6",
                                "21483720-f74a-426e-ab62-85d7767b8ab3",
                                "caffa390-9d82-4041-a7de-ec7bb752d81d",
                                "4332ca4c-a80d-4401-bed2-0e23beb0a739",
                                "2b308a78-9551-45ca-a023-27249e7fab5a"
                            ]
                        },
                        "Context": {
                            "CompletedChallenges": []
                        },
                        "ContextListeners": {
                            "CompletedChallenges": {
                                "comparand": "$.RequiredChallenges",
                                "type": "challengetree"
                            }
                        },
                        "Scope": "hit",
                        "States": {
                            "Start": {
                                "ChallengeCompleted": [
                                    {
                                        "$pushunique": [
                                            "CompletedChallenges",
                                            "$Value.ChallengeId"
                                        ]
                                    },
                                    {
                                        "Condition": {
                                            "$all": {
                                                "?": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$.##"
                                                            ]
                                                        },
                                                        "in": "$.CompletedChallenges"
                                                    }
                                                },
                                                "in": "$.RequiredChallenges"
                                            }
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "hard", "difficulty_normal", "classic"],
                    "InclusionData": {
                       "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                },
                {
                    "Id": "42655732-6b93-422d-87db-4424b27971b3",
                    "Name": "UI_CHALLENGES_STINGRAY_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_NAME",
                    "ImageName": "images/challenges/profile_challenges/classics_hard_47_sa_suit.jpg",
                    "Description": "UI_CHALLENGES_POTATO_SILENT_ASSASSIN_SUIT_DIFFICULTY_HARD_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
                    "Icon": "profile",
                    "LocationId": "LOCATION_PARENT_ELEGANT",
                    "ParentLocationId": "LOCATION_PARENT_ELEGANT",
                    "Type": "contract",
                    "DifficultyLevels": ["hard"],
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "Targets": [],
                            "RecordingDestroyed": true,
                            "LastAccidentTime": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.Targets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "AccidentBodyFound": {
                                    "$set": ["LastAccidentTime", "$Timestamp"]
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "ContractStart": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsHitmanSuit",
                                                false
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$Value.KillContext",
                                                            1
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "MurderedBodySeen": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                true
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Witnesses",
                                                "$Value.Witness"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsWitnessTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$.LastAccidentTime",
                                                            "$Timestamp"
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "Disguise": {
                                    "Transition": "Failure"
                                }
                            }
                        }
                    },
                    "Tags": [
                        "story",
                        "hard",
                        "suitonly",
                        "classic",
                        "difficulty_hard"
                    ],
                    "InclusionData": {
                        "ContractIds": ["358e3f41-9acc-4896-a22a-4a3107611520"]
                    }
                }
            ]
    }
]
module.exports = function ChallengesPlugin(controller) {
    log(LogLevel.INFO, "[The Cooking Show] Plugin is loaded and the ready for the launch")

	for (const group of cookingshowChallenges) {
		controller.challengeService.registerGroup(group, "LOCATION_PARENT_ELEGANT", "h3")

		controller.challengeService.registerChallengeList(
			group.Challenges,
			group.CategoryId,
			"LOCATION_PARENT_ELEGANT",
			"h3"
		)
	}
	controller.configManager.configs["Entrances"][
		"assembly:/_pro/scenes/missions/elegant/scene_potato.entity"
	] = [
		"cef7b74a-bd2c-4ee9-94cd-4af5b4613556",
        "a3361887-bd9c-4cd6-acd9-f3fd6088ccc1",
        "457feb5d-c481-4ab1-ab25-d6ea4b2b2b89"
	]
	controller.configManager.configs["AgencyPickups"][
		"assembly:/_pro/scenes/missions/elegant/scene_potato.entity"
	] = [
		"c9e4c63f-d969-43db-b46f-a8c56cc80c51",
		"23cecaad-4fba-4bc4-b2e5-40a69b02b40d",
		"1eaa28f7-8ba7-4f9e-b02f-027ae8dfb4ce",
		"20a8c062-5ba1-4754-a510-10295f7545c6",
		"339b9416-7153-4800-8ca4-99d45119d282",
		"c3296484-2ea0-4a76-8f9b-858830aedf81",
		"c85a1d85-919e-452c-b457-437c96a0493a",
		"8c1fa53f-b979-4e68-bb81-492c32c5a877",
		"b9660a54-5d89-49f1-8141-8cc2307bad41",
		 "80133265-3e70-4953-ac83-7006b795d013"
	]
    const missionStories = controller.configManager.configs["MissionStories"];
    if (missionStories) {
        missionStories["ec9c7b89-1813-4413-85ca-8c933572d8d6"] = {
            "CommonRepositoryId": "ec9c7b89-1813-4413-85ca-8c933572d8d6",
            "Location": "LOCATION_PARENT_ELEGANT",
            "SubLocation": "LOCATION_ELEGANT_LLAMA",
            "Summary": "OPPORTUNITY_JUDGECONSPIRACY_DESC",
            "Title": "OPPORTUNITY_JUDGECONSPIRACY_TITLE",
            "Briefing": "OPPORTUNITY_JUDGECONSPIRACY_FLAVOR_DESC",
            "Image": "images/contracts/dysg_missions/Mendoza_Potato/op_ajudgeconspiracy.jpg",
            "IsMainOpportunity": true
        };

        missionStories["3fbb389f-adaa-4c94-9794-4cb2935b44a6"] = {
            "CommonRepositoryId": "3fbb389f-adaa-4c94-9794-4cb2935b44a6",
            "Location": "LOCATION_PARENT_ELEGANT",
            "SubLocation": "LOCATION_ELEGANT_LLAMA",
            "Summary": "OPPORTUNITY_STONEHOSTAGE_DESC",
            "Title": "OPPORTUNITY_STONEHOSTAGE_TITLE",
            "Briefing": "OPPORTUNITY_STONEHOSTAGE_FLAVOR_DESC",
            "Image": "images/contracts/dysg_missions/Mendoza_Potato/op_stonehostage.jpg",
            "IsMainOpportunity": false
        };
    }
}