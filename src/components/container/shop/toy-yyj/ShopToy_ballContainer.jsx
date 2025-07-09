import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Paging from '../layout-yyj/Paging'
import AddToCartModal from '../../cart/AddToCartModal'
import { addCart } from '../../../../slices/cartSlice'

const ShopToy_ballContainer = () => {
  // const [currentPage, setCurrentPage] = useState(1)

  const [toyList, setToyList] = useState([])

  useEffect(() => {
    
    fetch(`http://localhost:3001/products`)
    .then((res) => {return res.json()})
    .then((jsonData )=> {setToyList(jsonData)})
    
},[])
  
  const [ballList, setBallList] = useState([])

  useEffect(() => {
    const ballFn = () => {
      const ballArr = toyList.filter(el => {
        return el.sub === '공'
      })
      setBallList(ballArr)
    }
    ballFn()
  }, [toyList])

  const [isHovered, setIsHovered] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const start = (currentPage - 1) * itemsPerPage
  const pagedItems = ballList.slice(start, start + itemsPerPage)

  const [addCartModal, setAddCartModal] =
  useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addToCart = (item) => {
    const { id, title, price, img, hoverImg } = item
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
            <li key={pagedItems.id}>
              <div className="top" onMouseEnter={el.hoverImg ? () => setIsHovered(el.id) : undefined} onMouseLeave={el.hoverImg ? () => setIsHovered(null) : undefined}>
                <Link to={`/shop/toy/detail/${el.id}`}>
                    <img 
                      src={el.hoverImg && isHovered === el.id ? `/images/${el.hoverImg}` : `/images/${el.img}`} 
                      alt={el.title} />
                </Link>
                <div className="cartIcon" onClick={() => addToCart(el)} >
                  <img src="/images/cart.png" alt="addToCart"/>
                </div>
              </div>
              <div className="bottom">
                <Link to={`/shop/toy/detail/${el.id}`}>
                  <span className="title">{el.title}</span>
                </Link>
                <span className="pricej">￦{el.price}</span>
              </div>
            </li>
          )
        })}
      </ul>
      <Paging 
        totalItems={ballList.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
    {addCartModal && (
      <AddToCartModal onCart={() => navigate('/cart')} onClose={() => setAddCartModal(false)}/>
    )}
    </>
  )
}

export default ShopToy_ballContainer