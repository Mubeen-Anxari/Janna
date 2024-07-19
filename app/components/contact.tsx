import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
export default function Contact() {
  return (
    <div className="">
      <div className="    max-w-[1200px] m-auto bg-cyan-900  mt-20 flex gap-10 p-4 rounded-lg flex-col-reverse lg:flex-row">
        <div className="">
          <div className="flex justify-center">
            <Image
              className="hidden lg:block "
              src="/contact.png"
              height={400}
              width={400}
              alt="pic"
            ></Image>
          </div>
          <div className=" flex flex-col justify-center items-center lg:items-start mt-10">
            <h1 className="  text-gray-500">WRITE AN E-MAIL</h1>
            <h1 className=" text-white font-bold text-2xl">
              sample@domain.com
            </h1>
            <h1 className="  text-gray-500 mt-6">WRITE AN E-MAIL</h1>
            <h1 className=" text-white font-bold text-2xl mt-2">
              +044 9696 9696 3636
            </h1>
            <div className="flex  gap-4 mt-4">
              <FaFacebookF className=" bg-blue-700 text-white h-10 p-2 border border-white rounded-full w-10" />
              <IoEarthOutline className=" bg-pink-400 text-white h-10 p-2 border border-white rounded-full w-10" />
              <FaLinkedinIn className=" bg-cyan-800 text-white h-10 p-2 border border-white rounded-full w-10" />
            </div>{" "}
          </div>
        </div>
        <div>
          <div className=" ">
            <h1 className=" text-5xl font-bold text-white">
              let's Discuss Your Project
            </h1>
          </div>
          <p className=" text-white w-full lg:w-[500px] mt-4">
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <div className=" flex flex-col lg:flex-row  gap-4">
            <div className=" flex flex-col flex-1 lg:mt-20">
              <h1 className=" text-white ">Your Name</h1>
              <input
                className="bg-transparent mt-2 border  text-gray-900 p-3 border-white rounded-lg"
                type="text"
                placeholder="Name *"
              />
            </div>
            <div className=" flex flex-col flex-1  lg:mt-20">
              <h1 className=" text-white ">Your Email</h1>
              <input
                className="bg-transparent mt-2 border text-gray-900 p-3 border-white rounded-lg"
                type="text"
                placeholder="Email *"
              />
            </div>
          </div>
          <div className=" flex flex-col flex-1">
            <h1 className="text-white mt-6 ">SUBJECT</h1>
            <input
              className="bg-transparent mt-2 border  text-gray-900 p-3 border-white  rounded-lg"
              type="text"
              placeholder="SUBBJECT *"
            />
          </div>
          <div className="flex flex-col flex-1">
            <h1 className="text-white mt-6 ">Message</h1>
            <textarea
              className="bg-transparent mt-2 border  text-gray-900 p-3 border-white  rounded-lg"
              placeholder="YOUR MESSAGE *"
              rows={3}
            >
              Message
            </textarea>
          </div>
          <div className=" ">
            <button className="  bg-blue-700 w-full text-white mt-4 p-2 rounded-full h-12 font-bold   ">
              SEND MESSAGE
            </button>
          </div>{" "}
        </div>
      </div>
      <hr className=" mt-6" />
      <h1 className="text-gray-500 mt-4 flex justify-center">
        © 2023 copyright all right reserved
      </h1>
    </div>
  );
}
