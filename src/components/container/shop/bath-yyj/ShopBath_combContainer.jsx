import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Paging from '../layout-yyj/Paging'
import { addCart } from '../../../../slices/cartSlice'
import AddToCartModal from '../../cart/AddToCartModal'

const ShopBath_combContainer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [bathList, setBathList] = useState([])

  // const navigate = useNavigate()
  useEffect(() => {

    fetch(`http://192.168.23.234:3001/products`)
      .then((res) => res.json())
      .then(jsonData => setBathList(jsonData))
    // .catch(err => console.log(err))
  }, [])


  const [combList, setCombList] = useState([])
  useEffect(() => {
    const combFn = () => {
      const combArr = bathList.filter(el => {
        return el.sub === '브러시'
      })
      setCombList(combArr)
    }
    combFn()
  }, [bathList])

  const [isHovered, setIsHovered] = useState(null)

  const { currentPage, itemsPerPage } = useSelector((state) => state.paging)

  const start = (currentPage - 1) * itemsPerPage
  const pagedItems = combList.slice(start, start + itemsPerPage)

  const [addCartModal, setAddCartModal] = useState(false)
  const addToCart = (item) => {
    const {id, title, price, img, hoverImg} = item
    const iconItem = {id, title, price, img, hoverImg, count:1}
    dispatch(addCart(iconItem))
    setAddCartModal(true)
  }

  return (
    <>
    <div className="toyList">
      <ul>
        {pagedItems.map((el) => {
          return (
            <li>
              <div className="top" onMouseEnter={el.hoverImg ? () => setIsHovered(el.id) : undefined} onMouseLeave={el.hoverImg ? () => setIsHovered(null) : undefined}>
                <Link to={`/shop/bath/detail/${el.id}`}>
                  <img src={el.hoverImg && isHovered === el.id ? `/images/${el.hoverImg}` : `/imgaes/${el.img}`} alt={el.title} />
                </Link>
                <div className="cartIcon" onClick={() => addToCart(el)}>
                  <img src="/images/cart.png" alt="addToCart" />
                </div>
              </div>
              <div className="bottom">
                <Link to={`/shop/bath/detail/${el.id}`}>
                  <span className="title">{el.title}</span>
                </Link>
                <span className="pricej">￦{el.price}</span>
              </div>
            </li>

          )
        })}
      </ul>
      <Paging totalItems={combList.length} />
    </div>
    {addCartModal && (
      <AddToCartModal onCart={() => navigate('/cart')} onClose={() => setAddCartModal(false)}/> 
    )}
    </>
  )
}

export default ShopBath_combContainer