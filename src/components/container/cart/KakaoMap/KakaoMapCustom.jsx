import React, { useEffect } from 'react'

const KakaoMapCustom = ({lat, lng}) => {
  useEffect(() => {
    const loadMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        setTimeout(loadMap, 100)
        return
      }
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')

        if(!container) return

        const options = {
          center: new window.kakao.maps.LatLng(Number(lat), Number(lng)),
          level: 3,
        }

        const map = new window.kakao.maps.Map(container, options)

        const imageSrc = '/images/markerA.png'
        const imageSize = new window.kakao.maps.Size(50,51)
        const imageOption = { offset: new window.kakao.maps.Point(20,42)}

        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

        new window.kakao.maps.Marker({
          map,
          position: options.center,
          image: markerImage
        });
      });
    };

    if (!document.getElementById('kakao-map-cus')) {
      const script = document.createElement('script')
      script.id = 'kakao-map-cus'
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=c332ab2c70659f81a39b7d3b752e808e&autoload=false`
      script.async = true
      script.onload = loadMap
      document.head.appendChild(script)
    } else {
      loadMap()
    }
  }, [lat, lng])
  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '300px',
        border: '1px solid #cccccc',
        borderRadius: '8px'
      }}></div>
  )
}

export default KakaoMapCustom