import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ }) => {
  return (
    <div className="sticky hidden flex-grow top-0 left-0 p-2 z-20 bg-[#239e40] w-full shadow-2xl shadow-black font-black px-2 border-b-4 border-t-8 border-black md:flex">
      <div className="flex justify-center items-center w-full">
      <Image src={"/magamanlogo.png"} alt={""} width={60} height={60} className="mr-[32px]"/>
        <div className="flex flexbox flex-row justify-center space-x-12 md:space-x-12 mr-6 text-[14px] md:text-[14px]">
          {/* Directly applying hover effects to elements inside Link */}
          <Link href="#home">
            <span className="cursor-pointer hover:text-red-500">the forest</span>
          </Link>
          <Link href="#oldregalia">
            <span className="cursor-pointer hover:text-green-500">tiktok</span>
          </Link>
          <Link href="#wacd">
            <span className="cursor-pointer hover:text-green-500">who is tiburcio</span>
          </Link>
          <Link href="#wacd">
            <span className="cursor-pointer hover:text-green-500">forest spirits</span>
          </Link>
          {/* <Link href="#donate">
            <span className="cursor-pointer hover:text-blue-500">
              donate
            </span>
          </Link> */}
          {/* <Link href="#donatez">
            <span className="cursor-pointer hover:text-yellow-500">
              truth
            </span>
          </Link> */}
          {/* <Link href="#tba">
            <span className="cursor-pointer hover:text-purple-500">
              wen
            </span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
