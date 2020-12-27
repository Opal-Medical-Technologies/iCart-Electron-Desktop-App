import { createSlice } from '@reduxjs/toolkit';

import {testState1} from '../../TestData/TestData';
import MainReducers from './Reducers/MainReducers';
import DosageReducers from './Reducers/DosageReducers';

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
        *   weights: (list of booleans) The updated weights array.
        * }
        */
        updateDosageWeights: (state, action) => DosageReducers.updateDosageWeightsReducer(state.medList[state.currentMedId].dosages, action.payload.setIndex, action.payload.weights),
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
        addSequentialDosageReducer: (state, action) => DosageReducers.addSequentialDosageReducerReducer(state.medList[state.currentMedId].dosages, action.payload),
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

        //Constraints Reducers for modifying contraints-related elements

        //Notes Reducers for modifying notes-related elements
    }
})

export const selectMed = state => state.med.medList[state.med.currentMedId];
export const {
    updateCurrent, 
    updateMedName, 
    updateMedUnits,
    updateMedConc
} = medSlice.actions;
export default medSlice.reducer;