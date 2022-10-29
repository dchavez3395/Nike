import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CartNumber = ({onCartToggle, onClearCartItems, totalQTY}) => {
  return (
    <>
    <div className='sticky top-0 left-0 right-0 flex bg-white items-center px-3 h-11 justify-between'>
        <div className='items-center flex gap-3'>
            <div className='items-center grid cursor-pointer' onClick={onCartToggle}>
                <ChevronDoubleLeftIcon className='h-5 w-5 stroke-[2] text-slate-900 hover:text-orange-500' />
            </div>
            <div className='items-center grid'>
                <h1 className='font-medium text-slate-900 text-base'>Your Cart <span className='rounded text-xs px-1 bg-theme-cart text-slate-100 py-0.5 font-normal'>({totalQTY} Items)</span></h1>
            </div>
        </div>
        <div className='items-center flex'>
            <button onClick={onClearCartItems} type='button' className='p-0.5 active:scale-90 rounded bg-theme-cart'><XMarkIcon className='h-5 w-5 stroke-[2] text-white' /></button>
        </div>
    </div>
    </>
  )
}

export default CartNumber