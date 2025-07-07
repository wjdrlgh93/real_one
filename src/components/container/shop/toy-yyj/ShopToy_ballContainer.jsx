import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Paging from '../layout-yyj/Paging'

const ShopToy_ballContainer = () => {

  const [toyList, setToyList] = useState([])

  useEffect(() => {

    fetch(`http://localhost:3001/products`)
      .then((res) => { return res.json() })
      .then((jsonData) => { setToyList(jsonData) })

  }, [])

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

  const { currentPage, itemsPerPage } = useSelector((state) => state.paging)
  const start = (currentPage - 1) * itemsPerPage
  const pagedItems = ballList.slice(start, start + itemsPerPage)

  return (
    <div className="toyList">
      <ul>
        {pagedItems.map((el) => {
          return (
            <li>
              <Link to={`/shop/toy/detail/${el.id}`}>
                <div className="top" onMouseEnter={el.hoverImg ? () => setIsHovered(el.id) : undefined} onMouseLeave={el.hoverImg ? () => setIsHovered(null) : undefined}>
                  <img src={el.hoverImg && isHovered === el.id ? `/images/${el.hoverImg}` : `/images/${el.img}`} alt={el.title} />
                </div>
              </Link>
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
      <Paging totalItems={ballList.length} />
    </div>
  )
}

export default ShopToy_ballContainer