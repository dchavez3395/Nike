import React from 'react'

const SocialLink = ({icon}) => {
  return (
    <>
        <img src={icon} alt="" className='cursor-pointer transition-all duration-200 hover:scale-110 w-8 h-8 flex items-center md:w-6 md:h-6 sm:w-5 sm:h-5' />
    </>
  )
}

export default SocialLink