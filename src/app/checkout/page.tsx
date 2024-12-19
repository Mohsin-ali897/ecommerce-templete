import React from 'react'
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Offers from '../component/offers';
import Image from "next/image";
import PageIcon from '../assets/cartIcon.png'
import { IoIosArrowForward } from 'react-icons/io';
import AccountBanner from '../assets/accountBanner.png'

export default function Checkout() {
  return (
    <div>
        <Navbar/>
        <div className="relative h-[400px] flex justify-center items-center flex-col">
        <Image
          src={AccountBanner}
          alt="Cart banner"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
        <Image src={PageIcon} alt="shop icon" className="m-0" />
        <h1 className="text-4xl font-normal mb-2 text-black">Checkout</h1>
        <p className="text-[20px]">
          Home <IoIosArrowForward className="inline" /> Checkout
        </p>
      </div>
      {/* billing section  */}
      <div>
  <div className='p-6 sm:p-10 md:p-14'>
    <div className='flex flex-col md:flex-row justify-center items-start gap-6 md:gap-9'>

      {/* Billing Details Section */}
      <div className='w-full md:w-[400px] flex flex-col gap-5  p-4 sm:p-6 rounded-lg'>
        <h2 className='font-semibold text-lg sm:text-[24px] md:text-[28px] leading-8 text-start'>Billing details</h2>
        <div className='flex flex-wrap gap-4'>
          <div className='w-full sm:w-[48%]'>
            <label htmlFor="" className='text-sm block mb-2'>First Name</label>
            <input type="text" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' />
          </div>
          <div className='w-full sm:w-[48%]'>
            <label htmlFor="" className='text-sm block mb-2'>Last Name</label>
            <input type="text" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' />
          </div>
        </div>
        <div>
          <label htmlFor="" className='text-sm block mb-2'>Company Name (Optional)</label>
          <input type="text" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' />
        </div>
        <div>
          <label htmlFor="" className='text-sm block mb-2'>Street address</label>
          <input type="text" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' />
        </div>
        <div>
          <label htmlFor="" className='text-sm block mb-2'>Town / City</label>
          <input type="text" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' />
        </div>
        <div>
          <label htmlFor="" className='text-sm block mb-2'>Province</label>
          <input type="text" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' placeholder='Western Province' />
        </div>
        <div>
          <label htmlFor="" className='text-sm block mb-2'>ZIP code</label>
          <input type="text" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' />
        </div>
        <div>
          <label htmlFor="" className='text-sm block mb-2'>Country / Region</label>
          <input type="text" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' />
        </div>
        <div>
          <label htmlFor="" className='text-sm block mb-2'>Phone</label>
          <input type="tel" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' placeholder='Sri Lanka' />
        </div>
        <div>
          <label htmlFor="" className='text-sm block mb-2'>Email</label>
          <input type="email" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' />
        </div>
        <div>
          <input type="text" className='h-10 sm:h-12 w-full border-[1px] border-[#9F9F9F] block rounded-[10px] px-4' placeholder='Additional information' />
        </div>
      </div>

      {/* Summary Section */}
      <div className='w-full md:w-[400px]  p-4 sm:p-6 rounded-lg'>
        <div className='border-b-[1px] pb-4'>
          <div className='flex justify-between items-center text-lg font-medium my-2'>
            <p>Product</p>
            <p>Subtotal</p>
          </div>
          <div className='flex justify-between items-center text-sm mb-2'>
            <p className='text-[#9F9F9F]'>Asgaard sofa X 1</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className='flex justify-between items-center mb-2'>
            <p>Total</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className='flex justify-between items-center mb-2'>
            <p>Subtotal</p>
            <p className='font-medium text-lg text-[#B88E2F]'>Rs. 250,000.00</p>
          </div>
        </div>

        <div>
          <h5 className="relative pl-6 text-base font-medium my-3">
            <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full border border-black"></span>
            Direct Bank Transfer
          </h5>
          <p className='text-sm mb-4'>
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>
          <h5 className="relative pl-6 text-base font-medium my-3 text-[#9F9F9F]">
            <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full border border-black"></span>
            PayPal
          </h5>
          <h5 className="relative pl-6 text-base font-medium my-3 text-[#9F9F9F]">
            <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full border border-black"></span>
            Cash On Delivery
          </h5>
          <p className='text-sm'>
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong className='font-medium'>privacy policy</strong>.
          </p>
          <div className='flex justify-center items-center my-4'>
            <button className='h-12 w-full sm:w-56 font-light text-center py-2 border-2 border-black rounded-[10px] hover:bg-black hover:text-white transition-all'>
              Place Order
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

      <div className="my-3 md:my-7 py-3 md:py-7 ">
            < Offers / >
            </div>
            <div >
              <Footer/>
            </div>
          
    </div>
  )
}
{/* <div className=''>
            {RecentBlogCard.map((Elm)=>{
              return(
                <div className='flex items-center gap-3'>
                  <div className='h-20 w-20 my-3'>
                    <Image
                    src={Elm.pic}
                    alt='post Image'
                    />
                  </div>
                  <div>
                    <p>{Elm.intro}</p>
                    <p className='font-normal text-[#9f9f9f]'>03 Aug 2022</p>
                    </div>

                </div>
              )
            })}
  </div> */}