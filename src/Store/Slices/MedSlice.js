import { createSlice } from '@reduxjs/toolkit'

import {testState1} from './MedSliceTest'

const initState = {
    currentMedId: 0,
    filesystem: [],
    medList: []
}

export const medSlice = createSlice({
    name: 'med-entry',
    initialState: testState1,
    reducers: {
        updateCurrent: (state, action) => {
            state.currentMedId = action.payload
        },

        updateMedName: (state, action) => {
            state.medList[state.currentMedId].name = action.payload
        },
        updateMedUnits: (state, action) => {
            state.medList[state.currentMedId].units = action.payload
        },
        updateMedConc: (state, action) => {
            state.medList[state.currentMedId].conc = action.payload
        },


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