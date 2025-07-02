import React from 'react'

const AddToCartModal = ({onCart, onClose}) => {
  return (
    <div className="addCartModal">
      <div className="addCartModl-con">
        <h3>장바구니에 상품이 담겼습니다.</h3>
        <div className="modalBtn">
          <button onClick={onCart}>장바구니로 가기</button>
          <button onClick={onClose}>계속 둘러보기</button>
        </div>
      </div>
    </div>
  )
}

export default AddToCartModal