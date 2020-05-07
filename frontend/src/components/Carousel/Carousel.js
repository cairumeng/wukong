import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import axios from '../../axios'
const CarouselContainer = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get('/carousel').then((res) => {
      setImages(res)
    })
  }, [])

  return (
    <Carousel>
      {images.map((image) => (
        <Carousel.Item>
          <a href={image.redirectUrl}>
            <img
              className="d-block w-100"
              src={image.imageUrl}
              alt={'slide-' + image.position}
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselContainer
