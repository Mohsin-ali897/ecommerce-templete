// 'use client'
// import React from 'react'
// import Navbar from '@/app/component/navbar';
// import Footer from '@/app/component/footer';
// import Offers from '@/app/component/offers';
// import Link from 'next/link';
// import Pagination from '@/app/component/pagination';
// import Img1 from '@/app/assets/blogImage1.png'
// import Img2 from '@/app/assets/blogImage2.png'
// import Img3 from '@/app/assets/blogImage3.png'

// //! recent blog images
// import recentBlogImg1 from '@/app/assets/mainblog1.png' 
// import recentBlogImg2 from '@/app/assets/mainblog2.png' 
// import recentBlogImg3 from '@/app/assets/mainblog3.png' 
// import recentBlogImg4 from '@/app/assets/mainblog4.png' 
// //! import icons 
// import { FaCalendar } from "react-icons/fa";
// import { FaTag } from "react-icons/fa6";
// import { FaUserAlt } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import Image from "next/image";
// import PageIcon from '@/app/assets/cartIcon.png'
// import { IoIosArrowForward } from 'react-icons/io';
// import AccountBanner from '@/app/assets/accountBanner.png'
// export default function Blog() {
//   let blogData = [
//     {
//       id:1,
//       image: Img1,
//       Blogname:'Going all-in with millennial design',
//       intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
//     },
//     {
//       id:2,
//       image: Img2,
//       Blogname:'Exploring new ways of decorating',
//       intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
//     },
//     {
//       id:3,
//       image: Img3,
//       Blogname:'Handmade pieces that took time to make',
//       intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
//     },
//   ]
//   let RecentBlogCard=[
//     { id:1
//       intro:'Exploring new ways of decorating',
//       pic:recentBlogImg1
//     },
//     {
//       id:2,
//       intro:'Handmade pieces that took time to make',
//       pic:recentBlogImg2
//     },
//     {
//       id:3,
//       intro:'Modern home in Milan',
//       pic:recentBlogImg3
//     },
//     {
//       id:4,
//       intro:'Colorful office redesign',
//       pic:recentBlogImg4
//     }
//   ]
//   return (
//     <div>
//         <Navbar/>
//         {/* Banner of  */}
//         <div className="relative h-[400px] flex justify-center items-center flex-col">
//         <Image
//           src={AccountBanner}
//           alt="Cart banner"
//           layout="fill"
//           objectFit="cover"
//           className="absolute top-0 left-0"
//         />
//         <Image src={PageIcon} alt="shop icon" className="m-0" />
//         <h1 className="text-4xl font-normal mb-2 text-black">Blog</h1>
//         <p className="text-[20px]">
//           Home <IoIosArrowForward className="inline" /> Blog
//         </p>
//       </div>
//       {/* blog page */}
//         <div className='p-3 flex items-start justify-center gap-32'>
          
