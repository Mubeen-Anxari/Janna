import React from 'react'
import Image from 'next/image'
export default function Logos() {
  return (
    <div className='bg-cyan-700 ' >
        <div className=" flex flex-col justify-between mx-4 items-center md:flex-row ">
        <Image className="h-20" src="/brand1.svg" height={200} width={200} alt="pic"></Image>
        <Image className="h-20"  src="/brand2.svg" height={200} width={200} alt="pic"></Image>
        <Image className="h-20"  src="/brand3.svg" height={200} width={200} alt="pic"></Image>
        <Image className="h-20"  src="/brand4.svg" height={200} width={200} alt="pic"></Image>
      </div>
    </div>
  )
}
