import React from 'react';
import Image from 'next/image';

const Wendee = () => {
  return (
    
    <div className="flex flex-col items-center justify-center smt-[0px] mb-12 " id="donate">
      <Image
        src="/916.png"
        width={450}
        height={200}
        alt="wendeez"
        priority
        className="rounded-xl"
      />
      {/* Centered icons */}
      <div className="flex flex-row  justify-center mt-[40px] mb-12">
        <a href="https://x.com/jewsdid911onsol" target="_blank" rel="noopener noreferrer">
          <Image
            src="/Xshadows.png"
            width={60}
            height={50}
            alt="X Mark"
          />
        </a>
        <a href="https://t.me/+Z5rFzSeyN2AzZGYx" target="_blank" rel="noopener noreferrer">
          <Image
            src="/tgshadow.png"
            width={60}
            height={50}
            alt="Telegram Logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Wendee;
