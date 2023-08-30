import React from "react";
import logo from "../Assets/logo.png";
import Image from "next/image";
import { Facebook, Instagram, Xrp, Youtube } from "iconsax-react";

const Footer = () => {
  return (
    <>
      <div className="my-8 flex w-full">
        <div className="flex">
          <div className="flex justify-evenly w-[55%] items-start">
            <Image src={logo} alt="logo" width="" height="" />
            <ul>
              <li className="font-bold text-base text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
            </ul>
            <ul>
              <li className="font-bold text-base text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
            </ul>
            <ul>
              <li className="font-bold text-base text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
              <li className="text-[14px] text-[#ffffff]">Use Zenith</li>
            </ul>
          </div>
        </div>
        <div className="w-[45%]">
          <h4 className="font-bold text-base text-[#ffffff]">Subscribe</h4>
          <p className="text-[14px] my-8">
            Join our newsletter to stay up to date on features and releases
          </p>
          <div>
            <input type="text" placeholder="Enter your email" />
            <button className="p-4 border-2 border-[#ffffff] text-[#fff]">Subscribe</button>
          </div>
          <p className="text-[14px] my-8 text-[#fff]">
            By subscribing you agree with our <a className=" text-[#fff]">Privacy Policy</a> and provide
            consent to receive updates from our company
          </p>
        </div>
      </div>
      <hr className="w-full text-[2px]" />
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-evenly items-center w-[50%]">
          <p className=" text-[#fff]">© 2023 Relume. All rights reserved.</p>
          <a className=" text-[#fff]" href="#">Privacy Policy</a>
          <a className=" text-[#fff]" href="#">Terms of Service</a>
          <a className=" text-[#fff]" href="#">Cookie Settings</a>
        </div>
        <div className="flex justify-evenly items-center w-[50%]">
          <Facebook size="32" color="#ffffff" />
          <Xrp size="32" color="#ffffff" />
          <Instagram size="32" color="#ffffff" />
          <Youtube size="32" color="#ffffff" variant="Bold" />
        </div>
      </div>
    </>
  );
};

export default Footer;
