import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Paging from './layout-yyj/Paging'

const ShopToyContainer = () => {

    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        const url = `http://localhost:3001/products`

        fetch(url)
            .then(res => res.json())
            .then(jsonData => setProductsList(jsonData))
        // .catch(err => console.log(err))
    }, [])

    const [toyList, setToyList] = useState([])

    useEffect(() => {
        const toyFn = () => {
            const toyArr = productsList.filter(el => {
                return el.category === 'toy'
            })
            setToyList(toyArr)
        }
        toyFn()
    }, [productsList])

    const [isHovered, setIsHovered] = useState(null)
    const { currentPage, itemsPerPage } = useSelector(state => state.paging)
    const start = (currentPage - 1) * itemsPerPage
    const pagedItems = toyList.slice(start, start + itemsPerPage)

    return (
        <div className="toyList">
            <ul>
                {pagedItems.map((el) => {
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
            <Paging totalItems={toyList.length} />
        </div>

    )
}

export default ShopToyContainer