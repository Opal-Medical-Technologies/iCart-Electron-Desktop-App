function updateCurrentReducer(state, index) {
    state.currentMedId = index;
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
    updateMedNameReducer,
    updateMedUnitsReducer,
    updateMedConcReducer
};