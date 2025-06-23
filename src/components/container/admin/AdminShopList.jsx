import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Map } from 'react-kakao-maps-sdk';

const { kakao } = window


const AdminShopList = () => {


    const [shoplist, setshoplist] = useState()
    const [modlaOpen, setModalOpen] = useState(false);

    const modalBackground = useRef();



    useEffect(() => {

        window.kakao.maps.load(() => {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            // 마커 추가
            const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(map);
        });

        const shopListFn = async () => {
            const dataURL = `http://localhost:3001/shopList`
            try {
                const res = await axios.get(`${dataURL}`)
                setshoplist(res.data)

            } catch (err) {

            }
        }
        shopListFn()

    }, [])


    return (
        <>
            <h1 className='adminshopList'>점포목록</h1>
            <table className="adminshopList-con">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>주문처명</th>
                        <th>주문처주소</th>
                        <th>전화번호</th>
                        <th>팩스</th>
                        <th>보기</th>
                    </tr>
                    {shoplist && shoplist.map(el => {
                        return (
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.address}</td>
                                <td>{el.phone}</td>
                                <td>{el.fax}</td>
                                <td className={'modal-td'}
                                    onClick={() => {
                                        setModalOpen(true)
                                    }}>Detail</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >
            {
                modlaOpen &&
                <div className={'modal-container'} ref={modalBackground} onClick={e => {
                    if (e.target === modalBackground.current) {
                        setModalOpen(false);
                    }
                }}>

                    <div className={'modal-content'}>
                        <div className={'memInfo'}> === SHOP INFO ===</div><br />
                        <div
                            id="map"
                            style={{
                                width: '35%',
                                height: '35%',
                            }} ></div>

                        <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                            닫기
                        </button>
                    </div>
                </div >
            }
        </>
    )
}

export default AdminShopList