import {configureStore} from '@reduxjs/toolkit'
import medReducer from './Slices/MedSlice'

export default configureStore({
    reducer: {
        med: medReducer
    }
})