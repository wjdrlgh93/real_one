import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShopToy_ballContainer = () => {

  const [toyList, setToyList] = useState([])

  useEffect(() => {
    
    fetch(`http://localhost:3001/toy`)
    .then((res) => {return res.json()})
    .then((jsonData )=> {setToyList(jsonData)})
    
},[])
  
  const [ballList, setBallList] = useState([])

  useEffect(() => {
    const ballFn =()=> {
      const ballArr = toyList.filter(el => {
        return el.category === 'toy-ball' 
      })
      setBallList(ballArr)
    }
    ballFn()
  },[toyList])
  
  const [isHovered, setIsHovered] = useState(null)

  return (
    <div className="toyList">
                <ul>
                {ballList && ballList.map((el)=>{
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
            </div>
  )
}

export default ShopToy_ballContainer