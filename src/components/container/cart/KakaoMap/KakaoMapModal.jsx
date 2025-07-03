import React from 'react'
import KakaoMapCustom from './KakaoMapCustom'

const KakaoMapModal = ({ isOpen, onClose, lat, lng }) => {
  if (!isOpen) return null

  return (
    <div className="kakaoMapModal">
      <div className="kakaoMapModal-con">
        <div className="kakaoMapModal-btn">
          
        <button onClick={onClose}>닫기</button>
        </div>
        <div className="kakaoMapModal-map">

          <KakaoMapCustom
            lat={lat}
            lng={lng}
            markerImage='/images/markerK.png'
          />
        </div>
      </div>
    </div>
  )
}

export default KakaoMapModal