import React from "react";
import Image from "next/image";
export default function Pic() {
  return (
    <div className="flex  flex-col mt-10 justify-center  lg:items-center ">
      <div className="flex justify-center">
        <Image
          className="rounded-full border border-solid   border-gray-200"
          src="/pic.jpg"
          width={100}
          height={100}
          alt="pic"
        ></Image>
      </div>{" "}
      <p className=" text-white w-full lg:w-[900px] mt-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro neque
        esse, est libero explicabo hic quasi atque odio quos, asperiores
        reprehenderit necessitatibus. Ullam eius aut ratione accusantium alias
        veniam in at quisquam quaerat ex perferendis, reprehenderit minus eos
        blanditiis dolor! Labore cumque voluptate enim voluptatibus numquam, hic
        esse suscipit quibusdam odit libero. Harum nulla quae quam mollitia
        similique iure aliquam aspernatur nostrum et expedita perferendis,
        cupiditate in dolor reprehenderit blanditiis optio voluptatem vitae
        corrupti accusamus
      </p>
      <h1 className="flex justify-center text-white text-2xl font-bold mt-6">
        PAMELA ANDERS
      </h1>
      <h1 className="flex justify-center text-gray-500 text-lg mt-6">
        COMPANY NAME
      </h1>
      <div className=" flex justify-center gap-2 mt-2">
        <div className="bg-blue-700 border border-white h-2 w-4 rounded-full"></div>
        <div className="bg-gray-900 border border-white h-2 w-2 rounded-full"></div>
        <div className="bg-gray-900  border border-white h-2 w-2 rounded-full"></div>
      </div>
    </div>
  );
}
