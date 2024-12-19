"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Panel = () => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  useEffect(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.playbackRate = 0.4;
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.playbackRate = 0.4;
    }
  }, []);

  const [songs, setSongs] = useState([
    { title: "Song One", url: "./bobo.mp3", length: 240, progress: 0 },
  ]);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isplaying, setisplaying] = useState(false);
  const audioElem = useRef<HTMLAudioElement>(null);

  return (
    <div className="relative w-screen h-screen overflow-hidden" id="home">
      <video
        ref={desktopVideoRef}
        src="/landing.mp4"
        autoPlay
        loop
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          isDesktopOrLaptop ? 'block' : 'hidden'
        }`}
      />
      <video
        ref={mobileVideoRef}
        src="/mobile.mp4"
        autoPlay
        loop
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          isDesktopOrLaptop ? 'hidden' : 'block'
        }`}
      />
      <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-[5vw] md:text-[2vw] text-[#59ff37]/[50%] tracking-wide font-extrabold">
            {/* Optional heading text here */}
          </div>
          <div className="text-[10vw] md:text-[4vw] text-white tracking-widest font-extrabold">
            <Image 
          src="/logo.png" 
              width={880} 
              height={1000} 
              alt="A" 
              className="mx-4 ml-[92px] md:ml-[50px]" 
            />
          </div>
          <div className="flex justify-center mt-12">
            <a 
              href="https://X.com/gosutoazoka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mx-4"
            >
              <Image src="/X.png" width={80} height={80} alt="Twitter Icon" />
            </a>
            <a 
              href="https://t.me/iloveazoka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mx-4"
            >
              <Image src="/telegram.png" width={80} height={80} alt="Telegram Icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 w-full text-center text-orange-500 z-30">
      </div>
    </div>
  );
};

export default Panel;