import React from 'react'
import KakaoMapCustom from './KakaoMapCustom'

const KakaoMapModal = ({ isOpen, onClose, lat, lng }) => {
  if (!isOpen) return null

  return (
    <div className="kakaoMapModal">
      <div className="kakaoMapModal-con">
        <button onClick={onClose}>닫기</button>
        <KakaoMapCustom
          lat={lat}
          lng={lng}
          markerImage='/images/markerK.png'
        />
      </div>
    </div>
  )
}

export default KakaoMapModal