import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initState = {
  items: [],
  paymentItems: []
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initState,
  reducers: {
    addCart: (state, action) => {
      const num = state.items.findIndex(el => {
        console.log(action.payload, 'action')
        return el.id === action.payload.id && el.title === action.payload.title
      })
      if (num === -1) {
        state.items.push(action.payload)
      } else {
        state.items[num].count += action.payload.count
      }
    },
    deleteCart: (state, action) => {
      const idx = state.itemsfindIndex(el => {
        return el.id === action.payload
      })
      if (idx === -1) {
        return
      } else {
        alert('선택하신 상품을 삭제합니다.')
      }
    }
  }
})


export const { addCart, deleteCart } = cartSlice.actions
export default cartSlice