import React, { useEffect } from 'react'

const KakaoMapModal = ({ lat, lng, onClose }) => {
  useEffect(() => {
    const loadMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        setTimeout(loadMap, 100);
        return
      }

      const container = document
    }
  })
  return (
    <div>KakaoMapModal</div>
  )
}

export default KakaoMapModal