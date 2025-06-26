import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
// import { Map } from 'react-kakao-maps-sdk';

// const { kakao } = window


const AdminShopList = () => {


    const [shoplist, setshoplist] = useState()
    const [modlaOpen, setModalOpen] = useState(false);
    // for modalSelectMap
    const [selectedShop, setSelectedShop] = useState(null);

    const modalBackground = useRef();
    const mapRef = useRef(null);



    useEffect(() => {

        const shopListFn = async () => {
            const dataURL = `http://localhost:3001/shopList`
            try {
                const res = await axios.get(`${dataURL}`)
                setshoplist(res.data)

            } catch (err) {

            }
        }
        shopListFn()

        if (!modlaOpen || !selectedShop) return;

        // kakaomap load check
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
                const container = mapRef.current;
                if (!container) {
                    console.warn("mapRef가 아직 DOM에 연결되지 않았습니다.");
                    return;
                }

                // 주소가 아니라 위경도 기반으로 설정해야 정확함 (좌표 변환 추가 가능)
                const geocoder = new window.kakao.maps.services.Geocoder();
                geocoder.addressSearch(selectedShop.address, (result, status) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                        const map = new window.kakao.maps.Map(container, {
                            center: coords,
                            level: 3
                        });

                        const marker = new window.kakao.maps.Marker({ position: coords });
                        marker.setMap(map);
                    } else {
                        console.warn("카카오맵이 아직 로드되지 않았습니다.");
                    }
                })
            });
        }
    }, [modlaOpen, selectedShop])


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
                                        setSelectedShop(el)
                                    }}>Detail</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >
            {
                modlaOpen && selectedShop &&
                <div className={'modal-container'} ref={modalBackground} onClick={e => {
                    if (e.target === modalBackground.current) {
                        setModalOpen(false);
                        setSelectedShop(null);
                    }
                }}>
                    <div className={'modal-content'}>
                        <div className={'memInfo'}> === SHOP INFO ===</div>
                        <div>점포명 : {selectedShop.name}</div>
                        <div>주소 : {selectedShop.address}</div>
                        <div>전화번호 : {selectedShop.phone}</div>
                        <div className='info'>팩스번호 : {selectedShop.fax}</div><br />
                        <div className='modalmap' ref={mapRef} ></div>

                        <button className={'modal-close-btn'} onClick={() => {
                            setModalOpen(false);
                            setSelectedShop(null);
                        }}>
                            닫기
                        </button>

                    </div>
                </div >
            }
        </>
    )
}

export default AdminShopList