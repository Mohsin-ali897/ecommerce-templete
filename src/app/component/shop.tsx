import React from 'react';
import Navbar from './navbar';
import Banner from '../assets/shopbanner.png';
import Image from 'next/image';
import Shopicon from '../assets/shopicon.png'
import { IoIosArrowForward } from "react-icons/io";
import { FaSliders } from "react-icons/fa6";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
export default function Shop() {
  return (
    <>
    <div className="relative h-[400px] flex justify-center items-center flex-col">
  <Image
    src={Banner}
    alt="shop banner"
    layout="fill"
    objectFit="cover"
    className="absolute top-0 left-0"
  />
    <Image
    src={Shopicon}
    alt="shop icon"
    className='m-0'
    />
    <h1 className='text-4xl font-normal mb-2'>Shop</h1>
    <p className='text-[20px]'>Home <IoIosArrowForward className='inline' /> Shop</p>
</div>
<div className="bg-[#ede5e5] my-8 p-4 md:p-8 flex flex-col gap-6 md:flex-row justify-between items-center rounded-md shadow-lg">
  {/* Left Section */}
  <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4">
    {/* Filters */}
    <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-400 w-full md:w-[200px] flex items-center justify-between md:justify-start pr-4">
      <p className="text-sm md:text-base flex items-center text-center gap-3">
        <FaSliders size={20} className="text-gray-700" /> Filter
        <TfiLayoutGrid2Alt size={18} className="text-gray-700" />
        <TbLayoutDistributeHorizontal size={22} className="text-gray-700" title="Cheers!" />
      </p>
    </div>
    {/* Results Info */}
    <div className="flex justify-center md:justify-start items-center text-center text-gray-600 text-sm md:text-base">
      <p>Showing 1–16 of 32 results</p>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-auto flex flex-col sm:flex-row gap-6 justify-between items-center">
    {/* Show Items */}
    <div className="flex items-center gap-3 sm:gap-5 w-full sm:w-auto justify-between sm:justify-start">
      <p className="text-sm md:text-base text-gray-700">Show</p>
      <div className="h-8 w-full md:w-16 bg-white text-gray-800 text-center flex items-center justify-center rounded shadow">
        10
      </div>
    </div>

    {/* Sort Options */}
    <div className="flex items-center gap-3 sm:gap-5 w-full sm:w-auto justify-between sm:justify-start">
      <p className="text-sm md:text-base text-gray-700">Sorted By</p>
      <div className="h-8 w-full sm:w-32 bg-white text-gray-800 text-center flex items-center justify-center rounded shadow">
        Default
      </div>
    </div>
  </div>
</div>

</>

  );
}
