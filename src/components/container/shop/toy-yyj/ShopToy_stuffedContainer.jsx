import { current } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Paging from '../layout-yyj/Paging'

const ShopToy_stuffedContainer = () => {
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    
    fetch(`http://localhost:3001/products`)
    .then((res) => {return res.json()})
    .then((jsonData )=> {setToyList(jsonData)})
    
},[])

  const [stuffedList, setBallList] = useState([])

  useEffect(() => {
    const stuffedFn =()=> {
      const stuffedArr = toyList.filter(el => {
        return el.sub === '인형' 
      })
      setBallList(stuffedArr)
    }
    stuffedFn()
  },[toyList])

  const [isHovered, setIsHovered] = useState(null)

  const { currentPage, itemsPerPage } = useSelector((state) => state.paging)
  const start = (currentPage - 1) * itemsPerPage
  const pagedItems = stuffedList.slice(start, start + itemsPerPage)

  return (
    <div className="toyList">
                <ul>
                {pagedItems.map((el)=>{
                    return (
                      <li key={el.id}>
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
                <Paging totalItems={stuffedList.length}/>
            </div>
  )
}

export default ShopToy_stuffedContainer