import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { allCheckedFalse, allCheckedTrue, checkedChange, decreaseCount, deleteCart, increaseCount } from '../../../slices/cartSlice'
import { useNavigate } from 'react-router-dom'


const CartList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartItems = useSelector(state => state.cart.items)
  console.log(Array.isArray(cartItems)); // true여야 함

  console.log(cartItems)
  console.log(cartItems.img)
  
  const checkedList = cartItems.filter((item) => item.checked === true)

  // const isAllCheck = (checked) => {
  //   if(checked) {
  //     cartItems.forEach((item) => dispatch(allCheckedTrue(cartItems.id)))
  //   } else {
  //     cartItems.forEach((item) => dispatch(allCheckedFalse(cartItems.id)))
  //   }
  // }

  let totalSelectedPrice = 0;
  cartItems.forEach(item => {
    if (item.checked) {
      totalSelectedPrice += item.price * item.count
    }
  })

  let allChecked = true
  cartItems.forEach(item => {
    if (!item.checked) {
      allChecked = false;
    }
  })

  const deleteSelected = () => {
    cartItems.forEach(item => {
      if (item.checked) {
        dispatch(deleteCart(item.id))
      }
    })
  }

  // 총상품금액
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.count
  })

  // 수량
  let totalAmount = 0;
  cartItems.forEach((item) => {
    totalAmount += item.count
  })

  let totalSelectedAmount = 0;
  checkedList.forEach((item) => {
    totalSelectedAmount += item.count
  })
  
  return (
    <div className="cartList">
      <div className="cartList-con">
        <h3 className="title">Shopping Cart</h3>
        <div className="cartItem-con">
          {cartItems.length > 0 &&
          <>            
            <div className="cartItemList">
              <ul>
                {cartItems && cartItems.map((el,idx) => {
                  return (
                    <li key={el.id}>
                      <div className="cartItem" key={idx}>
                        <div className="top">
                          <div className="id">
                            <input 
                            type="checkbox"
                            checked={el.checked} 
                            onChange={() => dispatch(checkedChange(el.id))}
                            />
                          </div>
                          <img src={`/images/${el.img}`} alt={el.img} />
                          <div className="top-con">
                            <span> {el.title}</span>
                            <span className="top-price">{el.price}원</span>
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="cartCount">
                            <div className="cartCountBtn">
                              <button onClick={() => {
                                dispatch(decreaseCount(el.id))
                              }}>－</button>
                              <span className="count"> {el.count} </span>
                              <button onClick={() => {
                                dispatch(increaseCount(el.id))
                              }}>＋</button>
                            </div>
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
                <div className="select-all">
                  <button onClick={() => allChecked ? dispatch(allCheckedFalse()) : dispatch(allCheckedTrue())}>전체 선택</button>
                  <button onClick={deleteSelected}>선택 삭제</button>
                </div>
              </ul>
            </div>
            <div className="payment">
              <div className="payment-sub">
                <div className="sum-price">총 상품금액: {checkedList.length > 0 ? totalSelectedPrice : totalPrice } 원</div>
                <span>상품수량: {checkedList.length > 0 ? totalSelectedAmount : totalAmount} 개</span>
                <div className="order-result">
                  <button 
                  // onClick={(e) => {
                  //   e.preventDefault()
                  //   haderModalFn('paymentPre')
                  // }}
                  >구매하기</button>
                </div>
              </div>
            </div>
          </>
          }
          {cartItems.length === 0 &&
            <div className='cart-empty'>
              <h4>장바구니가 비어 있습니다.</h4>
              <button onClick={() => {
                navigate('/shop')
              }}>쇼핑 계속 하기</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default CartList