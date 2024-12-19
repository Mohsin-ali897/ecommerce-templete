import React from 'react'
import Image from 'next/image';
import Offers from './offers';
import Pro1 from '../assets/product1.png';
import Pro2 from '../assets/product2.png';
import Pro3 from '../assets/product3.png';
import Pro4 from '../assets/product4.png';
import Pro5 from '../assets/product5.png';
import Pro6 from '../assets/product6.png';
import Pro7 from '../assets/product7.png';
import Pro8 from '../assets/product8.png';
import Pro9 from '../assets/product9.png';
import Pro10 from '../assets/product10.png';
import Pro11 from '../assets/product11.png';
import Pro12 from '../assets/product12.png';
import TopPickProductList from '../component/topPickProductList'
import Pagination from '../component/pagination'
export default function Shop_product() {
    let Shop_ProductList = [
        {
          images: Pro1,
          description: "Grain coffee table",
          price:'Rs. 15,000.00'
        },
        {
          images: Pro2,
          description: "Kent coffee table",
          price:'Rs. 225,000.00'
        },
        {
          images: Pro3,
          description: "Round coffee table_color 2",
          price:'Rs. 251,000.00'

        },
        {
          images: Pro4,
          description: "Reclaimed teak coffee table",
          price:'Rs. 25,200.00'

        },
        {
            images: Pro5,
            description: "Plain console_",
            price:'Rs. 258,200.00'

          },
          {
            images: Pro6,
            description: "Reclaimed teak Sideboard",
            price:'Rs. 20,000.00'

          },
          {
            images: Pro7,
            description: "SJP_0825 ",
            price:'Rs. 200,000.00'

          },
          {
            images: Pro8,
            description: "Bella chair and table",
            price:'Rs. 100,000.00'

          },
          {
            images: Pro9,
            description: "Granite square side table",
            price:'Rs. 258,800.00'

          },
          {
            images: Pro10,
            description: "Asgaard sofa",
            price:'Rs. 250,000.00'

          },
          {
            images: Pro11,
            description: "Maya sofa three seater",
            price:'Rs. 115,000.00'

          },
          {
            images: Pro12,
            description: "Outdoor sofa set",
            price:'Rs. 244,000.00'
          },
      ];
  return (
    
    <div>
        <div className=''></div>
        <TopPickProductList/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Shop_ProductList.map((elm, ind) => (
                  <div
                    key={ind}
                    className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    {/* Image */}
                    <Image
                      src={elm.images}
                      alt="product_Image"
                      className="h-[150px] w-[200px] md:h-[200px] md:w-[250px] object-contain"
                    />
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-700 font-medium text-center mt-4">
                      {elm.description}
                    </p>
                    {/* Price */}
                    <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-2">
                      {elm.price}
                    </h2>
                  </div>
                ))}
              </div>
              <Pagination/>
              <Offers/>


    </div>
  )
}
