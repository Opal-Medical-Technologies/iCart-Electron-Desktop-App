function addNotesSetReducer(notes) {
    notes.push({
        note: "",
        weights: Array(11).fill(true)
    })
}

function deleteNotesSetReducer(notes, deleteIndex) {
    notes.splice(deleteIndex, 1);
}

function updateNotesWeightsReducer(notes, setIndex, weights) {
    notes[setIndex].weights = weights;
}

function updateNotesTextReducer(notes, setIndex, text) {
    notes[setIndex].note = text;
}

export default {
    addNotesSetReducer,
    deleteNotesSetReducer,
    updateNotesWeightsReducer,
    updateNotesTextReducer
}