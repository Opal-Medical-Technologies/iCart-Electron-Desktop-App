import { createSlice } from '@reduxjs/toolkit';

import {testState1} from '../../TestData/TestData';
import MainReducers from './Reducers/MainReducers';
import DosageReducers from './Reducers/DosageReducers';
import ConstraintsReducers from './Reducers/ConstraintsReducers';
import NotesReducers from './Reducers/NotesReducers';

const initState = {
    currentMedId: 0,
    filesystem: [],
    medList: []
};

export const medSlice = createSlice({
    name: 'med-entry',
    initialState: testState1,
    reducers: {
        // #################################################################################
        // Main Reducers (stored in MainReducers.js), for modifying main medication elements
        // #################################################################################

        /*
        * Effects: Updates the current active medication.
        * Parameters: (int) index, the index in medList of the new active medication
        */
        updateCurrent: (state, action) => MainReducers.updateCurrentReducer(state, action.payload),
        /*
        * Effects: Updates the name of currently active medication.
        * Parameters: (string) name, the updated name
        */
        updateMedName: (state, action) => MainReducers.updateMedNameReducer(state.medList[state.currentMedId], action.payload),
        /*
        * Effects: Updates the units of currently active medication.
        * Parameters: (string) units, the updated name
        */
        updateMedUnits: (state, action) => MainReducers.updateMedUnitsReducer(state.medList[state.currentMedId], action.payload),
        /*
        * Effects: Updates the concentration of currently active medication.
        * Parameters: (string) conc, the updated concentration as a string (should be convertible into float)
        */
        updateMedConc: (state, action) => MainReducers.updateMedConcReducer(state.medList[state.currentMedId], action.payload),



        // ######################################################
        // Dosage Reducers for modifying dosage-releated elements
        // ######################################################

        /*
        * Effects: Adds a new dosage set.
        */
        addDosageSet: (state) => DosageReducers.addDosageSetReducer(state.medList[state.currentMedId].dosages),
        /*
        * Effects: Deletes the dosage set given an index.
        * Parameters: (int) deleteIndex, the index to of the dosageset to be deleted from the dosages list.
        */
        deleteDosageSet: (state, action) => DosageReducers.deleteDosageSetReducer(state.medList[state.currentMedId].dosages, action.payload),
        /*
        * Effects: Updates the weight ranges for a dosage set.
        * Parameters: {
        *   setIndex: (int) The index of the dosage set to be modified.
        *   weightIndex: (int) The index of the weight to be updated.
        *   weight: (bool) The updated weight.
        * }
        */
        updateDosageWeights: (state, action) => DosageReducers.updateDosageWeightsReducer(state.medList[state.currentMedId].dosages, action.payload.setIndex, action.payload.weightIndex, action.payload.weight),
        /*
        * Effects: Updates whether weight scaling is used when calculating dosages for first dosages.
        * Parameters: {
        *   setIndex: (int) The index of the dosage set to be modified.
        *   weightScale: (boolean) The updated boolean representing whether dosages should be scaled based on weight.
        * }
        */
        updateFirstDosageWeightScale: (state, action) => DosageReducers.updateFirstDosageWeightScaleReducer(state.medList[state.currentMedId].dosages, action.payload.setIndex, action.payload.weightScale),
        /*
        * Effects: Adds an additional dosage button for the first dosages.
        * Parameters: (int) setIndex, The index of the dosage set to be modified.
        */
        addFirstDosageButton: (state, action) => DosageReducers.addFirstDosageButtonReducer(state.medList[state.currentMedId].dosages, action.payload),
        /*
        * Effects: Deletes a dosage button for the first dosages.
        * Parameters: {
        *   setIndex: (int) The index of the dosage set to be modified.
        *   deleteIndex: (int) The index of the dosage button to be deleted.
        * }
        */
        deleteFirstDosageButton: (state, action) => DosageReducers.deleteFirstDosageButtonReducer(state.medList[state.currentMedId].dosages, action.payload.setIndex, action.payload.deleteIndex),
        /*
        * Effects: Updates a dosage button for the first dosages.
        * Parameters: {
        *   setIndex: (int) The index of the dosage set to be modified.
        *   updateIndex: (int) The index of the dosage button to be updated.
        *   amount: (string) The updated amount for the dosage button as a string (should be convertible to float).
        * }
        */
        updateFirstDosageButton: (state, action) => DosageReducers.updateFirstDosageButtonReducer(state.medList[state.currentMedId].dosages, action.payload.setIndex, action.payload.updateIndex, action.payload.amount),
        /*
        * Effects: Adds dosage buttons for sequential dosages.
        * Parameters: (int) setIndex, The index of the dosage set to be modified.
        */
        addSequentialDosage: (state, action) => DosageReducers.addSequentialDosageReducer(state.medList[state.currentMedId].dosages, action.payload),
        /*
        * Effects: Deletes entries for sequential dosages.
        * Parameters: (int) setIndex, The index of the dosage set to be modified.
        */
        deleteSequentialDosage: (state, action) => DosageReducers.deleteSequentialDosageReducer(state.medList[state.currentMedId].dosages, action.payload),
        /*
        * Effects: Updates whether weight scaling is used when calculating dosages for sequential dosages.
        * Parameters: {
        *   setIndex: (int) The index of the dosage set to be modified.
        *   weightScale: (boolean) The updated boolean representing whether dosages should be scaled based on weight.
        * }
        */
        updateSequentialDosageWeightScale: (state, action) => DosageReducers.updateSequentialDosageWeightScaleReducer(state.medList[state.currentMedId].dosages, action.payload.setIndex, action.payload.weightScale),
        /*
        * Effects: Adds an additional dosage button for the sequential dosages.
        * Parameters: (int) setIndex, The index of the dosage set to be modified.
        */
        addSequentialDosageButton: (state, action) => DosageReducers.addSequentialDosageButtonReducer(state.medList[state.currentMedId].dosages, action.payload),
        /*
        * Effects: Deletes a dosage button for the sequential dosages.
        * Parameters: {
        *   setIndex: (int) The index of the dosage set to be modified.
        *   deleteIndex: (int) The index of the dosage button to be deleted.
        * }
        */
        deleteSequentialDosageButton: (state, action) => DosageReducers.deleteSequentialDosageButtonReducer(state.medList[state.currentMedId].dosages, action.payload.setIndex, action.payload.deleteIndex),
        /*
        * Effects: Updates a dosage button for the sequential dosages.
        * Parameters: {
        *   setIndex: (int) The index of the dosage set to be modified.
        *   updateIndex: (int) The index of the dosage button to be updated.
        *   amount: (string) The updated amount for the dosage button as a string (should be convertible to float).
        * }
        */
        updateSequentialDosageButton: (state, action) => DosageReducers.updateSequentialDosageButtonReducer(state.medList[state.currentMedId].dosages, action.payload.setIndex, action.payload.updateIndex, action.payload.amount),




        // ##############################################################
        // Constraints Reducers for modifying contraints-related elements
        // ##############################################################
        /*
        * Effects: Adds a new constraints set.
        */
        addConstraintsSet: (state) => ConstraintsReducers.addConstraintsSetReducer(state.medList[state.currentMedId].constraints),
        /*
        * Effects: Deletes the constraints set given an index.
        * Parameters: (int) deleteIndex, the index to of the constraints set to be deleted from the constraints list.
        */
        deleteConstraintsSet: (state, action) => ConstraintsReducers.deleteConstraintsSetReducer(state.medList[state.currentMedId].constraints, action.payload),
        /*
        * Effects: Updates the weight ranges for a constraints set.
        * Parameters: {
        *   setIndex: (int) The index of the constraints set to be modified.
        *   weights: (list of booleans) The updated weights array.
        * }
        */
        updateConstraintsWeights: (state, action) => ConstraintsReducers.updateConstraintsWeightsReducer(state.medList[state.currentMedId].constraints, action.payload.setIndex, action.payload.weights),
        /*
        * Effects: Activates the single minimum constraint and sets it to an empty string.
        * Parameters: (int) setIndex, the index of the constraints set to be updated.
        */
        addSingleMinConstraint: (state, action) => ConstraintsReducers.addSingleMinConstraintReducer(state.medList[state.currentMedId].constraints, action.payload),
        /*
        * Effects: Activates the single maximum constraint and sets it to an empty string.
        * Parameters: (int) setIndex, the index of the constraints set to be updated.
        */
        addSingleMaxConstraint: (state, action) => ConstraintsReducers.addSingleMaxConstraintReducer(state.medList[state.currentMedId].constraints, action.payload),
        /*
        * Effects: Activates the cumulative minimum constraint and sets it to an empty string.
        * Parameters: (int) setIndex, the index of the constraints set to be updated.
        */
        addCumulativeMinConstraint: (state, action) => ConstraintsReducers.addCumulativeMinConstraintReducer(state.medList[state.currentMedId].constraints, action.payload),
        /*
        * Effects: Activates the cumulative maximum constraint and sets it to an empty string.
        * Parameters: (int) setIndex, the index of the constraints set to be updated.
        */
        addCumulativeMaxConstraint: (state, action) => ConstraintsReducers.addCumulativeMaxConstraintReducer(state.medList[state.currentMedId].constraints, action.payload),
        /*
        * Effects: Deactivates the single minimum constraint and sets it to null.
        * Parameters: (int) setIndex, the index of the constraints set to be updated.
        */
        deleteSingleMinConstraint: (state, action) => ConstraintsReducers.deleteSingleMinConstraintReducer(state.medList[state.currentMedId].constraints, action.payload),
        /*
        * Effects: Deactivates the single maximum constraint and sets it to null.
        * Parameters: (int) setIndex, the index of the constraints set to be updated.
        */
        deleteSingleMaxConstraint: (state, action) => ConstraintsReducers.deleteSingleMaxConstraintReducer(state.medList[state.currentMedId].constraints, action.payload),
        /*
        * Effects: Deactivates the cumulative minimum constraint and sets it to null.
        * Parameters: (int) setIndex, the index of the constraints set to be updated.
        */
        deleteCumulativeMinConstraint: (state, action) => ConstraintsReducers.deleteCumulativeMinConstraintReducer(state.medList[state.currentMedId].constraints, action.payload),
        /*
        * Effects: Deactivates the cumulative maximum constraint and sets it to null.
        * Parameters: (int) setIndex, the index of the constraints set to be updated.
        */
        deleteCumulativeMaxConstraint: (state, action) => ConstraintsReducers.deleteCumulativeMaxConstraintReducer(state.medList[state.currentMedId].constraints, action.payload),
        /*
        * Effects: Updates the single minimum constraint and sets it to amount.
        * Parameters: {
        *   setIndex: (int) the index of the constraints set to be updated.
        *   amount: (string) the updated amount (as a string) for the constraint (should be convertible to float).
        * }
        */
        updateSingleMinConstraint: (state, action) => ConstraintsReducers.updateSingleMinConstraintReducer(state.medList[state.currentMedId].constraints, action.payload.setIndex, action.payload.amount),
        /*
        * Effects: Updates the single maximum constraint and sets it to amount.
        * Parameters: {
        *   setIndex: (int) the index of the constraints set to be updated.
        *   amount: (string) the updated amount (as a string) for the constraint (should be convertible to float).
        * }
        */
        updateSingleMaxConstraint: (state, action) => ConstraintsReducers.updateSingleMaxConstraintReducer(state.medList[state.currentMedId].constraints, action.payload.setIndex, action.payload.amount),
        /*
        * Effects: Updates the cumulative minimum constraint and sets it to amount.
        * Parameters: {
        *   setIndex: (int) the index of the constraints set to be updated.
        *   amount: (string) the updated amount (as a string) for the constraint (should be convertible to float).
        * }
        */
        updateCumulativeMinConstraint: (state, action) => ConstraintsReducers.updateCumulativeMinConstraintReducer(state.medList[state.currentMedId].constraints, action.payload.setIndex, action.payload.amount),
        /*
        * Effects: Updates the cumulative maximum constraint and sets it to amount.
        * Parameters: {
        *   setIndex: (int) the index of the constraints set to be updated.
        *   amount: (string) the updated amount (as a string) for the constraint (should be convertible to float).
        * }
        */
        updateCumulativeMaxConstraint: (state, action) => ConstraintsReducers.updateCumulativeMaxConstraintReducer(state.medList[state.currentMedId].constraints, action.payload.setIndex, action.payload.amount),




        
        // ###################################################
        // Notes Reducers for modifying notes-related elements
        // ###################################################
        /*
        * Effects: Adds a new notes set.
        */
        addNotesSet: (state) => NotesReducers.addNotesSetReducer(state.medList[state.currentMedId].notes),
        /*
        * Effects: Deletes the notes set given an index.
        * Parameters: (int) deleteIndex, the index to of the notes set to be deleted from the notes list.
        */
        deleteNotesSet: (state, action) => NotesReducers.deleteNotesSetReducer(state.medList[state.currentMedId].notes, action.payload),
        /*
        * Effects: Updates the weight ranges for a notes set.
        * Parameters: {
        *   setIndex: (int) The index of the notes set to be modified.
        *   weights: (list of booleans) The updated weights array.
        * }
        */
        updateNotesWeights: (state, action) => NotesReducers.updateNotesWeightsReducer(state.medList[state.currentMedId].notes, action.payload.setIndex, action.payload.weights),
        /*
        * Effects: Updates the note text for a notes set.
        * Parameters: {
        *   setIndex: (int) The index of the notes set to be modified.
        *   text: (string) The updated note text.
        * }
        */
        updateNotesText: (state, action) => NotesReducers.updateNotesTextReducer(state.medList[state.currentMedId].notes, action.payload.setIndex, action.payload.text),
    }
})

