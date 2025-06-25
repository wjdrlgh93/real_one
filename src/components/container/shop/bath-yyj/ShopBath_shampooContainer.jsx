import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShopBath_shampooContainer = () => {

  const [bathList, setBathList] = useState([])

    useEffect(() => {
        
        fetch(`http://localhost:3001/grooming`)
        .then((res) => res.json())
        .then(jsonData => setBathList(jsonData))
        // .catch(err => console.log(err))
    },[])

    const [shampooList, setShampooList] = useState([])
    useEffect(() => {
      const combFn = () => {
        const combArr = bathList.filter(el => {
          return el.category === 'bath-shampoo'
        })
        setShampooList(combArr)
      }
      combFn()
    },[bathList])
    
    return (
            <div className="toyList">
                <ul>
                {shampooList && shampooList.map((el)=>{
                    return (
                      <Link to={`/shop/bath/detail/${el.id}`}>                        
                        <li>
                            <div className="top">
                                <img src={`/images/${el.img}`} alt={el.title} />
                            </div>
                            <div className="bottom">
                                <span className="title">{el.title}</span>
                                <span className="pricej">￦{el.price}</span>
                            </div>                            
                        </li>
                      </Link>
                    )
                })}
                </ul>
            </div>
    )
}

export default ShopBath_shampooContainer