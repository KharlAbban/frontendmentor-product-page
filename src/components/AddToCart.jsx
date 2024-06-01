import { useState } from 'react'
import ProductButton from './ProductButton'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartContext } from '../contexts/CartContext';
import { useProductContext } from '../contexts/ProductContext';
import { toast } from 'sonner';

const AddToCart = ({id}) => {
  const {cartDispatch} = useCartContext();
  const {productId} = useProductContext();
  const [productNumber, setProductNumber] = useState(1);

  const handleAddToCart = () => {
    cartDispatch({
      type: "add_to_cart",
      itemId: productId,
      amount: productNumber
    })

    toast.success("Item added to cart!", {
      cancel: {
        label: "Close",
        onClick: () => {}
      }
    });
  }

  const increaseProduct = (num) => {
    const newNumber = productNumber + num;
    if (newNumber < 1) {
      newNumber = 1;
    }
    setProductNumber(newNumber);
  }

  return (
    <div className='flex max-sm:flex-col max-md:flex-row max-lg:flex-col w-full gap-4 mt-6 items-center'>
      <div className='max-sm:w-full max-md:w-1/3 md:w-full xl:w-1/3'>
        <div className='w-full flex items-center py-2 rounded bg-grayishBlue/30 justify-center'>
          <button onClick={() => increaseProduct(-1)} className='w-1/3 text-primOrange hover:text-paleOrange duration-75'>
            <AiOutlineMinus size={25} className='mx-auto font-extrabold' />
          </button>
          <p className='w-1/3 text-center font-bold text-xl'>{productNumber}</p>
          <button onClick={() => increaseProduct(1)} className='w-1/3 text-primOrange hover:text-paleOrange duration-75'>
            <AiOutlinePlus className='mx-auto font-extrabold' size={25} />
          </button>
        </div>
      </div>
      <div className='max-sm:w-full max-md:w-2/3 md:w-full xl:w-2/3'>
        <ProductButton text="Add to cart" className="max-md:shadow-lg shadow-primOrange" icon={<AiOutlineShoppingCart />} onClick={handleAddToCart} />
      </div>
    </div>
  )
}

export default AddToCart
