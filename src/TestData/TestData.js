export const testState1 = {
    hospitalName: "<Test Hospital Name>",
    hospitalUnit: "<TestUnit>",
    currentMedId: 0,
    filesystem: [
        {
            name: "Active",
            keys: [
                {
                    id: 0,
                    name: "Adenosine (IV)",
                }
            ]
        }
    ],
    medList: [
        {
            name: "Adenosine (IV)",
            units: "mg",
            conc: "3",
            dosages: [
                {
                    weights: Array(11).fill(true),
                    first: {
                        weightScale: true,
                        amounts: ["0.3", "0.4", "0.5", "0.6", "0.7"],
                    },
                    sequential: null
                },
                {
                    weights: Array(11).fill(false),
                    first: {
                        weightScale: false,
                        amounts: ["0.5"],
                    },
                    sequential: {
                        weightScale: true,
                        amounts: ["0.6"]
                    }
                }
            ],
            constraints: [
                {
                    smin: "15",
                    smax: "12",
                    cmin: "0.2",
                    cmax: null,
                    weights: Array(11).fill(true),
                }
            ],
            notes: [
                {
                    note: "Test note 1",
                    weights: Array(11).fill(true)
                },
                {
                    note: "Test note 2",
                    weights: Array(11).fill(true)
                },
                {
                    note: "Test note 3 Test note 3...",
                    weights: [true, true, true, false, true, true, false, false, false, true, true]
                }
            ],
        },
        {
            name: "Adenosine 2",
            units: "mg",
            conc: "3",
            dosages: [
                {
                    weights: Array(11).fill(true),
                    first: {
                        weightScale: true,
                        amounts: ["0.3", "0.4", "0.5", "0.6", "0.7"],
                    },
                    sequential: null
                },
                {
                    weights: Array(11).fill(false),
                    first: {
                        weightScale: false,
                        amounts: ["0.5"],
                    },
                    sequential: {
                        weightScale: true,
                        amounts: ["0.6"]
                    }
                }
            ],
            constraints: [
                {
                    smin: "15",
                    smax: "12",
                    cmin: "0.2",
                    cmax: null,
                    weights: Array(11).fill(true),
                }
            ],
            notes: [
                {
                    note: "Test note 1",
                    weights: Array(11).fill(true)
                },
                {
                    note: "Test note 2",
                    weights: Array(11).fill(true)
                },
                {
                    note: "Test note 3 Test note 3...",
                    weights: [true, true, true, false, true, true, false, false, false, true, true]
                }
            ],
        },
        {
            name: "Despacito",
            units: "mg",
            conc: "3",
            dosages: [
                {
                    weights: Array(11).fill(true),
                    first: {
                        weightScale: true,
                        amounts: ["0.3", "0.4", "0.5", "0.6", "0.7"],
                    },
                    sequential: null
                },
                {
                    weights: Array(11).fill(false),
                    first: {
                        weightScale: false,
                        amounts: ["0.5"],
                    },
                    sequential: {
                        weightScale: true,
                        amounts: ["0.6"]
                    }
                }
            ],
            constraints: [
                {
                    smin: "15",
                    smax: "12",
                    cmin: "0.2",
                    cmax: null,
                    weights: Array(11).fill(true),
                }
            ],
            notes: [
                {
                    note: "Test note 1",
                    weights: Array(11).fill(true)
                },
                {
                    note: "Test note 2",
                    weights: Array(11).fill(true)
                },
                {
                    note: "Test note 3 Test note 3...",
                    weights: [true, true, true, false, true, true, false, false, false, true, true]
                }
            ],
        },
        {
            name: "Despacito 2",
            units: "mg",
            conc: "3",
            dosages: [
                {
                    weights: Array(11).fill(true),
                    first: {
                        weightScale: true,
                        amounts: ["0.3", "0.4", "0.5", "0.6", "0.7"],
                    },
                    sequential: null
                },
                {
                    weights: Array(11).fill(false),
                    first: {
                        weightScale: false,
                        amounts: ["0.5"],
                    },
                    sequential: {
                        weightScale: true,
                        amounts: ["0.6"]
                    }
                }
            ],
            constraints: [
                {
                    smin: "15",
                    smax: "12",
                    cmin: "0.2",
                    cmax: null,
                    weights: Array(11).fill(true),
                }
            ],
            notes: [
                {
                    note: "Test note 1",
                    weights: Array(11).fill(true)
                },
                {
                    note: "Test note 2",
                    weights: Array(11).fill(true)
                },
                {
                    note: "Test note 3 Test note 3...",
                    weights: [true, true, true, false, true, true, false, false, false, true, true]
                }
            ],
        },
    ]
}
