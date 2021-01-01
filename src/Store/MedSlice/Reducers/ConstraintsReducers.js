function addConstraintsSetReducer(constraints) {
    constraints.push({
        smin: null,
        smax: null,
        cmin: null,
        cmax: null,
        weights: Array(11).fill(true)
    });
}

function deleteConstraintsSetReducer(constraints, deleteIndex) {
    constraints.splice(deleteIndex, 1);
}

function updateConstraintsWeightsReducer(constraints, setIndex, weightIndex, weight) {
    constraints[setIndex].weights[weightIndex] = weight;
}

function updateConstraintsWeightsAllReducer(constraints, setIndex, value) {
    constraints[setIndex].weights = Array(11).fill(value);
}

function addSingleMinConstraintReducer(constraints, setIndex) {
    constraints[setIndex].smin = "";
}

function addSingleMaxConstraintReducer(constraints, setIndex) {
    constraints[setIndex].smax = "";
}

function addCumulativeMinConstraintReducer(constraints, setIndex) {
    constraints[setIndex].cmin = "";
}

function addCumulativeMaxConstraintReducer(constraints, setIndex) {
    constraints[setIndex].cmax = "";
}

function deleteSingleMinConstraintReducer(constraints, setIndex) {
    constraints[setIndex].smin = null;
}

function deleteSingleMaxConstraintReducer(constraints, setIndex) {
    constraints[setIndex].smax = null;
}

function deleteCumulativeMinConstraintReducer(constraints, setIndex) {
    constraints[setIndex].cmin = null;
}

function deleteCumulativeMaxConstraintReducer(constraints, setIndex) {
    constraints[setIndex].cmax = null;
}

function updateSingleMinConstraintReducer(constraints, setIndex, amount) {
    constraints[setIndex].smin = amount;
}

function updateSingleMaxConstraintReducer(constraints, setIndex, amount) {
    constraints[setIndex].smax = amount;
}

function updateCumulativeMinConstraintReducer(constraints, setIndex, amount) {
    constraints[setIndex].cmin = amount;
}

function updateCumulativeMaxConstraintReducer(constraints, setIndex, amount) {
    constraints[setIndex].cmax = amount;
}

export default {
    addConstraintsSetReducer,
    deleteConstraintsSetReducer,
    updateConstraintsWeightsReducer,
    updateConstraintsWeightsAllReducer,
    addSingleMinConstraintReducer,
    addSingleMaxConstraintReducer,
    addCumulativeMinConstraintReducer,
    addCumulativeMaxConstraintReducer,
    deleteSingleMinConstraintReducer,
    deleteSingleMaxConstraintReducer,
    deleteCumulativeMinConstraintReducer,
    deleteCumulativeMaxConstraintReducer,
    updateSingleMinConstraintReducer,
    updateSingleMaxConstraintReducer,
    updateCumulativeMinConstraintReducer,
    updateCumulativeMaxConstraintReducer
}