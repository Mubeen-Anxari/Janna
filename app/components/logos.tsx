import React from 'react'
import Image from 'next/image'
export default function Logos() {
  return (
    <div className='bg-cyan-700 ' >
        <div className=" flex flex-col items-center lg:flex-row lg:gap-44 lg:ml-48">
        <Image className="h-20" src="/brand1.svg" height={200} width={200} alt="pic"></Image>
        <Image className="h-20"  src="/brand2.svg" height={200} width={200} alt="pic"></Image>
        <Image className="h-20"  src="/brand3.svg" height={200} width={200} alt="pic"></Image>
        <Image className="h-20"  src="/brand4.svg" height={200} width={200} alt="pic"></Image>
      </div>
    </div>
  )
}
