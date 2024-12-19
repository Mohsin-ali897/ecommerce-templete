import React from 'react'
import Navbar from "./navbar";
import Offers from "./offers";
import Footer from "./footer";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import AccountBanner from '../assets/accountBanner.png'
import AccountIcon from '../assets/cartIcon.png'
export default function Myaccount() {
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
        <Image src={AccountIcon} alt="shop icon" className="m-0" />
        <h1 className="text-4xl font-normal mb-2 text-black">Account</h1>
        <p className="text-[20px]">
          Home <IoIosArrowForward className="inline" /> Cart
        </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4 py-10 w-full">
  {/* Log In Section */}
  <div className="h-auto lg:h-[500px] w-full lg:w-[40%] px-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="font-semibold text-[24px] leading-9 my-4">Log In</h3>
    <label htmlFor="login-email" className="block text-sm font-medium">
      Username or email address
    </label>
    <input
      type="email"
      className="h-12 border-[1px] border-black rounded-[10px] block w-full sm:w-[300px] mb-6 mt-2 p-2"
    />
    <label htmlFor="login-password" className="block text-sm font-medium">
      Password
    </label>
    <input
      type="password"
      className="h-12 border-[1px] border-black rounded-[10px] block w-full sm:w-[300px] mb-6 mt-2 p-2"
    />
    <div className="flex items-center gap-3">
      <input type="checkbox" className="h-5 w-5" />
      <label className="text-sm">Remember me</label>
    </div>
    <button className="h-[42px] w-full sm:w-[180px] border-2 border-black mt-4 bg-black text-white rounded-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
      Log In
    </button>
    <p className="inline-block text-sm mt-4 ml-2">Lost Your Password?</p>
  </div>

  {/* Register Section */}
  <div className="h-auto lg:h-[500px] w-full lg:w-[40%] px-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="font-semibold text-[24px] leading-9 my-4">Register</h3>
    <label htmlFor="register-email" className="block text-sm font-medium">
      Email address
    </label>
    <input
      type="email"
      className="h-12 border-[1px] border-black rounded-[10px] block w-full sm:w-[300px] mb-6 mt-2 p-2"
    />
    <p className="text-sm mb-4">
      A link to set a new password will be sent to your email address.
    </p>
    <p className="text-sm mb-3 md:mb-9">
      Your personal data will be used to support your experience throughout this
      website, to manage access to your account, and for other purposes
      described in our{" "}
      <strong className="font-semibold">privacy policy</strong>.
    </p>
    <button className="h-[42px] w-full sm:w-[180px] border-2 border-black bg-black text-white rounded-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
      Register
    </button>
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
