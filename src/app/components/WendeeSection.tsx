import React from "react";
import Wendee from "./Wendee";
import Wendeez from "./Wendeez";

const WendeeSection = () => {
  return (
    <div className="flex items-center justify-center "> {/* Ensure full vertical and horizontal centering on the page */}
      <div className="shadow-2xl z-0 border-4 border-teal-600 rounded-3xl bg-fuchsia-200/80 text-center w-5/6 mb-12"> {/* Center the container */}
        <div className="flex flex-col md:flex-row justify-center items-center p-12"> {/* Center the Wendee and Wendeez components */}
          <Wendee />
          <Wendeez />
        </div>
        <div className="mt-[720px] text-4xl md:text-4xl mt-[100px] mb-12 text-black" id="donatez">
    <br>
    </br>
    
    <a href="https://birdeye.so/token/Grv3euomBTtHFSe27BoHTqd1vhV2Gxui9K3SPwKUqpQQ?chain=solana" target="_blank" rel="noopener noreferrer">BUY ON BIRDEYE</a>
    
    <br>
    </br>
</div>


         <div className="text-xwendeez text-black mb-12">  <br />-anti defamation defamation league<br /> </div>
        </div>
      </div>
 
  );
};

export default WendeeSection;
