import React from 'react'

const Title = ({title}) => {
  return (
    <>
        <div className='items-center grid'>
            <h1 className='text-slate-900 text-5xl lg:text-4xl md:text-3xl filter drop-shadow-lg font-bold '>{title}</h1>
        </div>
    </>
  )
}

export default Title