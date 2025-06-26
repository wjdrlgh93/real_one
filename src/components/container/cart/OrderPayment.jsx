import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const paymentPre = {
  shop: "",
  orderMethod:"",
  paymentMethod:"",
  paymentResult:[],
  paymentAmount:''
}
const OrderPayment = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [payData, setPayData] = useState(paymentPre)

  const paymentItems = useSelector(state => state.cart.paymentItems)
 
  const loginUser = useSelector(state => state.auth.loginUser)
  const isState = useSelector(state => state.auth.isState)
  const payment = useSelector(state => state.payment)
  // const shopList = useSelector(state => state.shop.shopList)

  console.log(paymentItems)
  let totalPrice = 0
  paymentItems.forEach((item) => {
    totalPrice += item.price * item.count
  })

  let totalAmount = 0;
  paymentItems.forEach((item) => {
    totalAmount += item.count
  })

  return (
    <div className="cartList">
      <div className="cartList-con">
        <h3 className="title">Order</h3>
        <div className="cartItem-con">                     
            <div className="cartItemList">
              <ul>
                {paymentItems.map((el,idx) => {
                  return (
                    <li>
                      <div className="cartItem" key={idx}>
                        <div className="top">                          
                          <img src={`/images/${el.img}`} alt={el.img} />
                          <div className="top-con">
                            <span> {el.title}</span>
                            <span className="top-price">{el.price}원</span>
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="cartCount">                            
                            <span>{el.count * el.price}원</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}                
              </ul>
            </div>
            <div className="payment">
              <div className="payment-sub">
                <div className="sum-price">총 상품금액: { totalPrice } 원</div>
                <span>상품수량: { totalAmount } 개</span>
                <div className="order-result">
                  <button 
                  // onClick={(e) => {
                  //   e.preventDefault()
                  //   haderModalFn('paymentPre')
                  // }}
                  >주문하기</button>
                </div>
              </div>
            </div>
        
        </div>
      </div>
    </div>
  )
}


export default OrderPayment