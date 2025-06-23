import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ShopBath_combContainer = () => {

  const [bathList, setBathList] = useState([])

  // const navigate = useNavigate()
    useEffect(() => {
        
        fetch(`http://localhost:3001/grooming`)
        .then((res) => res.json())
        .then(jsonData => setBathList(jsonData))
        // .catch(err => console.log(err))
    },[])

    const [combList, setCombList] = useState([])
    useEffect(() => {
      const combFn = () => {
        const combArr = bathList.filter(el => {
          return el.category === 'bath-comb'
        })
        setCombList(combArr)
      }
      combFn()
    },[bathList])
    
    return (
            <div className="toyList">
                <ul>
                {combList && combList.map((el)=>{
                    return (
                    <Link to={`/shop/bath/detail/${el.id}`}>
                      <li>
                            <div className="top">
                             
                                <img src={`/images/${el.img}`} alt={el.title} />
                            </div>
                            <div className="bottom">
                                <span className="title">{el.title}</span>
                                <span className="price">￦{el.price}</span>
                            </div>                            
                        </li>
                    </Link>
                        
                    )
                })}
                </ul>
            </div>
    )
}

export default ShopBath_combContainer