//           <div className='h-auto w-[600px]'>
//             {blogData.map((Elm, )=>{
//               return(
//                   <div className='py-5' key={Elm.id}>
//                     <div className='h-[400px] w-[660px]'>
//                         <Image
//                         src={Elm.image}
//                         alt='blog image'
//                         objectFit="cover"
//                         />
//                         <div className='mt-2 mb-4 pb-4 flex items-center gap-12'>
//                           <p className='text-[#9f9f9f]'> <span className='mr-2'>< FaUserAlt  className='inline ' /></span>admin</p>
//                         <p className='text-[#9f9f9f]'><span className='mr-2'>< FaCalendar  className='inline '/></span>14 Oct 2022</p>
//                         <p className='text-[#9f9f9f]'><span className='mr-2'>< FaTag  className='inline' /></span>Wood</p></div>
//                     </div>
//                     <h3 className='text-[23px] font-medium mt-9 mb-3'>{Elm.Blogname}</h3>
//                     <p className='text-[#9f9f9f]'>{Elm.intro}</p>
//                     <Link className='pb-2 mt-5 text-[16px] font-normal border-b-2 border-black inline-block' href='#'>Read More</Link>
//                   </div>
//               )
//             })}
//           </div>
//           <div className='py-5'>
//           <div className="relative">
//   <input 
//     type="text" 
//     className="h-10 w-60 pl-3 pr-10 rounded-xl border-[1px] border-black" 
//   />
//   <label htmlFor="">
//     <Link href="#">
//       <IoMdSearch 
//         className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl md:text-2xl text-gray-500" 
//       />
//     </Link>
//   </label>
// </div>
// {/* Categories */}
// <div className='mb-[66px]'>
//   <h3 className='py-4'>Categories</h3>
//   <div className='flex justify-between items-center text-[#9f9f9f] py-4'>
//     <p>Crafts</p>
//     <p>2</p>
//   </div>
//   <div className='flex justify-between items-center text-[#9f9f9f] py-4'>
//     <p>Design</p>
//     <p>8</p>
//   </div>
//   <div className='flex justify-between items-center text-[#9f9f9f] py-4'>
//     <p>Handmade</p>
//     <p>7</p>
//   </div>
//   <div className='flex justify-between items-center text-[#9f9f9f] py-4'>
//     <p>Interior</p>
//     <p>1</p>
//   </div>
//   <div className='flex justify-between items-center text-[#9f9f9f] py-4'>
//     <p>Wood</p>
//     <p>6</p>
//   </div>
// </div>
// <div>
//   <div>
//   <h4 className="text-[22px] font-medium mb-4">Recent Posts</h4>
//   {/* Recent posts */}
//   <div className="w-[250px] flex flex-col gap-7">
//     {RecentBlogCard.map((Elm) => {
//       return (
//         <div className="flex items-center gap-3 h-auto my-3">
//           {/* Image Container */}
//           <div className="h-24 w-24 flex-shrink-0">
//             <Image
//               src={Elm.pic}
//               alt="Post Image"
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//           {/* Text Content */}
//           <div className="flex flex-col justify-center flex-1">
//             <p className="text-sm font-medium text-gray-800">{Elm.intro}</p>
//             <p className="text-xs font-normal text-[#9f9f9f] mt-1">
//               03 Aug 2022
//             </p>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>

// </div>

//           </div>
//         </div>
//         <Pagination/>
//          <div className="mb-3 md:my-7 py-3 md:py-7 ">
//                   < Offers / >
//                   </div>
//                   <div >
//                     <Footer/>
//                   </div>
                
//           </div>
    
//   )
// }
//! first
// 'use client'
// import React from 'react'
// import Navbar from '@/app/component/navbar';
// import Footer from '@/app/component/footer';
// import Offers from '@/app/component/offers';
// import Link from 'next/link';
// import Pagination from '@/app/component/pagination';
// import Img1 from '@/app/assets/blogImage1.png';
// import Img2 from '@/app/assets/blogImage2.png';
// import Img3 from '@/app/assets/blogImage3.png';

// //! recent blog images
// import recentBlogImg1 from '@/app/assets/mainblog1.png'; 
// import recentBlogImg2 from '@/app/assets/mainblog2.png'; 
// import recentBlogImg3 from '@/app/assets/mainblog3.png'; 
// import recentBlogImg4 from '@/app/assets/mainblog4.png'; 
// //! import icons 
// import { FaCalendar } from "react-icons/fa";
// import { FaTag } from "react-icons/fa6";
// import { FaUserAlt } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import Image from "next/image";
// import PageIcon from '@/app/assets/cartIcon.png';
// import { IoIosArrowForward } from 'react-icons/io';
// import AccountBanner from '@/app/assets/accountBanner.png';

