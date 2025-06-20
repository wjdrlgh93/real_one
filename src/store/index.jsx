import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import authSlice from '../slices/authSlice'
import cartSlice from '../slices/cartSlice'

const index = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }

})
export default index