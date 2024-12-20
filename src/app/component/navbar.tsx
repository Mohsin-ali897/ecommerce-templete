'use client';

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

import { IoMdHeartEmpty } from "react-icons/io";import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import ProImg from '../assets/Asgaard sofa 1.png';
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div>
      <nav className="h-24 w-full flex items-center justify-between px-3 md:px-[100px] bg-transparent">
        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg font-normal transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:items-center md:h-auto md:bg-transparent md:translate-x-0`}
        >
          {/* Close Button for Hamburger Menu */}
          <div className="absolute top-4 right-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-red-500 text-2xl"
            >
              <IoClose />
            </button>
          </div>

          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shoppage" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/shoppage/cartPage/account/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Action Icons */}
        <ul className="flex md:flex-row items-center gap-6 md:gap-[40px]">
          <li>
            <Link href="/shoppage/cartPage/account">
              <MdOutlinePersonAddAlt className="text-xl md:text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <IoMdSearch className="text-xl md:text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="#">
              < IoMdHeartEmpty  className="text-xl md:text-2xl font-bold" />
            </Link>
          </li>
          <li>
            <button onClick={toggleCard} className="relative">
              <AiOutlineShoppingCart className="text-xl md:text-2xl" />
              {/* Card */}
              {isCardVisible && (
                <div className="absolute top-12 right-[-113px] sm:right-0 w-[280px] md:h-[400px] sm:w-[320px] h-auto bg-white shadow-lg border rounded-lg p-4 z-10 ">
                  {/* Cross Icon */}
                  <div className="flex justify-end">
                    <button
                      onClick={toggleCard}
                      className="text-gray-600 hover:text-red-500 text-lg"
                    >
                      <IoClose />
                    </button>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image
                      src={ProImg}
                      alt="Product"
                      className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded bg-[#FBEBB5]"
                    />
                    <div>
                      <h3 className="font-bold text-md sm:text-lg">Asgaard sofa</h3>
                      <p className="text-sm text-gray-600">
                        1 X <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="pl-5 py-2 sm:pt-5 lg:pt-44">
                    <p>Subtotal <span className="text-[#B88E2F] pl-4">Rs. 250,000.00</span></p>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-between ">
                    <Link
                      href="/shoppage/cartPage"
                      className="block text-center border-2 border-black text-black px-4 py-2  hover:bg-black hover:text-white transition-all h-10 w-40 rounded-[30px]"
                    >
                      Go to Cart
                    </Link>
                    <Link
                      href="/checkout"
                      className="block text-center border-2 border-black text-black  px-4 py-2 hover:bg-black hover:text-white transition-all h-10 w-40 rounded-[30px]"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              )}
            </button>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden z-10">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
    </div>
  );
}
