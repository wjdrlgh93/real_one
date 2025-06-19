import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import { useDispatch } from 'react-redux'
import { deleteCart } from '../../../slices/cartSlice'


const dispatch = useDispatch
const CartList = () => {
  const [cartList, setCartList] = useState([])

  useEffect(() => {
    const onCartListFn = async () => {
      const cartURL = `#`
      try {
        const res = await axios.get(`${cartURL}`)
        setCartList(res.item)
      } catch (err) {
        alert(err)
      }
    }
    onCartListFn()
  }, [])

  return (
    <>
      <Header/>
      <div className="cartList">
        <div className="cartList-con">
          <h3 className="title">장바구니</h3>
          <div className="cartItem">
            {cartList && cartList.map((el,idx) => {
              return (
                <div className="cart-item" key={idx}>
                  <div className="top">
                    <div className="id">

                    </div>
                    <img src={el.img} alt={el.img} />
                  </div>
                  <div className="bottom">
                    <span>상품명: {el.title}</span>
                    <span>가격: {el.price}</span>
                    <div className="cartcount">
                      {/* <button onClick={() => {
                        dispatch(decreaseCount(el.id))
                      }}>-</button> */}
                      <span className="count">수량: {el.count}</span>
                      {/* <button onClick={() => {
                        dispatch(increaseCount(el.id))
                      }}>+</button> */}
                    </div>
                    <span>총금액: {el.count * el.price}</span>
                    <span className="delete-cart" onClick={() => {
                      dispatch(deleteCart(el.id))
                    }}>X</span>
                  </div>
                </div>
              )
            })}
            {/* {cartList.length > 0 ?
              <div className="bSelect">

              </div>
            } */}
          </div>
        </div>
      </div>
    </>

  )
}


export default CartList