import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initState = {
  items: [],
  paymentItems:[]
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addCart:(state, action) => {
      const num = state.items.findIndex(el => {
        console.log(action.payload)
        return el.id === action.payload.id && el.title === action.payload.title
      })
      if (num === -1) {
        state.items.push(action.payload)
      } else {
        state.items[num].count += action.payload.count
      }
    },
    deleteCart: (state, action) => {
      const idx = state.items.findIndex(el => {
        return el.id ===action.payload
      })
      if (idx === -1) {
        alert('삭제할 상품이 없습니다.')
      } else {
        // alert('상품을 삭제합니다')
        // state.items.splice(idx,1)
        window.confirm('선택하신 상품을 삭제하겠습니까?') && state.items.splice(idx,1)
      }
    },
    increaseCount(state,action) {
      let num = state.items.findIndex((obj) => {
        return obj.id === action.payload;
      });
      state.items[num].count += 1;
    },
    decreaseCount(state,action) {
      let num = state.items.findIndex((obj) => {
        return obj.id === action.payload;
      });
      if (state.items[num].count === 1) state.items[num].count =1
      else state.items[num].count -= 1;
    }
  }
})

export const {deleteCart, addCart, increaseCount, decreaseCount} = cartSlice.actions
export default cartSlice