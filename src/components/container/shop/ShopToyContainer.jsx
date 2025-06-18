import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShopToyContainer = () => {

    const [toyList, setToyList] = useState()

    useEffect(() => {
        const url = `http://localhost:3001/toys`

        fetch(url)
        .then(res => res.json())
        .then(jsonData => setToyList(jsonData))
        // .catch(err => console.log(err))
    },[])
    
    const [hoveredId, setHoveredId] = useState(null)
    const mouseHoverIn = id => {setHoveredId(id)}
    const mouseHoverOut = () => {setHoveredId(null)}

    return (
            <div className="toyList">
                <ul>
                {toyList && toyList.map((el)=>{
                    return (
                        // <Link to={``}
                        <li>
                            <div className="top">
                                {/* <img src={hoveredId === el.id ? el.img[0].hoverimg : el.img[0].defaultimg}
                                onMouseEnter = {() => mouseHoverIn(el.id)}
                                onMouseLeave={mouseHoverOut}
                                alt={el.title}/>
                                // <img src={`/images/${el.img}`} alt={el.title} /> */}
                                <img src={`/images/${el.img}`} alt={el.title}/>
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

export default ShopToyContainer