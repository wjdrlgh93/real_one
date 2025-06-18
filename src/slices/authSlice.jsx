import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


// Login vaild check share store
const initState = {
    isLogin: false,
    isUser: {}
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        loginUserFn: (state, action) => {
            state.isLogin = true
            state.isUser = action.payload
        },
        logOutUserFn: (state, action) => {
            state.isLogin = false;
            state.isUser = null
        }
    }
})

export const { loginUserFn, logOutUserFn } = authSlice.actions
export default authSlice