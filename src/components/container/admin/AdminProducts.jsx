import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import testdb from '../../../db/testdb.json'

const addData = {
    title: '',
    category: '',
    price: ''
}





const AdminProducts = () => {

    // const itemListArray = Array.from({ length: testdb.products.length }, (_, i) => `Item ${i + 1}`);
    // total Data  = JSON.data.legnth
    // 15 item Per Pages
    // Page button >   Preview / NEXT / NUMBER

    const [itemListObj, setItemListObj] = useState({}) // Object init
    const [itemList, setItemList] = useState([]) // Array init
    const [modalOpen, setModalOpen] = useState(false);
    // add Product 
    const [addItem, setAddItem] = useState(addData)
    // CurrentPage
    const [currentPage, setCurrentPage] = useState(1);
    // Item Count Per Page
    const itemsPerPage = 15;
    // Total Page Num 
    const totalPages = Math.ceil(itemList.length / itemsPerPage)
    // Click Handler
    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const getCurrentItems = () => {
        // Index Start for Per PAges
        const start = (currentPage - 1) * itemsPerPage;
        // bring END Index
        const end = start + itemsPerPage;
        // Bring Items Per Page
        return itemList.slice(start, end);
    };

    const modalBackground = useRef()

    const onInputchangeFn = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setItemListObj(prev => ({ ...prev, [name]: value }));
    }

    useEffect(() => {
        const itemListFn = async (memberId) => {
            const dataURL = `http://localhost:3001/products`
            try {
                const res = await axios.get(`${dataURL}`)
                const res2 = await axios.get(`${dataURL}?id=${memberId}`)

                setItemList(res.data)
                setItemListObj(res2.data[0])
            } catch (err) { }
        }
        itemListFn()
    }, [])

    return (
        <>

            <h1 className='product-list'>상품목록</h1>
            <table className="product-list-con">

                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>상품명</th>
                        <th>카테고리</th>
                        <th>가격</th>
                        <th>상세보기</th>
                    </tr>
                    {/* {itemList && itemList.slice(startPost-1, endPost).map((el, idx) => { */}
                    {getCurrentItems().map((el, idx) => {
                        return (
                            <tr key={el.id}>
                                <td>{el.id}</td>
                                <td>{el.title}</td>
                                <td>{el.category}</td>
                                <td>{el.price}</td>
                                <td className={`itemlist-modal`}
                                    onClick={() => {
                                        setItemListObj(el)
                                        setModalOpen(true)
                                    }}
                                >상세보기</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="bottom">
                {/* Preview Page */}
                <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
                    &lt; Prev
                </button>
                {[...Array(totalPages)].map((_, idx) => {
                    // idx Start from 0
                    const page = idx + 1;
                    return (
                        <button
                            key={page}
                            onClick={() => handleClick(page)}
                        >{page}</button>
                    );
                })}
                {/* after ... page */}
                <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next &gt;</button>
            </div >
            {
                modalOpen &&
                <div className={"itemList-modal-container"} ref={modalBackground} onClick={e => {
                    if (e.target === modalBackground.current) {
                        setModalOpen(false);
                    }
                }}>
                    <div className={"itemList-modal"}>
                        <div className={'itemInfo'}> === ITEM DETAIL ===</div>
                        <br />
                        <ul>
                            <li className='itemModal-li'>
                                <label htmlFor="id">ID</label>
                                <input type="text" name="id" id="id" value={itemListObj.id} readOnly
                                    onChange={onInputchangeFn} />
                            </li>
                            <li className='itemModal-li'>
                                <label htmlFor="title">상품명</label>
                                <input type="text" name="title" id="title" value={itemListObj.title}
                                    onChange={onInputchangeFn} />
                            </li>
                            <li className='itemModal-li'>
                                <label htmlFor="category">카테고리</label>
                                <input type="text" name="category" id="category" value={itemListObj.category}
                                    onChange={onInputchangeFn} />
                            </li>
                            <li className='itemModal-li'>
                                <label htmlFor="price">가격</label>
                                <input type="text" name="price" id="price" value={itemListObj.price}
                                    onChange={onInputchangeFn} />
                            </li>
                            <li className='itemModal-li-img'>
                                {/* <img src="" alt="ITEMIMAGE" /> */}
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default AdminProducts