import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import authSlice from '../slices/authSlice'
import cartSlice from '../slices/cartSlice'
import paymentSlice from '../slices/paymentSlice'


const index = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        payment: paymentSlice.reducer
    }

})
export default index