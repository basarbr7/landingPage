'use client'
import React from 'react'
import Container from './Container'
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Button from './Button';
import { IoCall } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="min-h-screen" style={{ backgroundImage: "url('/images/herosvg.svg')" }}>
      <Container className="flex flex-col gap-[50px] pt-[209px] pb-[191px]">
        <div className='max-w-[1128px] text-[78px] font-bold tracking-[-3px] font-sporting flex flex-col gap-4'>
          <h1 className='leading-[126px]'>
            Trusted 
            <span className='bg-black text-white rounded-[11px] px-2 py-1 mx-1 inline-block align-middle'>
              Partner
            </span> 
            for
          </h1>
          <h1 className='leading-[126px]'>
            Your Website 
            <span className='bg-black text-white rounded-[11px] px-2 py-1 mx-1 inline-block align-middle'>
              Develop.
            </span>
          </h1>
        </div>
        
        <div className='flex items-start gap-[213px] '>
          <div className="leftside flex flex-col items-start gap-5 transform -rotate-90 origin-bottom mt-2 ">
              <p className=' font-sporting font-lg leading-[33px] '>@williamrey</p>
              <div className='flex items-center gap-4 text-black '>
                  <div className="w-10 h-px bg-black -mt-[2px]"></div>
                  <FaFacebook className="text-xl hover:text-gray-600 cursor-pointer " />
                  <FaInstagram className="text-xl hover:text-gray-600  cursor-pointer " />
                  <FaTwitter className="text-xl hover:text-gray-600 cursor-pointer " />
              </div>
          </div>
          
          <div className='rightside flex flex-col gap-10'>
            <p className='max-w-[703px] font-sporting font-normal text-lg leading-[33px] '>
              Building the world's best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.
            </p>
            <Button className="max-w-[247px] font-sporting text-base tracking-[-4%]" iconClass={"w-[54px] h-[54px] "} icon={<IoCall />} label={"Schedule a Call"}/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero