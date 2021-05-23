function updateCurrentReducer(state, index) {
    state.currentMedId = index;
}

function addMedicationReducer(state) {
    state.medList.push(
        {
            name: "New Medication",
            units: "mg",
            conc: "0",
            dosages: [
                {
                    weights: Array(11).fill(true),
                    first: {
                        weightScale: true,
                        amounts: [""],
                    },
                    sequential: null
                },
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
                    note: "",
                    weights: Array(11).fill(true)
                },
            ],
        }
    )
}

function deleteMedicationReducer(state, deleteIndex) {
    state.medList.splice(deleteIndex, 1);
    if (state.currentMedId === deleteIndex && state.currentMedId !== 0) {
        state.currentMedId -= 1;
    }
}

function updateMedNameReducer(med, name) {
    med.name = name
}

function updateMedUnitsReducer(med, units) {
    med.units = units
}

function updateMedConcReducer(med, conc) {
    med.conc = conc
}

export default {
    updateCurrentReducer,
    addMedicationReducer,
    deleteMedicationReducer,
    updateMedNameReducer,
    updateMedUnitsReducer,
    updateMedConcReducer
};