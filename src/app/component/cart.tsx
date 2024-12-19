import React from "react";
import CartImg from "../assets/cart.png";
import CartIcon from "../assets/cartIcon.png";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "./navbar";
import CartProImg from "../assets/Asgaard sofa 1.png";
import Image from "next/image";
import cartItem from "../assets/cartItem.png"
import Offers from "./offers";
import Footer from "./footer";

export default function CartPage() {
  return (
    <>
      <Navbar />
      <div className="relative h-[400px] flex justify-center items-center flex-col">
        <Image
          src={CartImg}
          alt="Cart banner"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
        <Image src={CartIcon} alt="shop icon" className="m-0" />
        <h1 className="text-4xl font-normal mb-2 text-black">Cart</h1>
        <p className="text-[20px]">
          Home <IoIosArrowForward className="inline" /> Cart
        </p>
      </div>

      {/* Dashboard */}


    <div className="md:px-[100px] md:mt-[72px] flex md:flex-row flex-col gap-[32px]  w-full">
      
      <div className="w-[100%] ">
        <ul className="hidden h-[55px] md:flex justify-around items-center bg-[#FFF9E5] ">
            <li className="text-[16px] font-medium ml-[137px]">Product</li>
            <li className="text-[16px] font-medium">Price</li>
            <li className="text-[16px] font-medium ">Quantity</li>
            <li className="text-[16px] font-medium">Subtotal</li>
        </ul>

        <div className="flex flex-col gap-[30px] md:flex-row justify-around items-center mt-[55px]">
            <Image src={cartItem} alt=""></Image>
            <p className="text-[#9F9F9F] text-[12px] font-normal md:text-[16px] ">Asgaard sofa</p>
            <p className="text-[#9F9F9F] text-[12px] font-normal md:text-[16px] ">Rs. 250,000.00</p>
            <div className="border border-black w-[32px] h-[32px] flex justify-center items-center">1</div>
            <p className="text-[#9F9F9F] text-[12px] font-normal md:text-[16px]">Rs. 250,000.00</p>
        </div>

      </div>

        <div className="rounded flex flex-col justify-around items-center bg-[#fff9e6] py-9 px-9  md:w-[40%] h-[390px]">
          <h3 className="md:text-[32px] text-[24px] font-bold">Cart Totals</h3>

          <div  className="flex md:gap-[62px]">
                <p className="text-[12px] md:text-[16px] font-medium">Subtotal</p>
                <p className="text-[12px] md:text-[16px] text-[#9F9F9F]">Rs. 250,000.00</p>
          </div>

          <div className="flex md:gap-[62px]">
            <p className="text-[12px] md:text-[16px] font-medium">Total</p>
            <p className="text-[12px] md:text-[20px] text-[#B88E2F] font-medium">Rs. 250,000.00</p>
          </div>

        <button className="border border-black rounded-[15px] flex justify-center items-center w-[222px] h-[58px]">Check Out</button>

        </div>
        
    </div>
    <div className="my-3 md:my-7 py-3 md:py-7 ">

    <Offers/>
    </div>
    <Footer/>

    </>
  );
}
