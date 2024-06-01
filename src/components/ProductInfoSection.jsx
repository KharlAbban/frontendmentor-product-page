import {companyName, productInfo} from "../data.json"
import AddToCart from "./AddToCart"

const ProductInfoSection = () => {
    const {productName, productDescription, price: {currentPrice, discount, oldPrice}} = productInfo;
  return (
    <div className='max-md:px-5 md:pl-10 flex flex-col gap-2 mb-48 md:w-1/2 md:pt-8 lg:pt-12'>
      <h2 className="text-darkGrayishBlue font-bold uppercase tracking-wider text-sm">{companyName}</h2>
      <h1 className="text-veryDarkBlue text-4xl font-bold">{productName}</h1>
      <p className="text-darkGrayishBlue font-normal tracking-wide leading-7">{productDescription}</p>

      <main className="mt-4 flex max-md:justify-between md:flex-col md:gap-2">
        <p className="flex gap-6 items-center">
            <span className="font-bold text-3xl">${currentPrice}</span>
            <span className="bg-black text-white grid place-items-center px-2 rounded-lg text-xs py-1 font-semibold">{discount}%</span>
        </p>
        <p className="line-through text-darkGrayishBlue text-lg font-semibold">${oldPrice}</p>
      </main>

      <AddToCart />
    </div>
  )
}

export default ProductInfoSection
