import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const payment = {
  paymentData: [],
  paymentItems: [],
  paymentMemberData: []
}

const paymentSlice = createSlice({
  name:'payment',
  initialState: payment,
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
    },
    setPaymentItems(state, action) {
      state.paymentItems = action.payload
    }
  }
})

// export const asyncAdminPaymentsFetch = createAsyncThunk('admin/asyncAdmin')
export const { addPayment, setPaymentItems } = paymentSlice.actions
export default paymentSlice