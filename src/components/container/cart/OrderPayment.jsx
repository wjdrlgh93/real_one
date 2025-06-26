import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const paymentPre = {
  shop: "",
  orderMethod:"",
  paymentMethod:"",
  paymentResult:[],
  paymentAmount:''
}

const OrderPayment = () => {

  const [payData, setPayData] = useState(paymentPre)

  const cartItems = useSelector(state => state.cart.items)
  const loginUser = useSelector(state => state.auth.loginUser)
  const isState = useSelector(state => state.auth.isState)
  const payment = useSelector(state => state.payment)
  const shopList = useSelector(state => state.shop.shopList)

  let totalPrice = 0

  cartItems.forEach((item) => {
    totalPrice += item.price
  })

  return 
  (
    <div>OrderPayment</div>
  )
}


export default OrderPayment