import React from "react";
import Image from "next/image";

type SectionProps = {
  title: string;
  content: string;
  className?: string; // Optional prop for additional class names
  backgroundImage: string; // Make this non-optional as you always need a background image
};

const Section = ({
  title,
  content,
  className,
  backgroundImage,
}: SectionProps) => (
  <div
    className={`relative shrink p-[2px] md:p-12 mb-[20px] h-[150px] w-[100px] md:h-[300px] md:w-[200px] border-white rounded-[24px] justify-center  ${className}`}
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h2 className="flex flexbox justify-center text-[10px] p-2 mt-4 font-bold text-red-700 mb-2">
      {title}
    </h2>
    <p className="text-slate-500 text-[5px] md:text-[10px] ml-4 w-[60px] md:w-[120px] md:-mx-2 ">
      {content}
    </p>
  </div>
);

const ThreeSections = () => {
  return (
    <div>
      <div
        id="contact"
        className=" gap-8 flex flex-col w-full h-[100vh] min-h-[1080px] bg-[url('/balloons')] md:bg-[url('/contactclowns.jpeg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Simplified Image Components for Debugging */}
        <div className="w-full flex justify-center px-12">
          <Image
            src="/burger.png"
            alt="WacDonalds"
            width={200}
            height={200}
            className="mt-[50px] mb-[50px]"
          />
          <div>a</div>
          <Image
            src="/burger.png"
            alt="WacDonalds"
            width={200}
            height={200}
            className="mt-[50px] mb-[50px]"
          />
          <Image
            src="/burger.png"
            alt="WacDonalds"
            width={200}
            height={200}
            className="mt-[50px] mb-[50px]"
          />
          <Image
            src="/burger.png"
            alt="WacDonalds"
            width={200}
            height={200}
            className="mt-[50px] mb-[50px]"
          />
          <Image
            src="/burger.png"
            alt="WacDonalds"
            width={200}
            height={200}
            className="mt-[50px] mb-[50px]"
          />
        </div>

        {/* Images visible on desktop but hidden on mobile */}

        {/* Image visible on mobile but hidden on desktop */}
        <div className="flex flex-row justify-center mt-[2px] mb-[10px]">
          <Image src="/wendeez2.png" alt="Scroll" width={200} height={200} />
        </div>
        <div className="flex flexbox justify-center">
          <div className="flex flexbox justify-center w-[200px] h-[250px] md:w-[400px] md:h-[950px] md:mb-[700px]">
            <div className=" ml-[2px] md:ml-[100px] md:[500px] text-xs md:text-2xl flex flexbox justify-center border-4 bg-red-600 rounded-xl px-[400px] py-[800px] text-yellow-300 flex-col">
              <div className="text-4xl w-[250px] flex flexbox justify-center  flex-col">
                <div className="hidden md:flex  flex-row justify-center mt-[100px] mr-[80px] mb-14">

                </div>
                Our Menu
              </div>
              <br></br>
              <br></br>
              <div className="text-[10px] md:text-[12px] ">
              <div className="ml-12 mt-4 text-[10px] md:text-[36px] tracking-wide leading-loose wendeez ">
              we kukin hear at wendeez

we mek a lot duble chez for dev tums
dev tums no homie for a whil 
den him met dolen              we mek a lot duble chez for dev tums
dev tums no homie for a whil 
den him met dolen


dolen cheng dev leif. 

<br></br>
on dei dev merri and him hav wendee.
<br></br>

<div className="text-[122px]">wendee tums wer burn. </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flexbox md:gap-12 flex-row md:flex-row justify-center w-full h-[100px] md:mt-[0px] mb-[20px] mt-[60px]"></div>
      </div>
    </div>
  );
};

export default ThreeSections;