// export default function Blog() {
//   let blogData = [
//     {
//       id:1,
//       image: Img1,
//       Blogname:'Going all-in with millennial design',
//       intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
//     },
//     {
//       id:2,
//       image: Img2,
//       Blogname:'Exploring new ways of decorating',
//       intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
//     },
//     {
//       id:3,
//       image: Img3,
//       Blogname:'Handmade pieces that took time to make',
//       intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
//     },
//   ]
//   let RecentBlogCard=[
//     {
//       intro:'Exploring new ways of decorating',
//       pic:recentBlogImg1
//     },
//     {
//       intro:'Handmade pieces that took time to make',
//       pic:recentBlogImg2
//     },
//     {
//       intro:'Modern home in Milan',
//       pic:recentBlogImg3
//     },
//     {
//       intro:'Colorful office redesign',
//       pic:recentBlogImg4
//     }
//   ]
//   return (
//     <div>
//         <Navbar/>
//         {/* Banner of  */}
//         <div className="relative h-[400px] w-full flex justify-center items-center flex-col">
//   <Image
//     src={AccountBanner}
//     alt="shop banner"
//     layout="fill"
//     objectFit="cover"
//     className="absolute top-0 left-0 "
//   />
//     <Image
//     src={PageIcon}
//     alt="shop icon"
//     className='m-0'
//     />
//     <h1 className='text-4xl font-normal mb-2'>Shop</h1>
//     <p className='text-[20px]'>Home <IoIosArrowForward className='inline' /> Blog</p>
// </div>
//       {/* blog page */}
//         <div className='p-3 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-32'>
//           <div className='h-auto w-full md:w-[600px]'>
//             {blogData.map((Elm)=>{
//               return(
//                   <div className='py-5 group' key={Elm.id}>
//                     <div className='h-[300px] md:h-[400px] w-full md:w-[660px] overflow-hidden rounded-lg'>
//                         <Image
//                         src={Elm.image}
//                         alt='blog image'
//                         objectFit="cover"
//                         className="w-full h-full group-hover:scale-110 transition-transform duration-300"
//                         />
//                     </div>
//                     <div className='mt-2 mb-4 pb-4 flex items-center gap-4 md:gap-12 text-sm md:text-base'>
//                       <p className='text-[#9f9f9f]'> <span className='mr-2'>< FaUserAlt  className='inline ' /></span>admin</p>
//                       <p className='text-[#9f9f9f]'><span className='mr-2'>< FaCalendar  className='inline '/></span>14 Oct 2022</p>
//                       <p className='text-[#9f9f9f]'><span className='mr-2'>< FaTag  className='inline' /></span>Wood</p>
//                     </div>
//                     <h3 className='text-lg md:text-[23px] font-medium mt-4 md:mt-9 mb-3 group-hover:text-blue-600 transition-colors'>{Elm.Blogname}</h3>
//                     <p className='text-[#9f9f9f] text-sm md:text-base'>{Elm.intro}</p>
//                     <Link className='pb-2 mt-5 text-sm md:text-[16px] font-normal border-b-2 border-black inline-block hover:border-blue-600 transition-colors' href='#'>Read More</Link>
//                   </div>
//               )
//             })}
//           </div>
//           <div className='py-5 w-full md:w-auto'>
//             <div className="relative mb-8">
//               <input 
//                 type="text" 
//                 className="h-10 w-full md:w-60 pl-3 pr-10 rounded-xl border-[1px] border-black" 
//               />
//               <label htmlFor="">
//                 <Link href="#">
//                   <IoMdSearch 
//                     className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl md:text-2xl text-gray-500" 
//                   />
//                 </Link>
//               </label>
//             </div>
//             {/* Categories */}
//             <div className='mb-[66px]'>
//               <h3 className='py-4'>Categories</h3>
//               {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, index) => (
//                 <div key={index} className='flex justify-between items-center text-[#9f9f9f] py-4'>
//                   <p>{category}</p>
//                   <p>{Math.floor(Math.random()*9)}</p>
//                 </div>
//               ))}
//             </div>
//             {/* Recent Posts */}
//             <div>
//               <h4 className="text-[22px] font-medium mb-4">Recent Posts</h4>
//               <div className="w-full md:w-[250px] flex flex-col gap-7">
//                 {RecentBlogCard.map((Elm, index) => {
//                   return (
//                     <div key={index} className="flex items-center gap-3 h-auto my-3 hover:bg-gray-100 p-3 rounded-lg transition-colors">
//                       {/* Image Container */}
//                       <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
//                         <Image
//                           src={Elm.pic}
//                           alt="Post Image"
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       {/* Text Content */}
//                       <div className="flex flex-col justify-center flex-1">
//                         <p className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">{Elm.intro}</p>
//                         <p className="text-xs font-normal text-[#9f9f9f] mt-1">
//                           03 Aug 2022
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//         <Pagination/>
//         <div className="mb-3 md:my-7 py-3 md:py-7">
//           <Offers />
//         </div>
//         <div>
//           <Footer/>
//         </div>
//     </div>
//   )
// }
//! second
// 'use client'
// import React from 'react'
// import Navbar from '@/app/component/navbar';
// import Footer from '@/app/component/footer';
// import Offers from '@/app/component/offers';
// import Link from 'next/link';
// import Pagination from '@/app/component/pagination';
// import Img1 from '@/app/assets/blogImage1.png';
// import Img2 from '@/app/assets/blogImage2.png';
// import Img3 from '@/app/assets/blogImage3.png';

