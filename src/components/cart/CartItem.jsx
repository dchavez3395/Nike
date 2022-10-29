import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from '../../app/CartSlice';

const CartItem = ({item: {id, title, text, color, shadow, price, cartQuantity, img},
}) => {
  const dispatch = useDispatch();
  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({id, title, text, color, shadow, price, cartQuantity, img}))
  }

  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQTY({id, title, text, color, shadow, price, cartQuantity, img}))
  }

  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQTY({id, title, text, color, shadow, price, cartQuantity, img}))
  }

  return (
    <>
      <div className='w-full px-5 justify-between flex items-center'>
        <div className='items-center flex gap-5'>
          <div className={`relative grid rounded bg-gradient-to-b ${color} ${shadow} items-center p-3 transition-all hover:scale-105 ease-in-out `}>
            <img src={img} alt={`image/${id}`} className='object-fill h-auto w-36 lg:w-28' />
            <div className='absolute px-1 text-xs text-black right-1 top-1 blur-theme-effect bg-white/80 rounded'>${price}</div>
          </div>
          <div className='items-center gap-4 grid'>
            <div className='leading-none items-center grid'>
              <h1 className='text-slate-900 font-medium text-lg lg:text-sm'>{title}</h1>
              <p className='text-slate-800 text-sm lg:text-xs'>{text}</p>
            </div>
            <div className='w-full justify-around items-center flex'>
              <button type='button' onClick={onDecreaseItemQTY} className='rounded bg-theme-cart items-center justify-center flex active:scale-90 w-6 h-6 lg:w-5 lg:h-5' >
                <MinusIcon className='h-5 w-5 lg:w-4 lg:h-4 stroke-[2] text-white' />
              </button>
              <div className='bg-theme-cart text-white rounded font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center'>
                {cartQuantity}
              </div>
              <button type='button' onClick={onIncreaseItemQTY} className='rounded bg-theme-cart items-center justify-center flex active:scale-90 w-6 h-6 lg:w-5 lg:h-5' >
                <PlusIcon className='h-5 w-5 lg:w-4 lg:h-4 stroke-[2] text-white'  />
              </button>
            </div>
          </div>
        </div>
        <div className='items-center grid gap-5'>
            <div className='items-center justify-center grid'>
              <h1 className='text-slate-900 font-medium text-lg lg:text-base'>${price * cartQuantity}</h1>
            </div>
            <div className='items-center justify-center grid'>
              <button type='button' className='grid items-center cursor-pointer justify-items-center rounded bg-theme-cart p-1 lg:p-0.5' onClick={onRemoveItem}>
                <TrashIcon className='h-5 w-5 text-white' />
              </button>
            </div>
          </div>
      </div>
    </>
  )
}

export default CartItem