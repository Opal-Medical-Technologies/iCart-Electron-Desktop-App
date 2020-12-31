function addDosageSetReducer(dosages) {
    dosages.push({
        weights: Array(11).fill(true),
        first: {
            weightScale: true,
            amounts: [""],
        },
        sequential: null
    });
}

function deleteDosageSetReducer(dosages, deleteIndex) {
    dosages.splice(deleteIndex, 1);
}

function updateDosageWeightsReducer(dosages, setIndex, weights) {
    dosages[setIndex].weights = weights;
}

function updateFirstDosageWeightScaleReducer(dosages, setIndex, weightScale) {
    dosages[setIndex].first.weightScale = weightScale;
}

function addFirstDosageButtonReducer(dosages, setIndex) {
    dosages[setIndex].first.amounts.push("");
}

function deleteFirstDosageButtonReducer(dosages, setIndex, deleteIndex) {
    dosages[setIndex].first.amounts.splice(deleteIndex, 1);
}

function updateFirstDosageButtonReducer(dosages, setIndex, updateIndex, amount) {
    dosages[setIndex].first.amounts[updateIndex] = amount;
}

function addSequentialDosageReducer(dosages, setIndex) {
    dosages[setIndex].sequential = {
        weightScale: true,
        amounts: [""]
    };
}

function deleteSequentialDosageReducer(dosages, setIndex) {
    dosages[setIndex].sequential = null;
}

function updateSequentialDosageWeightScaleReducer(dosages, setIndex, weightScale) {
    dosages[setIndex].sequential.weightScale = weightScale;
}

function addSequentialDosageButtonReducer(dosages, setIndex) {
    dosages[setIndex].sequential.amounts.push("");
}

function deleteSequentialDosageButtonReducer(dosages, setIndex, deleteIndex) {
    dosages[setIndex].sequential.amounts.splice(deleteIndex, 1);
}

function updateSequentialDosageButtonReducer(dosages, setIndex, updateIndex, amount) {
    dosages[setIndex].sequential.amounts[updateIndex] = amount;
}

export default {
    addDosageSetReducer,
    deleteDosageSetReducer,
    updateDosageWeightsReducer,
    updateFirstDosageWeightScaleReducer,
    addFirstDosageButtonReducer,
    deleteFirstDosageButtonReducer,
    updateFirstDosageButtonReducer,
    addSequentialDosageReducer,
    deleteSequentialDosageReducer,
    updateSequentialDosageWeightScaleReducer,
    addSequentialDosageButtonReducer,
    deleteSequentialDosageButtonReducer,
    updateSequentialDosageButtonReducer,
}