import { createSlice } from '@reduxjs/toolkit'

import {testState1} from './MedSliceTest'

const initialState = {
    currentMedId: 0,
    folderMap: [],
    medList: []
}

export const medSlice = createSlice({
    name: 'med-entry',
    initialState: testState1,
    reducers: {
        updateCurrent: (state, action) => {
            state.currentMedId = action.payload
        },
        updateMed: (state, action) => {
            state.medList[state.currentMedId] = action.payload
        }
    }
})

export const {updateCurrent, updateMed} = medSlice.actions
export default medSlice.reducer