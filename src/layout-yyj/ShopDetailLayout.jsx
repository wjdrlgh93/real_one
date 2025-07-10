import React from 'react'
import AddToCartModal from '../../cart/AddToCartModal'
import { useNavigate } from 'react-router-dom'
import ImageSlider from './ImageSlider'


const ShopDetailLayout = (props) => {

  const navigate = useNavigate()

  return (
    <>
    <div className="detailLayout">
      <div className="detail-con">
        <div className="left">
          <ImageSlider images={props.images}/>
          {/* <img src={props.img} alt='product-img'/>
          {props.hoverImg && props.hoverImg !== null && props.hoverImg !== "" && props.hoverImg !== '' ? (<img src={props.hoverImg} alt="hoverimg" />) : null} */}
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
              <div className="total-con">
                <span>합계: ￦{props.count * props.price}</span>
                <button className="payment" onClick={props.payDirect}>바로 결제</button>
              </div>
              <button className='addCart' onClick = {props.onAddToCart}>Add to Cart</button>
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
    </>
  )
}

export default ShopDetailLayout