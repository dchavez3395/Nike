import React from 'react'
import Clips from './utilities/Clips'
import SocialLink from './utilities/SocialLink'

const HeroBanner = ({heroapi : {title, subtitle, img, btntext, videos, sociallinks}}) => {
  return (
    <>
    <div className='flex flex-col relative w-auto h-auto'>
        <div className='absolute top-0 left-0 right-0 opacity-100 z-10 w-auto bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh]'></div>
        <div className='z-20 nike-container relative grid items-center justify-items-center opacity-100'>
            <div className='items-center justify-items-center mt-28 md:mt-24 grid'>
                <h1 className='font-extrabold drop-shadow-sm text-slate-200 text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl'>{title}</h1>
                <h1 className='font-extrabold drop-shadow-sm text-slate-200 text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl'>{subtitle}</h1>
                <button className='rounded-xl my-5 button-theme shadow-slate-200 bg-slate-200'>{btntext}</button>
                <div className='absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 items-center grid gap-5 md:gap-3  '>
                    {videos?.map((val, i) => (
                        <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
                    ))}
                </div>
                <div className='absolute top-[33vh] lg:top-[27vh] right-0 gap-2 grid items-center'>
                    {sociallinks?.map((val, i) => (
                                        <SocialLink
                                        key={i}
                                        icon={val.icon}
                                      />
                    ))}
                </div>
            </div>
            <div className='items-center flex'>
                <img src={img} className='cursor-pointer objet-fill w-auto transitions-theme -rotate-[25deg] hover:rotate-0 h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh]' alt="picture" />
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroBanner