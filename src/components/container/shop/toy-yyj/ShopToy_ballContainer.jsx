import React, { useEffect, useState } from 'react'

const ShopToy_ballContainer = () => {

  const [toyList, setToyList] = useState([])

  useEffect(() => {
    
    fetch(`http://localhost:3001/toys`)
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
  
  return (
    <div className="toyList">
                <ul>
                {ballList && ballList.map((el)=>{
                    return (
                        <li>
                            <div className="top">
                                <img src={`/images/${el.img}`} alt={el.title} />
                            </div>
                            <div className="bottom">
                                <span className="title">{el.title}</span>
                                <span className="price">￦{el.price}</span>
                            </div>                         
                        </li>
                    )
                })}
                </ul>
            </div>
  )
}

export default ShopToy_ballContainer