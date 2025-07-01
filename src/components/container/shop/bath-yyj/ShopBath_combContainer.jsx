import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ShopBath_combContainer = () => {

  const [bathList, setBathList] = useState([])

  // const navigate = useNavigate()
    useEffect(() => {
        
        fetch(`http://localhost:3001/products`)
        .then((res) => res.json())
        .then(jsonData => setBathList(jsonData))
        // .catch(err => console.log(err))
    },[])

    const [combList, setCombList] = useState([])
    useEffect(() => {
      const combFn = () => {
        const combArr = bathList.filter(el => {
          return el.sub === '브러시'
        })
        setCombList(combArr)
      }
      combFn()
    },[bathList])
    
    const [isHovered, setIsHovered] = useState(null)

    return (
            <div className="toyList">
                <ul>
                {combList && combList.map((el)=>{
                    return (
                      <li>
                        <Link to={`/shop/bath/detail/${el.id}`}>
                            <div className="top" onMouseEnter={el.hoverImg ? () => setIsHovered(el.id) : undefined} onMouseLeave={el.hoverImg ? () => setIsHovered(null) : undefined}>
                             
                                <img src={el.hoverImg && isHovered === el.id ? `/images/${el.hoverImg}` : `/imgaes/${el.img}`} alt={el.title} />
                            </div>
                         </Link>
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
            </div>
    )
}

export default ShopBath_combContainer