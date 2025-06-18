import { configureStore } from '@reduxjs/toolkit'
import React from 'react'

const index = configureStore({
    reducer: {
        auth: authSlice.reducer
    }

})
export default index