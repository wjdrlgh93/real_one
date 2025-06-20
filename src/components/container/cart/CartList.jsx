import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decreaseCount, deleteCart, increaseCount } from '../../../slices/cartSlice'


const CartList = () => {
  const cartItems = useSelector(state => state.cart.items)
  console.log(cartItems)
  const dispatch = useDispatch()
  return (
    <div className="cartList">
      <div className="cartList-con">
        <h3 className="title">장바구니</h3>
        <div className="cartItem-con">
          <ul>
          {cartItems && cartItems.map((el,idx) => {
            return (
              <li key={el.id}>
              <div className="cartItem" key={idx}>
                <div className="top">
                  <div className="id">
                    -
                  </div>
                  <img src={el.img} alt={el.img} />
                </div>
                <div className="bottom">
                  <span>상품명: {el.title}</span>
                  <span>가격: {el.price}</span>
                  <div className="cartCount">
                    <button onClick={() => {
                      dispatch(decreaseCount(el.id))
                    }}>-</button>
                    <span className="count">수량: {el.count}</span>
                    <button onClick={() => {
                      dispatch(increaseCount(el.id))
                    }}>+</button>
                  </div>
                  <span>총금액: {el.count * el.price}</span>
                  <span className="delete-cart" onClick={() => {
                    dispatch(deleteCart(el.id))
                  }}>X</span>
                </div>
              </div>
            </li>
            )
          })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CartList