// //! recent blog images
// import recentBlogImg1 from '@/app/assets/mainblog1.png'; 
// import recentBlogImg2 from '@/app/assets/mainblog2.png'; 
// import recentBlogImg3 from '@/app/assets/mainblog3.png'; 
// import recentBlogImg4 from '@/app/assets/mainblog4.png'; 
// //! import icons 
// import { FaCalendar } from "react-icons/fa";
// import { FaTag } from "react-icons/fa6";
// import { FaUserAlt } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import Image from "next/image";
// import PageIcon from '@/app/assets/cartIcon.png';
// import { IoIosArrowForward } from 'react-icons/io';
// import AccountBanner from '@/app/assets/accountBanner.png';

// export default function Blog() {
//   let blogData = [
//     {
//       id:1,
//       image: Img1,
//       Blogname:'Going all-in with millennial design',
//       intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
//     },
//     {
//       id:2,
//       image: Img2,
//       Blogname:'Exploring new ways of decorating',
//       intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
//     },
//     {
//       id:3,
//       image: Img3,
//       Blogname:'Handmade pieces that took time to make',
//       intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
//     },
//   ]
//   let RecentBlogCard=[
//     {
//       intro:'Exploring new ways of decorating',
//       pic:recentBlogImg1
//     },
//     {
//       intro:'Handmade pieces that took time to make',
//       pic:recentBlogImg2
//     },
//     {
//       intro:'Modern home in Milan',
//       pic:recentBlogImg3
//     },
//     {
//       intro:'Colorful office redesign',
//       pic:recentBlogImg4
//     }
//   ]
//   return (
//     <div>
//         <Navbar/>
//         {/* Banner */}
//         <div className="relative h-[300px] md:h-[400px] w-full flex justify-center items-center flex-col">
//           <Image
//             src={AccountBanner}
//             alt="shop banner"
//             layout="fill"
//             objectFit="cover"
//             className="absolute top-0 left-0"
//           />
//           <Image src={PageIcon} alt="shop icon" className='m-0' />
//           <h1 className='text-2xl md:text-4xl font-normal mb-2'>Blog</h1>
//           <p className='text-sm md:text-[20px]'>Home <IoIosArrowForward className='inline' /> Blog</p>
//         </div>

//         {/* Blog page */}
//         <div className='p-3 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16'>
//           <div className='h-auto w-full md:w-[600px]'>
//             {blogData.map((Elm) => (
//               <div className='py-5 group' key={Elm.id}>
//                 <div className='h-[250px] md:h-[400px] w-full md:w-[660px] overflow-hidden rounded-lg'>
//                   <Image
//                     src={Elm.image}
//                     alt='blog image'
//                     objectFit="cover"
//                     className="w-full h-full group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className='mt-2 mb-4 pb-4 flex items-center gap-4 md:gap-12 text-sm md:text-base'>
//                   <p className='text-[#9f9f9f]'> <FaUserAlt className='inline mr-2' /> admin</p>
//                   <p className='text-[#9f9f9f]'><FaCalendar className='inline mr-2' />14 Oct 2022</p>
//                   <p className='text-[#9f9f9f]'><FaTag className='inline mr-2' /> Wood</p>
//                 </div>
//                 <h3 className='text-lg md:text-[23px] font-medium mt-4 md:mt-9 mb-3 group-hover:text-blue-600 transition-colors'>{Elm.Blogname}</h3>
//                 <p className='text-[#9f9f9f] text-sm md:text-base'>{Elm.intro}</p>
//                 <Link className='pb-2 mt-5 text-sm md:text-[16px] font-normal border-b-2 border-black inline-block hover:border-blue-600 transition-colors' href='#'>Read More</Link>
//               </div>
//             ))}
//           </div>

//           <div className='py-5 w-full md:w-auto'>
//             <div className="relative mb-8">
//               <input 
//                 type="text" 
//                 className="h-10 w-full md:w-60 pl-3 pr-10 rounded-xl border-[1px] border-black" 
//               />
//               <label>
//                 <Link href="#">
//                   <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl md:text-2xl text-gray-500" />
//                 </Link>
//               </label>
//             </div>

