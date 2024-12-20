import React from 'react'
import Navbar from '../component/navbar'
import Shop from '../component/shop'
import Shop_product from '../component/shop_product'
import Footer from '../component/footer'
export default function ShopPage() {
  return (
    <div>
      <Navbar/>
      <Shop/>
      <Shop_product/>
      <div className='my-3'>
      <Footer/>
      </div>
    </div>
  )
}
