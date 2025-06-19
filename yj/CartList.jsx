import React from 'react'

const CartList = () => {
  return (
    <div className="cart-list">
      <div className="cart-list-con">
        <h3 className="title">장바구니 목록</h3>
        <div className="cart-item-con">
          {cartItems }
        </div>
      </div>
    </div>
  )
}

export default CartList