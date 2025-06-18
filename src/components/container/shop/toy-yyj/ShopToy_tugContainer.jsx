import React, { useEffect, useState } from 'react'

const ShopToy_tugContainer = () => {

  const [toyList, setToyList] = useState([])

  useEffect(() => {
    
    fetch(`http://localhost:3001/toys`)
    .then((res) => {return res.json()})
    .then((jsonData )=> {setToyList(jsonData)})
    
},[])

  const [tugList, setBallList] = useState([])

  useEffect(() => {
    const tugFn =()=> {
      const tugArr = toyList.filter(el => {
        return el.category === 'toy-tug' 
      })
      setBallList(tugArr)
    }
    tugFn()
  },[toyList])

  return (
    <div className="toyList">
                <ul>
                {tugList && tugList.map((el)=>{
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

export default ShopToy_tugContainer