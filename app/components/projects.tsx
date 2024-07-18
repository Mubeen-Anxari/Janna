import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  return (
    <div>
      <div className="lg:ml-44 mt-20">
        <h1 className="bg-cyan-700 w-[150px] text-center rounded-lg text-2xl text-white">
          MY WORK
        </h1>
        <h1 className=" text-5xl mt-4 font-bold text-white">RECENT WORK</h1>
        <div className=" flex flex-col lg:flex-row gap-2">
          <div className=" text-center bg-white p-2 w-[420px] rounded-xl">
            <Card className="py-4 w-full lg:w-[400px] h-[420px]">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/card1.jpg"
                  width={430}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-xl">Website desing</h4>
                <div className="flex gap-[120px]">
                  <p className="text-gray-400 mt-2 font-mono">
                    Web Design,App Design
                  </p>
                  <FaArrowRightLong className=" bg-blue-900 text-white border border-black h-10 p-2 rounded-full w-10" />
                </div>
              </CardHeader>
            </Card>
          </div>
          <div className=" text-center bg-white p-2 w-[420px] rounded-xl">
            <Card className="py-4 w-full lg:w-[400px] h-[420px]">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/card2.jpg"
                  width={430}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-xl">Website desing</h4>
                <div className="flex gap-[120px]">
                  <p className="text-gray-400 mt-2 font-mono">
                    Web Design,App Design
                  </p>
                  <FaArrowRightLong className=" bg-blue-900 text-white border border-black h-10 p-2 rounded-full w-10" />
                </div>{" "}
              </CardHeader>
            </Card>
          </div>
          <div className=" text-center bg-white p-2 w-[420px] rounded-xl">
            <Card className="py-4 w-full lg:w-[400px] h-[420px]">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/card3.jpg"
                  width={430}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-xl">Website desing</h4>
                <div className="flex gap-[120px]">
                  <p className="text-gray-400 mt-2 font-mono">
                    Web Design,App Design
                  </p>
                  <FaArrowRightLong className=" bg-blue-900 text-white border border-black h-10 p-2 rounded-full w-10" />
                </div>{" "}
              </CardHeader>
            </Card>
          </div>
          <div className=" text-center bg-white p-2 w-[420px] rounded-xl">
            <Card className="py-4 w-full lg:w-[400px] h-[420px]">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/card4.jpg"
                  width={430}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-xl">Website desing</h4>
                <div className="flex gap-[120px]">
                  <p className="text-gray-400 mt-2 font-mono">
                    Web Design,App Design
                  </p>
                  <FaArrowRightLong className=" bg-blue-900 text-white border border-black h-10 p-2 rounded-full w-10" />
                </div>{" "}
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className=" mt-4 flex gap-2 justify-center">
            <div className=" bg-blue-600 h-2 w-4 rounded-full"></div>
            <div className=" bg-white h-2 w-4 rounded-full"></div>
            <div className=" bg-white h-2 w-4 rounded-full"></div>
            <div className=" bg-white h-2 w-4 rounded-full"></div>
            <div className=" bg-white h-2 w-4 rounded-full"></div>
            <div className=" bg-white h-2 w-4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
