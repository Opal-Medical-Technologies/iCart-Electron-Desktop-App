export const testState1 = {
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
                        amounts: ["0.3", "0.4", "0.5", "0.6", "0.7", "0.8"],
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
                    smin: null,
                    smax: null,
                    cmin: null,
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
                    weights: Array(11).fill(true)
                }
            ],
        },
    ]
}
