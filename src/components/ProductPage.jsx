import React from 'react'
import ProductImageSection from './ProductImageSection'
import ProductInfoSection from './ProductInfoSection'

const ProductPage = () => {
  return (
    <div className="w-full lg:px-4 flex md:justify-between max-md:flex-col">
      <ProductImageSection />
      <ProductInfoSection />
    </div>
  )
}

export default ProductPage
