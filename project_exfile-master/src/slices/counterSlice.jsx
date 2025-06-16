import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initState = {
    num: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        PLUS: (state) => {
            state.num += 1;
        },
        MINUS: (state) => {
            state.num -= 1;
        },
        RESET: (state) => {
            state.num = 0
        }
    }
})



//action
export const { PLUS, MINUS, RESET } = counterSlice.actions;
export default counterSlice