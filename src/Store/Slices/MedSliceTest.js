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
                    order: "first", //first, sequential, or both
                    weightScale: true, //scale based on weight
                    weights: Array(9).fill(true),
                    amounts:["0.3", "0.4", "0.5", "0.6", "0.7", "0.8"]
                }
            ],
            constraints: [
                {
                    smin: null,
                    smax: null,
                    cmin: null,
                    cmax: null,
                    weights: Array(9).fill(true),
                }
            ],
            notes: [
                {
                    note: "Test note 1",
                    weight: Array(9).fill(true)
                }
            ],
        },
    ]
}
