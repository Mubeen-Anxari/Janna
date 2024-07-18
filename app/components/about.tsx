import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
    <div className='max-w-[1200px] m-auto mt-20 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div>
                <Image src='/Image2.png' height={500} width={500} alt='pic'></Image>
            </div>
            <div className='flex flex-col lg:mt-12 gap-2'>
                <h1 className=' text-xl  text-white font-serif bg-sky-800 w-32 rounded text-center'>ABOUT US</h1>
                <h1 className='text-white text-5xl'>I AM AVAILABLE FOR UI UX DESIGN PROJECTS</h1>
                <p className=' text-white text-lg mt-6'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <div className=' flex  gap-4 mt-6'>
                    <div className=' flex flex-col gap-2  py-2 border text-center border-gray-400 rounded-lg w-[150px]'>
                        <h1 className=' font-bold text-white text-3xl'>280+</h1>
                        <p className='text-white'> Google Reveiw</p>
                    </div>
                    <div className=' flex flex-col gap-2  py-2 border text-center border-gray-400 rounded-lg w-[180px]'>
                        <h1 className=' font-bold text-white text-3xl'>15+</h1>
                        <p className='text-white'> Years Experience</p>
                    </div>
                    <div className=' flex flex-col gap-2  py-2 border text-center border-gray-400 rounded-lg w-[180px]'>
                        <h1 className=' font-bold text-white text-3xl'>49+</h1>
                        <p className='text-white'> Awward Winning</p>
                    </div>
                </div>
                <button className="  bg-blue-700 text-white mt-10 p-2 h-12 rounded-full w-[150px]">
            GET IN TOUCH
          </button>
            </div>
        </div>
    </div>
  )
}