//             {/* Categories */}
//             <div className='mb-[66px]'>
//               <h3 className='py-4'>Categories</h3>
//               {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, index) => (
//                 <div key={index} className='flex justify-between items-center text-[#9f9f9f] py-4'>
//                   <p>{category}</p>
//                   <p>{Math.floor(Math.random() * 10)}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Recent Posts */}
//             <div>
//               <h4 className="text-[22px] font-medium mb-4">Recent Posts</h4>
//               <div className="w-full md:w-[250px] flex flex-col gap-7">
//                 {RecentBlogCard.map((Elm, index) => (
//                   <div key={index} className="flex items-center gap-3 h-auto my-3 hover:bg-gray-100 p-3 rounded-lg transition-colors">
//                     <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
//                       <Image src={Elm.pic} alt="Post Image" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="flex flex-col justify-center flex-1">
//                       <p className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">{Elm.intro}</p>
//                       <p className="text-xs font-normal text-[#9f9f9f] mt-1">03 Aug 2022</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <Pagination />
//         <div className="mb-3 md:my-7 py-3 md:py-7">
//           <Offers />
//         </div>
//         <Footer />
//     </div>
//   )
// }
//! third
'use client'
import React from 'react';
import Navbar from '@/app/component/navbar';
import Footer from '@/app/component/footer';
import Offers from '@/app/component/offers';
import Link from 'next/link';
import Pagination from '@/app/component/pagination';
import Img1 from '@/app/assets/blogImage1.png';
import Img2 from '@/app/assets/blogImage2.png';
import Img3 from '@/app/assets/blogImage3.png';
import recentBlogImg1 from '@/app/assets/mainblog1.png'; 
import recentBlogImg2 from '@/app/assets/mainblog2.png'; 
import recentBlogImg3 from '@/app/assets/mainblog3.png'; 
import recentBlogImg4 from '@/app/assets/mainblog4.png'; 
import { FaCalendar, FaUserAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Image from "next/image";
import PageIcon from '@/app/assets/cartIcon.png';
import { IoIosArrowForward } from 'react-icons/io';
import AccountBanner from '@/app/assets/accountBanner.png';

export default function Blog() {
  const blogData = [
    {
      id: 1,
      image: Img1,
      Blogname: 'Going all-in with millennial design',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: Img2,
      Blogname: 'Exploring new ways of decorating',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 3,
      image: Img3,
      Blogname: 'Handmade pieces that took time to make',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
  ];

  const RecentBlogCard = [
    { intro: 'Exploring new ways of decorating', pic: recentBlogImg1 },
    { intro: 'Handmade pieces that took time to make', pic: recentBlogImg2 },
    { intro: 'Modern home in Milan', pic: recentBlogImg3 },
    { intro: 'Colorful office redesign', pic: recentBlogImg4 },
  ];

  return (
    <div className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex justify-center items-center">
        <Image
          src={AccountBanner}
          alt="Shop Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative text-center z-10">
          <Image src={PageIcon} alt="Shop Icon" className="m-auto mb-4" />
          <h1 className="text-4xl font-semibold text-black">Blog</h1>
          <p className="text-lg mt-2 text-gray-600">
            Home <IoIosArrowForward className="inline" /> Blog
          </p>
        </div>
      </div>
      
      {/* Blog Section */}
      <div className="px-4 lg:px-16 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Main Blog Content */}
        <div className="w-full lg:w-2/3">
          {blogData.map((blog) => (
            <div key={blog.id} className="mb-8 group">
              <div className="h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src={blog.image}
                  alt="Blog Image"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 flex items-center gap-6 text-gray-600 text-sm">
                <p>
                  <FaUserAlt className="inline mr-2" />
                  admin
                </p>
                <p>
                  <FaCalendar className="inline mr-2" />
                  14 Oct 2022
                </p>
                <p>
                  <FaTag className="inline mr-2" />
                  Wood
                </p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black group-hover:text-blue-600 transition-colors">
                {blog.Blogname}
              </h3>
              <p className="mt-2 text-gray-700">{blog.intro}</p>
              <Link href="#" className="mt-4 pb-2 inline-block text-black border-b-2 border-black">
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          {/* Search */}
          <div className="relative mb-8">
            <input
              type="text"
              className="w-full h-10 pl-4 pr-10 rounded-lg border border-gray-300"
              placeholder="Search..."
            />
            <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, index) => (
              <div key={index} className="flex justify-between py-2 text-gray-600">
                <p>{category}</p>
                <p>{Math.floor(Math.random() * 10)}</p>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
            <div className="space-y-4">
              {RecentBlogCard.map((post, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-lg">
                    <Image
                      src={post.pic}
                      alt="Post Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black hover:text-blue-600">
                      {post.intro}
                    </p>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Pagination />
      <Offers />
      <Footer />
    </div>
  );
}
