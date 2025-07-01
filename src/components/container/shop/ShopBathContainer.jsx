import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShopBathContainer = () => {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {

        const url = `http://localhost:3001/products`

        fetch(url)
            .then(res => res.json())
            .then(jsonData => setProductsList(jsonData))
        // .catch(err => console.log(err))

    },[])

    const [bathList, setBathList] = useState([])
    useEffect(() => {
      const bathFn = () => {
        const bathArr = productsList.filter(el => {
          return el.category === 'bath'
        })
        setBathList(bathArr)
      }
      bathFn()
    },[productsList])
    
    const [isHovered, setIsHovered] = useState(null)

    return (
        <div className="toyList">
            <ul>
                {bathList && bathList.map((el) => {
                    return (

                        <li key={el.id}>
                            <Link to={`detail/${el.id}`}>                            
                                <div className="top" onMouseEnter={el.hoverImg ? () => setIsHovered(el.id) : undefined} onMouseLeave={el.hoverImg ? () => setIsHovered(null) : undefined}>
                                    <img src={el.hoverImg && isHovered === el.id ? `/images/${el.hoverImg}` : `/images/${el.img}`} alt={el.title} />

                                </div>
                             </Link>
                                <div className="bottom">
                                <Link to={`detail/${el.id}`}> 
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

export default ShopBathContainer