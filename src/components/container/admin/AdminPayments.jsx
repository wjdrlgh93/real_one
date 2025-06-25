import React, { useEffect } from 'react'


const AdminPayments = () => {
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
    }, []);

    return (
        <>
            <h3>카카오맵API</h3>

            <div
                id="map"
                style={{
                    width: '30vmax',
                    height: '50vh',
                }}
            ></div>

        </>
    )
}

export default AdminPayments