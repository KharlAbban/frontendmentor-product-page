import { useState } from 'react'
import { changeCarousel } from '../utils/changeCarousel';

const ProductImage = ({images, setShowLightBox, showLightBox, isModal}) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    const imageStyles = isModal ? "h-[27rem] w-[27rem] relative" : "md:h-[23rem] md:w-[23rem] hover:-translate-y-1 duration-100";

    const handleShowLightBox = () => {
      if (showLightBox) {
        return
      } else {
        setShowLightBox(!showLightBox);
        document.querySelector("#modalImage").showModal();
      }
    }

    const handleCarouselChange = (amount) => {
      const newImage = changeCarousel(currentImage, amount, images);
      setCurrentImage(newImage);
    }

  return (
    <>
      <div className={`${imageStyles}`}>
          <img src={`/${currentImage}`} onClick={handleShowLightBox} className={`w-full h-full cursor-pointer max-md:hidden rounded-lg shadow`} />
          {isModal && <>
            <span onClick={() => handleCarouselChange(-1)} className="absolute top-[12rem] -left-6 btn btn-circle border-none shadow outline-none text-lg hover:bg-lightGrayishBlue hover:text-primOrange bg-white">❮</span> 
            <span onClick={() => handleCarouselChange(1)} className="absolute top-[12rem] -right-6 btn btn-circle border-none shadow outline-none text-lg hover:bg-lightGrayishBlue hover:text-primOrange bg-white">❯</span> 
          </>}
      </div>
      <div className="mt-4 flex justify-between max-md:hidden">
        <div className="max-md:hidden w-full">
          <div className="w-[23rem] mx-auto flex justify-between">
            {images.map(image => (
              <div key={image} className="w-20 relative shadow hover:border-2 duration-100 hover:border-primOrange hover:-translate-y-0.5 rounded overflow-hidden h-20 p-0">
                {currentImage === image && <div className="absolute top-0 left-0 h-full w-full bg-white/50"></div>}
                <img onClick={() => setCurrentImage(image)} src={`/${image}`} alt="" className="object-cover hover:brightness-50 h-full w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductImage
