import React from 'react'

const Footer = ({footerAPI: { titles, links}}) => {
  return (
    <>
    <footer className='pt-7 pb-5 bg-theme'>
        <div className='text-slate-200 nike-container'>
            <div className='max-w-2xl grid grid-cols-3 items-start w-full m-auto md:max-w-none md:gap-5'>
                {titles.map((item, i) => (
                    <div key={i} className='items-center grid'>
                        <h1 className='font-semibold uppercase text-lg lg:text-base md:text-sm'>{item.title}</h1>
                    </div>
                ))}
                {links.map((list, i) => (
                    <ul key={i} className='gap-1 items-center grid' >
                        {list.map((link, i) => (
                            <li key={i} className='text-sm sm:text-xs'>{link.link}</li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className=' text-center mt-5'>
                <p className='text-sm md:text-center'>Website by <span className='font-semibold'>Daniel Chavez</span></p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer