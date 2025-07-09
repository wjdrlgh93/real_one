import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Paging from '../layout-yyj/Paging'

const ShopToy_tugContainer = () => {

  const [toyList, setToyList] = useState([])

  useEffect(() => {

    fetch(`http://192.168.23.234:3001/products`)
      .then((res) => { return res.json() })
      .then((jsonData) => { setToyList(jsonData) })

  }, [])

  const [tugList, setBallList] = useState([])

  useEffect(() => {
    const tugFn = () => {
      const tugArr = toyList.filter(el => {
        return el.sub === '터그'
      })
      setBallList(tugArr)
    }
    tugFn()
  }, [toyList])

  const [isHovered, setIsHovered] = useState(null)

  const { currentPage, itemsPerPage } = useSelector((state) => state.paging)
  const start = (currentPage - 1) * itemsPerPage
  const pagedItems = tugList.slice(start, start + itemsPerPage)

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
      <Paging totalItems={tugList.length} />
    </div>
  )
}

export default ShopToy_tugContainer