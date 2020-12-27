import { createSlice } from '@reduxjs/toolkit'

import {testState1} from '../../TestData/TestData'
import MainReducers from './Reducers/MainReducers'

const initState = {
    currentMedId: 0,
    filesystem: [],
    medList: []
}

export const medSlice = createSlice({
    name: 'med-entry',
    initialState: testState1,
    reducers: {
        // Main Reducers (stored in MainReducers.js), for modifying main medication elements

        /*
        * Effects: Updates the current active medication.
        * Parameters: (int) index, the index in medList of the new active medication
        */
        updateCurrent: (state, action) => MainReducers.updateCurrentReducer(state, action.payload),
        /*
        * Effects: Updates the name of currently active medication.
        * Parameters: (string) name, the updated name
        */
        updateMedName: (state, action) => MainReducers.updateMedNameReducer(state, action.payload),
        /*
        * Effects: Updates the units of currently active medication.
        * Parameters: (string) units, the updated name
        */
        updateMedUnits: (state, action) => MainReducers.updateMedUnitsReducer(state, action.payload),
        /*
        * Effects: Updates the concentration of currently active medication.
        * Parameters: (string) conc, the updated concentration as a string (should be convertible into float)
        */
        updateMedConc: (state, action) => MainReducers.updateMedConcReducer(state, action.payload),

        //Dosage Reducers for modifying dosage-releated elements

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