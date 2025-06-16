import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from '../slices/counterSlice'
import counterSlice from '../slices/counterSlice'

const index = configureStore({
    reducer: {
        // counter: counterSliceReducer
        counter: counterSlice

    }
})

export default index