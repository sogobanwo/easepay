import Image from "next/image";
import React from "react";
import logo from "../Assets/logo.png"
import { ArrowDown2 } from "iconsax-react";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center">
        <Image src={logo} alt="logo" />
        <p className="text-base mx-[16px] text-[#ffffff]">Products</p>
        <p className="text-base mx-[16px] text-[#ffffff]">Solution</p>
        <p className="text-base mx-[16px] text-[#ffffff]">Resources</p>
        <p className="text-base mx-[16px] flex gap-2 items-center text-[#ffffff]" >Company <ArrowDown2 size="16" color="#ffffff"/></p>
      </div>
      <p className="text-base m-[16px] border-2 p-3 text-[#ffffff] border-[#ffffff]">Contact Us</p>
    </div>
  );
};

export default Header;