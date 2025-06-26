import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'

const payment = {
  paymentData: [],
  paymentMemberData: []
}

const paymentSlice = createSlice({
  name:'payment',
  initialStae: payment,
  reducers: {
    addPayment(state, action) {
      const num = state.paymentData.findIndex(el => {
        return el.id === action.payload.id
      })
      if (num === -1) {
        console.log(action.payload, ' <<')
        state.paymentData.push(action.payload)
      } else {
        state.paymentData[num] = action.payload
      }
    }
  }
})

// export const asyncAdminPaymentsFetch = createAsyncThunk('admin/asyncAdmin')
export const {addPayment} = paymentSlice.actions
export default paymentSlice