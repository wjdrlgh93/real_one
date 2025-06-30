import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'





const AdminProducts = () => {

    // const itemListArray = Array.from({ length: testdb.products.length }, (_, i) => `Item ${i + 1}`);
    // total Data  = JSON.data.legnth
    // 15 item Per Pages
    // Page button >   Preview / NEXT / NUMBER

    const [itemListObj, setItemListObj] = useState({}) // Object init
    const [itemList, setItemList] = useState([]) // Array init
    const [modalOpen, setModalOpen] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [searchItemData, setSearchItemData] = useState([]);


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

    // 검색어를 지워도 검색결과에 모든 리스트가 나오는 이유 
    //handlerSearchChange 함수에서 검색어를 지웠을 때(searchText === "")에도
    //filter()를 계속 호출하면서 모든 데이터가 다시 searchItemData에 들어가기 때문입니다.
    const handlerSearchChange = (e) => {

        const searchText = e.target.value;
        setSearchItem(searchText)

        if (searchText === "") {
            setSearchItemData([]); // 입력 지우면 검색결과도 없앰
            return;
        }

        const filtered = itemList.filter((item) => {
            return item.title.includes(searchText)
        })
        setSearchItemData(filtered);

    }
    // const filterItem = searchItemData.filter((e) => e.name.toLowerCase().includes(searchItem.toLowerCase()));



    useEffect(() => {
        const itemListFn = async (memberId) => {
            const dataURL = `http://localhost:3001/products`
            try {
                const res = await axios.get(`${dataURL}`)
                const res2 = await axios.get(`${dataURL}?id=${memberId}`)
                console.log(res.data);
                setItemList(res.data)
                setItemListObj(res2.data[0])
            } catch (err) { }
        }
        itemListFn()
    }, [])

    useEffect(() => {
        const testFn = async () => {
            const dataURL = `http://localhost:3001/products`
            const res = await axios.get(`${dataURL}`)
                .then((response) => {
                    setSearchItemData(response.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
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
                        <th>서브-카테고리</th>
                        <th>가격</th>
                        <th>상세보기</th>
                    </tr>
                    {/* {itemList && itemList.slice(startPost - 1, endPost).map((el, idx) => { */}
                    {

                        getCurrentItems().map((el, idx) => {
                            return (
                                <tr key={el.id}>
                                    <td>{el.id}</td>
                                    <td>{el.title}</td>
                                    <td>{el.category}</td>
                                    <td>{el.sub}</td>
                                    <td>{el.price}</td>
                                    <td className={`itemlist-modal`}
                                        onClick={() => {
                                            console.log('el -> sub=' + `${el.sub}`)
                                            console.log('el -> title=' + `${el.title}`)
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
                <div className="bottom-con">
                    <input className="search" placeholder="Search..."
                        value={searchItem} onChange={handlerSearchChange} />

                </div>
            </div >
            {searchItemData.length > 0 && (
                <>
                    <h3>=== 검색결과 ===</h3>
                    <table className="search-list-con">

                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>상품명</th>
                                <th>카테고리</th>
                                <th>서브-카테고리</th>
                                <th>가격</th>
                                <th>상세보기</th>
                            </tr>
                            {searchItemData &&
                                searchItemData.map((el) => (

                                    <tr key={el.id}>
                                        <td>{el.id}</td>
                                        <td>{el.title}</td>
                                        <td>{el.category}</td>
                                        <td>{el.sub}</td>
                                        <td>{el.price}</td>
                                        <td className={`itemlist-modal`}
                                            onClick={() => {
                                                console.log('el -> sub=' + `${el.sub}`)
                                                console.log('el -> title=' + `${el.title}`)
                                                setItemListObj(el)
                                                setModalOpen(true)
                                            }}>상세보기</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table >
                </>
            )}
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
                                <label htmlFor="sub">서브-카테고리</label>
                                <input type="text" name="sub" id="sub" value={itemListObj.sub}
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