import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartState, selectTotalAmount, selectTotalQTY, setClearCartItems, setCloseCart, setGetTotals } from '../app/CartSlice'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'
import CartNumber from './cart/CartNumber'

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
      dispatch(setCloseCart({
          cartState: false
      }))
  }
  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }

  useEffect(() => {
    dispatch(setGetTotals())
  }, [cartItems, dispatch])

  return (
    <>
      <div className={`w-full h-screen blur-effect-theme z-[350] opacity-100 fixed top-0 left-0 right-0 bottom-0 ${ifCartState ? 'visible opacity-100 translate-x-0' : 'invisible translate-x-8 opacity-0'}`}>
        <div className={`absolute right-0 h-screen blur-effect-theme w-full max-w-xl`}>
        <CartNumber onCartToggle={onCartToggle} totalQTY={totalQTY} onClearCartItems={onClearCartItems} />
          {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : 
          <div>
              <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-hidden scroll-smooth py-3'>
                {cartItems?.map((item, i) => (
                  <CartItem item={item} key={i} /> 
                ))}
              </div>

              <div className='fixed bottom-0 grid items-center w-full bg-white px-5 py-2 '>
                <div className='flex items-center justify-between'>
                  <h1 className='uppercase font-semibold text-base'>SubTotal</h1>
                  <h1 className='rounded text-sm bg-theme-cart px-1 py-0.5 text-slate-100'>${totalAmount}</h1>
                </div>
                <div className='items-center grid gap-2'>
                  <p className='text-center items-center grid font-medium'>Taxes and Shipping Will Calculate At Shipping</p>
                  <button type='button' className='text-white button-theme bg-theme-cart'>Check Out</button>
                </div>
              </div>
            </div>
            }
        </div>
      </div>
    </>
  )
}
  
export default Cart