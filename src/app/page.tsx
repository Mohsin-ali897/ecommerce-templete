
import React from 'react'

import Navbar from './component/navbar'
import Hero from './component/Hero'
import HeroProduct from './component/heroProduct'
import TopPick from './component/topPick'
import Blog from './component/blog'
import Insta from './component/insta'
import Footer from './component/footer'
import SofaAd from './component/sofaAd'
import { ClassNames } from '@emotion/react';
export default function Home() {
  return (
    <>
    <div className='bg-[#FBEBB5]'>
      <Navbar />
      {/* banner section */}
      <Hero />
       {/* Hero Product Component */}
      <HeroProduct />
      {/* Top pickes */}
      <TopPick />
      {/* Sofa adds */}
      <SofaAd />
      {/* Blog  */}
      <Blog />
      {/* Insta section */}
      <Insta></Insta>
      {/* footer section */}
      <Footer />
    </div>
      

    </>
  )
}
