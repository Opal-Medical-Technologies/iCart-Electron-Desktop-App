function updateCurrentReducer(state, index) {
    state.currentMedId = index;
}

function updateMedNameReducer(state, name) {
    state.medList[state.currentMedId].name = name
}

function updateMedUnitsReducer(state, units) {
    state.medList[state.currentMedId].units = units
}

function updateMedConcReducer(state, conc) {
    state.medList[state.currentMedId].conc = conc
}

export default {
    updateCurrentReducer,
    updateMedNameReducer,
    updateMedUnitsReducer,
    updateMedConcReducer
};