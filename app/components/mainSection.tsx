import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className=" max-w-[1400px] m-auto grid grid-cols-1 lg:grid-cols-2">
      <div className=" flex flex-col gap-4 mt-32">
        <h1 className=" text-xl lg:ml-12 bg-sky-800 text-white w-[180px] rounded text-center">
          JENNA ORTEGA
        </h1>
        <h1 className=" text-6xl lg:ml-12 w-full lg:w-[460px] text-white bg-teal-300">
          HAY! I'M JENNA
        </h1>
        <h1 className=" text-6xl lg:ml-12 text-white font-bold ">
          I'M A DESIGNER
        </h1>
        <div className=" mt-6">
          <p className=" text-white text-xl lg:ml-12 ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
        </div>
        <div className=" flex flex-col lg:flex-row gap-10">
          <button className="  bg-blue-700 text-white lg:ml-12 p-2 h-12 rounded-full w-full lg:w-[150px]">
            GET IN TOUCH
          </button>
          <div>
            <div className="flex  gap-2 justify-center">
              <FaFacebookF className=" bg-blue-700 text-white h-10 p-2 border border-white rounded-full w-10" />
              <IoEarthOutline className=" bg-pink-400 text-white h-10 p-2 border border-white rounded-full w-10" />
              <FaLinkedinIn className=" bg-cyan-800 text-white h-10 p-2 border border-white rounded-full w-10" />
            </div>{" "}
          </div>
        </div>
      </div>
      <div>
        <Image src="/Image.png" height={900} width={900} alt="pic"></Image>
      </div>
      
    </div>
  );
}
