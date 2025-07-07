import React, { useRef, useState } from 'react'

const ImageSlider = ({images = [], imageSlideInterval = 3000}) => {
  const [currentImage, setCurrentImage] = useState(0)
  const total = images.length
  const sliderRef = useRef()

  const prevSlide = () => {
    setCurrentImage(prev => (prev === 0 ? total -1 : prev - 1))
  }
  const nextSlide = () => {
    setCurrentImage(prev => (prev + 1) % total)
  }

  const goTo = (el) => setCurrentImage(el) 

  return (
    <div className="imageSlider">
      <div 
        className="imageSlider-con"
        ref={sliderRef}
        style={{transform: `translateX(-${currentImage * 100}%)`}}
        >
          <ul>
            {images.map((img, idx) => (
              <li
                key={idx}
                style={{background: `url(${img}) no-repeat 50%/cover`}}></li>
            ))}
          </ul>
      </div>
      <div className="bottom-con">
        <div className="dots">
          <ul>
            {images.map((el, idx) => (
              <li
                key={idx}
                className={currentImage === idx ? 'one' : ''}
                onClick={() => goTo(idx)}
                ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider