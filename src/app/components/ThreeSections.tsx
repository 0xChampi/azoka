"use client";
import { useRef, useEffect, forwardRef, useState } from "react";
import Image from "next/image";
interface CustomVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  playbackRate?: number;
}

const VideoComponent = forwardRef<HTMLVideoElement, CustomVideoProps>(
  (props, ref) => {
    useEffect(() => {
      if (ref && "current" in ref && ref.current) {
        ref.current.playbackRate = props.playbackRate || 1.0; // Ensure playbackRate is applied
      }
    }, [props.playbackRate, ref]);

    return <video {...props} ref={ref}></video>;
  }
);

VideoComponent.displayName = "VideoComponent";

const ThreeSections = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      className="flex flex-col items-center justify-center mt-0 wendeez md:text-stroke-3  shadow-black"
      id="aboot"
    >
      <div className="w-5/6 p-8 md:text-2xl border-4 border-blue-600 bg-blue-400/40 rounded-xl text-yellow-300 flex flex-col items-center">
        {/* Optional image section commented out */}
        {/* <div className="mb-8">
          <Image src={"/awendeze.png"} alt={""} width={1800} height={600} />
        </div> */}

        <div className="bg-pink-500/40 rounded-xl text-white font-extra-bold flex flex-col items-center w-full leading-loose">
          <div className="mb-12 border-b-8 border-black flex flex-col md:flex-row justify-between items-center w-full px-4">
            <div className="text-4xl md:text-[80px] text-[#b35dff] mt-12 mb-12 text-stroke-2">
              azoka IS HERE
            </div>
            <Image
              className="mb-1"
              src="/smiggie.png"
              alt="Scroll"
              width={100}
              height={200}
            />
          </div>
          <VideoComponent
            src="/vid.mp4"
            ref={videoRef}
            loop
            controls
            playbackRate={1}
            className="mb-12 border-8  rounded-2xl border-teal-500"
          />
          {/* <div className="flex flexbox flex-col px-2 mx-2 md:flex-row text-[23px]  md:text-[66px] text-center w-full px-4 text-blue-500 items-center mb-12">
           
            <Image src="/917.png" alt="Scroll" width={200} height={100} className="mx-2" />
            <Image src="/912.png" alt="Scroll" width={200} height={100} className="mx-2" />
            <Image src="/913.png" alt="Scroll" width={200} height={100} className="mx-2"/>
            <Image src="/914.png" alt="Scroll" width={200} height={100} className="mx-2"/>
      
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ThreeSections;
