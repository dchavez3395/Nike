import React, { useState, useEffect } from 'react'
import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalQTY, setOpenCart } from '../app/CartSlice'

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    // sticky nav
    const onNavScroll = () => {
        if(window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll' , onNavScroll);
        }
    }, []);

  return (
    <>
    <header className={ !navState ? 'z-50 absolute top-7 left-0 right-0 opacity-100' : 'flex items-center justify-center opacity-100 z-[300] blur-effect-theme fixed top-0 left-0 right-0 h-[9vh]' }>
        <nav className='nike-container flex items-center justify-between opacity-100'>
            <div className='items-center flex cursor-pointer'>
                <img src={logo} alt="logo-image" className={`h-auto w-16 ${navState && 'filter brightness-0'}`} />
            </div>
            <ul className='justify-center items-center flex gap-2'>
                <li className='items-center grid'>
                    <MagnifyingGlassIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`} />
                </li>
                <li className='items-center grid'>
                    <HeartIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`} />
                </li>
                <li className='items-center grid'>
                    <button className='relative transition-all duration-300 border-none outline-none active:scale-110' type='button' onClick={onCartToggle}>
                        <ShoppingCartIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`} />
                        <div className={`font-medium absolute top-4 right-0  shadow w-4 h-4 text-[0.65rem] leading-tight rounded-full items-center flex justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${navState ? 'shadow-slate-900 bg-slate-900 text-slate-100' : 'shadow-slate-100 bg-slate-100 text-slate-900' }`}>{totalQTY}</div>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar