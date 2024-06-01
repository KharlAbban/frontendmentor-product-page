import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartContext } from '../contexts/CartContext'
import CartItem from './CartItem';
import ProductButton from './ProductButton';

const HeaderCart = () => {
    const {cartState, cartDispatch} = useCartContext();


  return (
    <div className="dropdown dropdown-bottom dropdown-end">
        <div className="indicator pt-1.5 group">
            <div tabIndex={0} role="button" className="">
                <span className={`translate-y-0.5 indicator-item rounded-lg bg-primOrange text-[10px] text-white font-bold px-2 py-[1px] ${cartState.length > 0 ? '' : 'hidden'}`}>{cartState.length}</span>
                <AiOutlineShoppingCart size={25} className='text-darkGrayishBlue group-hover:text-veryDarkBlue duration-75 hover:scale-105' />
            </div>
        </div>
        <div tabIndex={0} className="dropdown-content z-[1] p-4 bg-white shadow md:shadow-2xl rounded-lg mt-7 w-[29rem] translate-x-20">
            <h1 className='border-b border-b-darkGrayishBlue font-bold pb-3 pl-2'>Cart</h1>
            <div className='w-full min-h-48'>
                {cartState.length < 1 && <div className="h-44 w-full grid place-items-center">Your cart is empty</div>}
                {cartState.length > 0 && cartState.map(cartItem => <CartItem key={cartItem.productId} cartDispatch={cartDispatch} id={cartItem.productId} itemName={cartItem.productName} itemPrice={cartItem.price.currentPrice} itemAmount={cartItem.quantityChosen} itemImage={cartItem.image} />)}
                {cartState.length > 0 && <ProductButton text="Checkout" className="mt-20" />}
            </div>
        </div>
    </div>
  )
}

export default HeaderCart
