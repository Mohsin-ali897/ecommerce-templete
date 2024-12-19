import React from "react";
import pic1 from "../assets/topPick1.png";
import pic2 from "../assets/topPick2.png";
import pic3 from "../assets/topPick3.png";
import pic4 from "../assets/topPick4.png";
import Image from "next/image";
export default function TopPickProductList() {
  let TopPicker = [
    {
      images: pic1,
      description: "Trenton modular sofa_3",
    },
    {
      images: pic2,
      description: "Granite dining table with dining chair",
    },
    {
      images: pic3,
      description: "Outdoor bar table and stool",
    },
    {
      images: pic4,
      description: "Plain console with teak mirror",
    },
  ];

  return (
    <div className="bg-white px-2 py-12">
      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TopPicker.map((elm, ind) => (
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
              RS. 25,000.00
            </h2>
          </div>
        ))}
      </div>
     
    </div>
  );
}
