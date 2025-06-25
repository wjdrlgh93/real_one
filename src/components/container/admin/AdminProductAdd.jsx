import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminProductAdd = () => {

    const [itemListObj, setItemListObj] = useState({})
    const [itemList, setItemList] = useState([])

    const onInputchangeFn = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setItemListObj(prev => ({ ...prev, [name]: value }));
    }


    const uploadFile = () => {
        return
    }

    useEffect(() => {

    })


    // <td>{el.id}</td>
    // <td>{el.title}</td>
    // <td>{el.category}</td>
    // <td>{el.price}</td>

    return (
        <div className="item-add">
            <h2>상품추가</h2>
            <div className="item-add-con">
                <form>
                    <div className='item-input'> ID :
                        <input type="text" name="id" id="id" onChange={onInputchangeFn} /> </div>
                    <div className='item-input'> 상품명 :
                        <input type="text" name="title" id="title" onChange={onInputchangeFn} /> </div>
                    <div className='item-input'> 카테고리 :
                        <input type="text" name="category" id="category" onChange={onInputchangeFn} /> </div>
                    <div className='item-input'> 가격 :
                        <input type="text" name="price" id="price" onChange={onInputchangeFn} /> </div>
                    <div className='item-input'> 파일업로드

                        <button onClick={uploadFile}>업로드</button>
                    </div>
                </form>
                <li>
                    <label htmlFor="role">카테고리</label>
                    <select name="role" id="role"
                        onChange={onInputchangeFn}>
                        <option value='category' defaultValue>사료</option>
                        <option value="snack">간식</option>
                        <option value="toy">장난감</option>
                        <option value="bath">목욕</option>
                        <option value="house">하우스</option>
                        <option value="fashion">패션</option>
                    </select>
                </li>

                <button>추가</button>
            </div>
        </div>
    )
}

export default AdminProductAdd