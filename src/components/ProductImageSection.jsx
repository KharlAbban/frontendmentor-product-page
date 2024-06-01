import { useState } from "react";
import Modal from "./Modal";
import ProductImage from "./ProductImage";
import ImageCarousel from "./ImageCarousel";
import { useProductContext } from "../contexts/ProductContext";

const ProductImageSection = () => {
    const {images} = useProductContext();
    const [showLightBox, setShowLightBox] = useState(false);

  return (
    <>
      <Modal showLightBox={showLightBox} setShowLightBox={setShowLightBox} images={images} />
      <div className='max-md:h-[21rem] max-md:overflow-hidden mb-5 md:w-1/2 flex md:flex-col md:gap-4 md:items-center max-md:w-full max-md:p-0 relative'>
        <ProductImage images={images} setShowLightBox={setShowLightBox} showLightBox={showLightBox} />
        <ImageCarousel images={images} />
      </div>
    </>
  )
}

export default ProductImageSection
