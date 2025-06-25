import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShopBathContainer = () => {
    const [bathList, setBathList] = useState()

    useEffect(() => {
        // const url = `http://192.168.23.209:3001/grooming`
        const url = `http://localhost:3001/grooming`

        fetch(url)
            .then(res => res.json())
            .then(jsonData => setBathList(jsonData))
        // .catch(err => console.log(err))
    }, [])

    return (
        <div className="toyList">
            <ul>
                {bathList && bathList.map((el) => {
                    return (
                        <li>
                            <Link to={`detail/${el.id}`}>
                                <div className="top">
                                    <img src={`/images/${el.img}`} alt={el.title} />
                                </div>
                                <div className="bottom">
                                    <span className="title">{el.title}</span>
                                    <span className="pricej">￦{el.price}</span>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ShopBathContainer