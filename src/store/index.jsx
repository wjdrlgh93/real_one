import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import authSlice from '../slices/authSlice'

const index = configureStore({
    reducer: {
        auth: authSlice.reducer
    }

})
export default index