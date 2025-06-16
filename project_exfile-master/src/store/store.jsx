import React from 'react'
import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterReducer'



const rootReducer = combineReducers({
    counter: counterReducer
    // 컴포넌트에서는 counter 이름으로 접근해야됨
    // store에 subscribe 되어있어야 함 
})
const store = createStore(rootReducer)

export default store