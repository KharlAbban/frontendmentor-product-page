import React, { useEffect } from 'react'
import ProductImage from './ProductImage'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({showLightBox, setShowLightBox, images}) => {
  useEffect(() => {
    const modalListener =  () => {
      setShowLightBox(false);
    }
    
    document.querySelector("#modalImage").addEventListener("close", modalListener)

    return () => {
      document.querySelector("#modalImage").removeEventListener("close", modalListener)
    }
  }, []);

  const handleModalClose = () => {
    document.querySelector("#modalImage").close();
    setShowLightBox(!showLightBox);
  }

  return (
    <dialog id='modalImage' className={`${!showLightBox ? 'hidden' : ''} bg-transparent border-none outline-none overflow-visible backdrop:bg-black/70 flex gap-2 flex-col`}>
      <div className="">
        <AiOutlineClose size={25} className='text-grayishBlue hover:text-primOrange duration-75 float-right' onClick={handleModalClose} />
      </div>
      <ProductImage images={images} showLightBox={showLightBox} isModal={true} />
    </dialog>
  )
}

export default Modal
