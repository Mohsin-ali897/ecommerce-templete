// 'use client'
// import { useState } from "react";


// // type PagType ={ totalPages:Number|undefined; onPageChange:any }
// export default function Pagination({ totalPages = 3, onPageChange }){
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (page:any) => {
//     setCurrentPage(page);
//     if (onPageChange) {
//       onPageChange(page); // Callback for parent component
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       handlePageChange(currentPage + 1);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center space-x-2 my-10 gap-5">
//       {/* Page Numbers */}
//       {Array.from({ length: totalPages }, (_, index) => (
//         <button
//           key={index + 1}
//           onClick={() => handlePageChange(index + 1)}
//           className={`px-3 py-1 rounded ${
//             currentPage === index + 1
//               ? "bg-[#fbebb5] text-black"
//               : "bg-[#fff9e5] text-gray-700 hover:bg-[#fbebb5]"
//           }`}
//         >
//           {index + 1}
//         </button>
//       ))}

//       {/* Next Button */}
//       <button
//         onClick={handleNext}
//         disabled={currentPage === totalPages}
//         className={`px-3 py-1 rounded ${
//           currentPage === totalPages
//             ? "bg-[#fbebb5] text-black cursor-not-allowed"
//             : "bg-[#fff9e5] text-gray-700 hover:bg-[#fbebb5]"
//         }`}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

'use client';
import { useState } from "react";

type PaginationProps = {
  totalPages?: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({ totalPages = 3, onPageChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page); // Callback for parent component
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-10 gap-5">
      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === index + 1
              ? "bg-[#fbebb5] text-black"
              : "bg-[#fff9e5] text-gray-700 hover:bg-[#fbebb5]"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages
            ? "bg-[#fbebb5] text-black cursor-not-allowed"
            : "bg-[#fff9e5] text-gray-700 hover:bg-[#fbebb5]"
        }`}
      >
        Next
      </button>
    </div>
  );
}