export const selectInfo = state => state.med;
export const selectMed = state => state.med.medList[state.med.currentMedId];
export const {
    updateCurrent, 
    updateMedName, 
    updateMedUnits,
    updateMedConc,

    addDosageSet,
    deleteDosageSet,
    updateDosageWeights,
    updateFirstDosageWeightScale,
    addFirstDosageButton,
    deleteFirstDosageButton,
    updateFirstDosageButton,
    addSequentialDosage,
    deleteSequentialDosage,
    updateSequentialDosageWeightScale,
    addSequentialDosageButton,
    deleteSequentialDosageButton,
    updateSequentialDosageButton,

    addConstraintsSet,
    deleteConstraintsSet,
    updateConstraintsWeights,
    addSingleMinConstraint,
    addSingleMaxConstraint,
    addCumulativeMinConstraint,
    addCumulativeMaxConstraint,
    deleteSingleMinConstraint,
    deleteSingleMaxConstraint,
    deleteCumulativeMinConstraint,
    deleteCumulativeMaxConstraint,
    updateSingleMinConstraint,
    updateSingleMaxConstraint,
    updateCumulativeMinConstraint,
    updateCumulativeMaxConstraint,

    addNotesSet,
    deleteNotesSet,
    updateNotesWeights,
    updateNotesText,
} = medSlice.actions;
export default medSlice.reducer;