import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'
import emptybag from '../../assets/emptybag.png'

const CartEmpty = ({onCartToggle}) => {
  return (
    <>
        <div className='h-screen text-center justify-center flex flex-col px-11 gap-7 items-center '>
            <img src={emptybag} alt="shopping-bag" className='object-fill w-40 lg:w-36 sm:w-28 h-auto transition-all duration-300 hover:scale-110' />
            <button type='button' className='font-semibold flex items-center jusity-center text-slate-900 py-2 gap-3 text-sm px-5 button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 active:scale-110' onClick={onCartToggle}>
                <ArrowLeftIcon className='text-slate-900 w-5 h-5' />
                <span className=''>Back To Nike Store</span>
            </button>
        </div>
    </>
  )
}

export default CartEmpty