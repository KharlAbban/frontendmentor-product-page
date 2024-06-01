import { FaTrashAlt } from 'react-icons/fa'
import { toast } from 'sonner'

const CartItem = ({cartDispatch, id, itemName, itemPrice, itemAmount, itemImage}) => {
    const handleItemDelete = () => {
      cartDispatch({
          type: 'remove_from_cart',
          itemId: id
      })
      toast.warning("Item deleted from cart!", {
        cancel: {
          label: "Close",
          onClick: () => {}
        }
      });
      
    }

  return (
    <div className='mt-2 p-2 flex justify-between items-center'>
      <div className='flex gap-4'>
        <img src={`/${itemImage}`} className='w-10 h-10 rounded' alt="" />
        <div>
            <h1 className='text-darkGrayishBlue font-semibold'>{itemName}</h1>
            <p className='text-sm text-darkGrayishBlue'>${itemPrice} x {itemAmount} <span className='font-bold text-veryDarkBlue text-base ml-2'>${itemPrice*itemAmount}</span></p>
        </div>
      </div>

      <label onClick={handleItemDelete}>
        <FaTrashAlt size={20} className='text-grayishBlue hover:text-primOrange duration-75 mr-3' />
      </label>
    </div>
  )
}

export default CartItem
