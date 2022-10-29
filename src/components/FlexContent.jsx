import React from 'react'

const FlexContent = ({ifExists, endpoint: {heading, btn, title, text, img, url}}) => {
  return (
    <>
    <div className={`nike-container justify-center w-full gap-4 md:px-12 items-center flex lg:flex-col lg:justify-center  ${ifExists ? 'flex-row-reverse' : 'flex-row' }`}>
      <div className='w-full max-w-lg lg:max-w-none grid items-center lg:justify-items-center md:text-center px-0'>
        <h1 className='font-bold text-gradient text-4xl sm:text-3xl'>{heading}</h1>
        <h1 className='text-slate-900 font-bold filter drop-shadow-lg text-5xl lg:text-4xl md:text-3xl sm:text-2xl'>{title}</h1>
        <p className='text-slate-900 xl:text-sm my-4'>{text}</p>
        <a href={url} target={'_blank'} role='button'>
          <button type='button' className='bg-slate-900 shadow-slate-900 text-slate-100 button-theme py-1.5'>{btn}</button>
        </a>
      </div>
      <div className='relative w-full max-w-xl lg:max-w-none justify-center flex items-center '>
        <img src={img} alt={`img/${heading}`} className={`transitions-theme object-fill w-auto ${ifExists ? 'rotate-6 hover:-rotate-12 h-72 xlh-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36' : 'rotate-[19deg] hover:rotate-12 h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40' }`} />
      </div>
    </div>
    </>
  )
}

export default FlexContent