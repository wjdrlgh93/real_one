import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const paymentPre = {
  shop: "",
  paymentMethod:"",
  paymentResult:[],
  paymentAmount:''
}
const OrderPayment = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [payData, setPayData] = useState(paymentPre)
  
  const paymentMethodChange = (e) => {
    setPayData({
      ...payData,
      paymentMethod: e.target.value
    })
  }

  const paymentItems = useSelector(state => state.cart.paymentItems)
 
  const loginUser = useSelector(state => state.auth.isUser)
console.log('OrderPayment에서 로그인 유저:', loginUser)

  const isLogin = useSelector(state => state.auth.isLogin)
  const isState = useSelector(state => state.auth.isState)
  const payment = useSelector(state => state.payment)
  // const shopList = useSelector(state => state.shop.shopList)
  const [sameAsUser, setSameAsUser] = useState(false)
  const [ordererInfo, setOredererInfo] = useState({
    name:'',
    email:'',
    address:''
  })

  console.log('loginUser:', loginUser)
  const isSameAsUser = (e) => {
    const checked = e.target.checked
    setSameAsUser(checked)
    if (checked && loginUser) {
      setOredererInfo({
        name:loginUser.userName,
        email:loginUser.userEmail,
        address:loginUser.address
      })
    } else {
      setOredererInfo({
        name:'',
        email:'',
        address:''
      })
    }
  }

  console.log(loginUser?.name)  

  console.log(paymentItems)
  let totalPrice = 0
  paymentItems.forEach((item) => {
    totalPrice += item.price * item.count
  })

  let totalAmount = 0;
  paymentItems.forEach((item) => {
    totalAmount += item.count
  })

  // useEffect

  return (
    <div className="paymentList">
      <div className="paymentList-left">
        <h3 className="title">주문 상품</h3>
        <div className="paymentItem-con">                  
            <div className="paymentItemList">
              <ul>
                {paymentItems.map((el,idx) => {
                  return (
                    <li>
                      <div className="paymentItem" key={idx}>
                        <div className="top">                          
                          <img src={`/images/${el.img}`} alt={el.img} />
                          <div className="top-con">
                            <span> {el.title}</span>
                            <span className="top-price">{el.price}원</span>
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="paymentCount">                            
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
                <span className="sum-price">총 상품금액: { totalPrice } 원</span>
                <span className='sum-count'>상품수량: { totalAmount } 개</span>                
              </div>
            </div>        
        </div>
        <div className="paymentInfo">
          <div className="paymentMethod">
              <h3>결제 방법</h3>
              <div className="paymentMethod-con">
                <label>
                  <input
                  type="radio"
                  name='paymentMehod'
                  value='계좌이체'
                  checked={payData.paymentMethod === '계좌이체'}
                  onChange={paymentMethodChange}    
                  />
                  계좌이체
                </label>
                <label>
                  <input
                  type="radio"
                  name='paymentMehod'
                  value='신용/체크카드'
                  checked={payData.paymentMethod === '신용/체크카드'}
                  onChange={paymentMethodChange} 
                  />
                  신용/체크카드
                </label>
                <label>
                  <input
                  type="radio"
                  name='paymentMehod'
                  value='카카오페이'
                  checked={payData.paymentMethod === '카카오페이'}
                  onChange={paymentMethodChange} 
                  />
                  카카오페이
                </label>
                <label>
                  <input
                  type="radio"
                  name='paymentMehod'
                  value='휴대폰'
                  checked={payData.paymentMethod === '휴대폰'}
                  onChange={paymentMethodChange} 
                  />
                  휴대폰
                </label>
                <label>
                  <input
                  type="radio"
                  name='paymentMehod'
                  value='무통장입금'
                  checked={payData.paymentMethod === '무통장입금'}
                  onChange={paymentMethodChange} 
                  />
                  무통장입금
                </label>
              </div>
          </div>
          <div className="paymentMember">
            <h3>주문자 정보</h3>
            {isLogin && (
              <label>
                <input 
                  type="checkbox"
                  checked={sameAsUser}
                  onChange={isSameAsUser}
                />
                회원 정보와 동일
              </label>              
            )}
            <div className="paymentMember-con">
              <div>                
                <label>이름</label>
                <input
                type="text"
                value={ordererInfo.name}
                onChange={(e) => setOredererInfo({ ...ordererInfo, name: e.target.value})}
                disabled={sameAsUser}/>
              </div>
              <div>                
                <label>Email</label>
                <input
                type="text"
                value={ordererInfo.email}
                onChange={(e) => setOredererInfo({ ...ordererInfo, email: e.target.value})}
                disabled={sameAsUser}/>
              </div>
              <div>
              <label>주소</label>
                <input
                type="text"
                value={ordererInfo.address}
                onChange={(e) => setOredererInfo({ ...ordererInfo, name: e.target.value})}
                disabled={sameAsUser}/>
              </div>
            </div>
          </div>
          <div className="orderShopInfo">
            <div className="orderShopInfo-con">
              <h3>주문처</h3>
            </div>
          </div>         
        </div>
      </div>
      <div className="paymentList-right">
        <h3>상세 결제 정보</h3>
        <div className="paymentResult">
          <span className="sum-price">총 결제 금액: { totalPrice } 원</span>
          <div className="order-result">
            <button 
            // onClick={(e) => {
            //   e.preventDefault()
            //   haderModalFn('paymentPre')
            // }}
            >결제하기</button>      
        </div>
        </div>
      </div>
    </div>
  )
}


export default OrderPayment