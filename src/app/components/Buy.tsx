import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UrlObject } from "url";
import "../globals.css";

const Buy = () => {        
    return (
      <><Image
        src="/statement.png"
        alt="Deejay"
        width={1600}
        height={1600}
        className="w-1/3 mt-4 mx-auto md:mt-[10px] md:mb-[10px] " /><div className="min-h-screen w-full bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: "url('/bg.png')" }}>
          <div className=""></div>
          <Image
            src="/Deejay.png"
            alt="Deejay"
            width={1200}
            height={1200}
            className="w-1/3 mx-auto mt-[200px] md:mt-[200px] md:mb-[200px] hover:scale-150 transition-all duration-700" />
        </div></>
    );
};

export default Buy;