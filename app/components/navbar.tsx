"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
  return (
    <div className='max-w-[1400px] m-auto '>
        <nav className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Brand/logo */}
          <div className="flex-shrink-0">
            <Link href="/">
           <Image src='Janna.svg' width={150} height={100} alt='pic'></Image>
            </Link>
          </div>

        
          <div className="hidden md:flex flex-grow gap-10 justify-end items-center space-x-4">
            <Link className='text-white underline' href="/">
              Home
            </Link>
            <Link  className='text-white' href="/about">
              About Me
            </Link>
            <Link  className='text-white' href="/about">
              Projects
            </Link>
            <Link  className='text-white' href="/services">
              Services
            </Link>
            <Link  className='text-white' href="/contact">
              Contact
            </Link>
            {/* <button className=' bg-blue-600 p-4  w-[150px] rounded-full text-white'> LET's TAlK</button> */}
          </div>

          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
