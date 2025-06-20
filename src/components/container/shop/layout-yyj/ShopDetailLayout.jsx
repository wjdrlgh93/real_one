import React from 'react'


const ShopDetailLayout = (props) => {

  return (
    <div className="detailLayout">
      <div className="detail-con">
        <div className="left">
          <img src={props.img}/>
        </div>
        <div className="right">          
      <h2>{props.title}</h2>
      <h2>{props.price}원</h2>
      <button onClick = {props.onAddToCart}>장바구니 추가</button>
        </div>
      </div>
    </div>
  )
}

export default ShopDetailLayout