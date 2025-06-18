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
    return (
        // <div className="toy">
        //     <div className="toy-con">
        //         <div className="toy-wrap">
        //             <div className="head-title">
        //                 <h1>장난감</h1>
        //             </div>
        //             <div className="toy-filter">
        //                 <div className="toy-filter-type">
        //                     <ul>
        //                         <li>
        //                             <Link to={'/shop/toy'}>전체</Link>
        //                         </li>
        //                         <li>
        //                             <Link to={'/shop/toy/ball'}>공</Link>
        //                         </li>
        //                         <li>
        //                             <Link to={'/shop/toy/tug'}>터그장난감</Link>
        //                         </li>
        //                         <li>
        //                             <Link to={'/shop/toy/stuffed'}>인형</Link>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
                    <div className="toyList">
                        <ul>
                        {toyList && toyList.map((el)=>{
                            return (
                                <li>
                                    <div className="top">
                                        <img src={`/images/${el.img}`} alt={el.title} />
                                    </div>
                                    <div className="bottom">
                                        <span className="title">{el.title}</span>
                                        <span className="price">￦{el.price}</span>
                                    </div>
                                    {/* id: {el.id}, 상품명: {el.title}, 가격: {el.price}원, 상품이미지: {el.img} */}
                                </li>
                            )
                        })}
                        </ul>
                    </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ShopToyContainer