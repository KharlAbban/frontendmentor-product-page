import React, { useState } from 'react'
import { changeCarousel } from '../utils/changeCarousel';

const ImageCarousel = ({images}) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleCarouselChange = (amount) => {
      const newImage = changeCarousel(currentImage, amount, images);
      setCurrentImage(newImage);
    }

  return (
    <div className="w-full md:hidden">
        <div className="w-full h-full">
            <img src={`/${currentImage}`} className="relative w-full h-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <span onClick={() => handleCarouselChange(-1)} className="btn btn-circle border-none shadow outline-none text-lg hover:bg-lightGrayishBlue hover:text-primOrange bg-white">❮</span> 
            <span onClick={() => handleCarouselChange(1)} className="btn btn-circle border-none shadow outline-none text-lg hover:bg-lightGrayishBlue hover:text-primOrange bg-white">❯</span> 
            </div>
        </div>
    </div>
  )
}

export default ImageCarousel