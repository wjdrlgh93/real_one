import React from 'react'
import AddToCartModal from '../../cart/AddToCartModal'
import { useNavigate } from 'react-router-dom'


const ShopDetailLayout = (props) => {

  const navigate = useNavigate()

  return (
    <>
    <div className="detailLayout">
      <div className="detail-con">
        <div className="left">
          <img src={props.img} alt='product-img'/>
          {props.hoverImg && props.hoverImg !== null && props.hoverImg !== "" && props.hoverImg !== '' ? (<img src={props.hoverImg} alt="hoverimg" />) : null}
        </div>
        <div className="right">
          <div className="right-con">
          <h2>{props.title}</h2>
          <div className="pricej">
            <span className='pricej'>{props.price}원</span>
            <div className="countButton">
              <button onClick={props.onDecrease}>－</button>
              <span className='count'>{props.count}</span>
              <button onClick={props.onIncrease}>＋</button>
            </div>
          </div>
            <div className="total">
              <span>합계: ￦{props.count * props.price}</span>
              
              <button onClick = {props.onAddToCart}>Add to Cart</button>
            </div>

          </div>
        </div>
      </div>
    </div>
    {props.addCartModal && (
      <AddToCartModal
      onCart={() => navigate('/cart')}
      onClose={() => props.setAddCartModal(false)}
      />
    )}
    {props.addCartModal && <div>✅ 모달 조건 통과</div>}
    </>
  )
}

export default ShopDetailLayout