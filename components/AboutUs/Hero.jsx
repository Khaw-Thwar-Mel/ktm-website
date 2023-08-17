import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <div className="bg-black max-w-screen h-[400px] flex flex-col items-center justify-end py-4">
      <p className="text-[70px] font-bold text-[#525252]">About Us</p>
      <div className="flex space-x-1 text-white text-[18px] items-center justify-center">
        <p className="">Scroll Down</p>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Hero;
