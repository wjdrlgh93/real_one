import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decreaseCount, deleteCart, increaseCount } from '../../../slices/cartSlice'


const CartList = () => {
  const cartItems = useSelector(state => state.cart.items)
  console.log(cartItems)
  console.log(cartItems.img)
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
                  {/* <div className="id">
                    -
                  </div> */}
                  <img src={`/images/${el.img}`} alt={el.img} />
                  <div className="top-con">
                    <span> {el.title}</span>
                    <span className="top-price">{el.price}원</span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="cartCount">
                    <button onClick={() => {
                      dispatch(decreaseCount(el.id))
                    }}>－</button>
                    <span className="count"> {el.count} </span>
                    <button onClick={() => {
                      dispatch(increaseCount(el.id))
                    }}>＋</button>
                  <span>{el.count * el.price}원</span>
                  </div>
                  <div className="delete-cart">
                     <span onClick={() => {
                    dispatch(deleteCart(el.id))
                  }} ><img src='/images/delete.png'/></span>
                  </div>
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