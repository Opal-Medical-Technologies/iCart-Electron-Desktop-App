import {configureStore} from '@reduxjs/toolkit'
import medReducer from './MedSlice/MedSlice'

export default configureStore({
    reducer: {
        med: medReducer
    }
})