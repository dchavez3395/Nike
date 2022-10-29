import React from 'react'
import Item from './utilities/Item'
import Title from './utilities/Title'

const Sales = ({ifExists, endpoint: {title, items}}) => {
  return (
    <>
      <div className='nike-container'>
        <Title title={title} />
        <div className={`justify-items-center items-center grid gap-7 lg:gap-5 mt-7  ${
          ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
        }`}>
          {items?.map((item, index) => (
            <Item {...item} key={index} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Sales