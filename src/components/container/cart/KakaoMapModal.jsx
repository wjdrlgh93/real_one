import React, { useEffect } from 'react'

const KakaoMapModal = ({ lat, lng, onClose }) => {
  useEffect(() => {
    const loadMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        setTimeout(loadMap, 100);
        return
      }

      const container = document.getElementById('modalMap')
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: 4,
      }

      const map = new window.kakao.maps.Map(container, options);
      const imageSrc = '/public/images/marker.png'
      const imageSize = new window.kakao.maps.Size(64,69)
      const imageOption = { offset: new window.kakao.maps.Point(27,69) }

      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
      const markerPosition = new window.kakao.maps.LatLng(lat, lng)

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
      })
      marker.setMap(map)
    }

    if (!document.getElementById('kakao-map-sdk')) {
      const script = document.createElement('script')
      script.id = 'kakap-map-sdk'
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false`
      script.async = true
      script.onload = loadMap
      document.head.appendChild(script)
    } else {
      window.kakao.maps.load(loadMap)
    }
  })
  return (
    <div>KakaoMapModal</div>
  )
}

export default KakaoMapModal