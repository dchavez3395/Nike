import React from 'react'
import Title from './utilities/Title'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import {HashtagIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/solid'
import {truncate} from 'lodash'

const Stories = ({story: {title, news}}) => {

    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };

  return (
    <>
        <div className='mb-11 nike-container'>
            <Title title={title} />
            <div className='mt-7'>
                <Splide options={splideOptions}>
                    {news.map((item, index) => (
                        <SplideSlide key={index} className='mb-0.5'>
                            <div className='rounded-lg shadow shadow-slate-200 relative grid ring-1 ring-slate-200 items-center gap-4 pb-2 '>
                                <div className='justify-center flex items-center'>
                                    <img src={item.img} alt={`img/${index}`} className='rounded-tl-lg rounded-tr-lg object-cover w-full h-auto shadow-md shadow-slate-200' />
                                </div>
                                <div className='w-full px-4 flex items-center justify-between gap-0.5'>
                                    <div className='flex gap-0.5 items-center'><HeartIcon className='icon-style w-5 h-5 text-red-500' /> <span className='font-bold text-xs'>{item.like}</span></div>
                                    <div className='flex gap-0.5 items-center'><ClockIcon className='icon-style text-black w-4 h-4' /> <span className='font-bold text-xs'>{item.time}</span></div>
                                    <div className='flex gap-0.5 items-center'><HashtagIcon className='icon-style text-blue-600' /> <span className='text-blue-600 font-bold text-xs'>{item.by}</span></div>
                                </div>
                                <div className='grid items-center px-4 justify-center w-full'>
                                    <h1 className='text-base font-semibold lg:text-sm'>{item.title}</h1>
                                    <p className='text-justify lg:text-xs text-sm'>{truncate(item.text, {length: 175})}</p>
                                </div>
                                <div className='flex items-center justify-center px-4 w-full'>
                                    <a href={item.url} target='_blank' role={'button'} className='w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 button-theme py-1.5'>{item.btn}</a>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    </>
  )
}

export default Stories