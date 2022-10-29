import React from 'react'
import { FlexContent, HeroBanner, Sales, Stories, Footer, Navbar, Cart } from './components'
import { heroapi, popularsales, toprateslaes , highlight, sneaker, story, footerAPI } from './data/data.js'


const App = () => {
  return (
    <>
    <Navbar />
    <Cart />
      <main className='relative gap-16 flex flex-col'>
        <HeroBanner heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
