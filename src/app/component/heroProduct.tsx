
import Image from 'next/image';
import Link from 'next/link';
import pro1 from '../assets/heropro.png';
import pro2 from '../assets/Granite square side table 1 (1).png';

export default function HeroProduct() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-6 bg-white p-4 pr-[80px] md:pr-0 md:p-6 lg:p-10 md:py-[20px]">
      {/* First Product */}
      <div className="flex flex-col  items-center md:pl-[50px] text-center">
        <Image
          src={pro2}
          alt="Side Table"
          objectFit="cover"

          className="h-[200px] w-[300px]  md:h-[300px] md:w-[400px] "
        />

        
        <h2 className="text-lg md:text-2xl font-medium leading-[34px] md:leading-[54px] capitalize ">
          Side Table
        </h2>
        <Link
          href="../shoppage"
          className="pb-2 md:pb-3 hover:border-b-2 md:hover:border-b-2 hover:border-black "
        >
          View More
        </Link>
      </div>

      {/* Second Product */}
      <div className="flex flex-col items-center pr-6 md:pl-[50px] text-center">
        <Image
          src={pro1}
          alt="Side Table"
          className="h-[200px] w-[300px] md:h-[300px] md:w-[400px] object-cover"
        />
        <h2 className="text-lg md:text-2xl font-medium leading-[34px] md:leading-[54px] capitalize mt-4">
          Side Table
        </h2>
        <Link
          href="../shoppage"
          className="pb-2 md:pb-3 hover:border-b-2 md:hover:border-b-2 hover:border-black mt-2"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

