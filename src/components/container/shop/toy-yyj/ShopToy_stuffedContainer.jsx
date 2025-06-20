import React, { useEffect, useState } from 'react'

const ShopToy_stuffedContainer = () => {
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    
    fetch(`http://localhost:3001/toys`)
    .then((res) => {return res.json()})
    .then((jsonData )=> {setToyList(jsonData)})
    
},[])

  const [stuffedList, setBallList] = useState([])

  useEffect(() => {
    const stuffedFn =()=> {
      const stuffedArr = toyList.filter(el => {
        return el.category === 'toy-stuffed' 
      })
      setBallList(stuffedArr)
    }
    stuffedFn()
  },[toyList])

  return (
    <div className="toyList">
                <ul>
                {stuffedList && stuffedList.map((el)=>{
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

export default ShopToy_stuffedContainer