import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const OrderList = () => {
  const loginUser = useSelector((state) => state.auth.isUser)
  const [myOrders, setMyOrders] = useState([])

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const res = await axios.get('http://localhost:3001/orders')
        const filtered = res.data.filter(order => order.userId === loginUser.id)
        setMyOrders(filtered)
      } catch(error) {
        console.error('결제 내역 불러오기 실패: ', error)
      }
    }
    if (loginUser) {
      fetchMyOrders()
    }
  }, [loginUser])

  return (
    <div className="orderList">
      <h2>{loginUser.userName}님의 주문 내역</h2>
      {myOrders.length === 0 ? (
        <p>주문 내역이 없습니다.</p>
      ): (
        <ul>
          {myOrders.map(order => (
            <li key={order.id}>
              <p>결제일: {order.date}</p>
              <p>결제 방법: {order.paymentMethod}</p>
              <p>결제 금액: {order.paymentAmount}</p>
              <p>주문처: {order.shop}</p>
              <div>
                <p>주문 상품:</p>
                <ul>
                  {order.paymentResult.map((item,idx) => (
                    <li key={idx}>
                      {item.title} - {item.count}개 - {item.price}원
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default OrderList