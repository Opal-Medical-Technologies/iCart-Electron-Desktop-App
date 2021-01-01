function addNotesSetReducer(notes) {
    notes.push({
        note: "",
        weights: Array(11).fill(true)
    })
}

function deleteNotesSetReducer(notes, deleteIndex) {
    notes.splice(deleteIndex, 1);
}

function updateNotesWeightsReducer(notes, setIndex, weightIndex, weight) {
    notes[setIndex].weights[weightIndex] = weight;
}

function updateNotesWeightsAllReducer(notes, setIndex, value) {
    notes[setIndex].weights = Array(11).fill(value);
}

function updateNotesTextReducer(notes, setIndex, text) {
    notes[setIndex].note = text;
}

export default {
    addNotesSetReducer,
    deleteNotesSetReducer,
    updateNotesWeightsReducer,
    updateNotesWeightsAllReducer,
    updateNotesTextReducer
}