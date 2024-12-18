import Image from "next/image";

const Roadmap = () => {
  return (
    <div id="roadmap" className="relative myDiv border-black mt-[40px]">
      {/* Overlay Div */}
      <div className=""></div>

      {/* Content Div */}
      <div className="relative z-10">
        <h2 className="flex flexbox flex-row justify-center text-center text-yellow-200 py-4 text-2xl md:text-4xl mb-[30px] yonezawa ">
          <div style={{ textDecoration: "underline" }}>
            <Image
              src="/dubbin"
              layout="fixed"
              width={50}
              height={75}
              alt="Phase 1 Image"
              className="animate-pulse"
            />
          </div>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-[14px] mb-24 p-4 md:p-[12px] z-10">
        {/* Phases Section */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-4  md:px-[28px] md:gap-[4px] mb-24 p-4 md:p-[12px] md:mx-14  z-10">
          {/* Phase 1 */}
          <div className="flex flex-col items-center text-center gap-4 p-[80px] mt-[40px] md:mt-[20px]">
            <Image
              src="/smiggie"
              layout="responsive"
              width={10}
              height={15}
              alt="Phase 1 Image"
              className=""
            />
            <div className="text-yellow-200  yonezawa z-10 text-2xl mt-12">
              Specials <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="w-full md:w-[300px] text-xl font-thin text-yellow-400  z-10">
              Every day is a special day at WacDonalds, thanks to our
              ever-reliable ice cream machine and a lineup of unique offerings
              that change with the seasons. Our specials are crafted with the
              same love and creativity that has made our classic menu legendary,
              but with an extra twist that celebrates the here and now. From
              limited-time burgers to seasonal shakes, there&apos;s always
              something new and exciting to try. Keep an eye out for
              today&apos;s special—you won&apos;t want to miss it!
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-4  md:px-[28px] md:gap-[4px] mb-24 p-4 md:p-[12px] md:mx-14 z-10">
          {/* Phase 1 */}
          <div className="flex flex-col items-center text-center gap-4 p-[80px] mt-14">
            <Image
              src="/dubbin"
              layout="responsive"
              width={25}
              height={25}
              alt="Phase 1 Image"
              className="w-full "
            />
            <div className="text-yellow-200  yonezawa z-10 text-2xl">
              Sustainability: <br></br>
              <br></br> <br></br>
            </div>
            <div className="w-full md:w-[300px] text-xl font-thin text-yellow-400 z-10">
              At WacDonalds, we&apos;re not just flipping burgers; we&apos;re
              flipping the script on sustainability. We&apos;re committed to
              reducing our environmental footprint, one step at a time. From
              sourcing ingredients responsibly to minimizing waste and promoting
              recycling, we&apos;re dedicated to making a positive impact on the
              planet. Join us in our journey towards a more sustainable future,
              where delicious food and environmental stewardship go hand in
              hand.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
