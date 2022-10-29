import React from 'react'
import {PlayIcon} from "@heroicons/react/24/solid"


const Clips = ({clip, imgsrc}) => {
  return (
    <>
    <div className='w-32 h-28 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14 overflow-hidden rounded-xl relative group cursor-pointer transition-all duration-300'>
        <img src={imgsrc} className='absolute top-0 left-0 right-0 rounded-xl inset-0 flex h-full w-full transition-opacity duration-500 object-cover oppacity-100 z-10' alt="" />

        <div className='absolute top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5 right-0 flex rounded-full items-center justify-center  blur-effect-theme bg-white/75 w-8 h-8 md:w-5 md:h-5 z-[100] opacity-100'>
            <PlayIcon className='text-slate-900 md:w-3 md:h-3 icon-style' />
        </div>

        <video autoPlay={true} loop={true} muted={true} playsInline={true} className='flex object-cover rounded-xl group-hover:opacity-100 group-hover:z-50 absolute top-0 left-0 right-0 h-full w-full'>
            <source type='video/mp4 ' src={clip} />
        </video>
    </div>
    </>
  )
}

export default Clips