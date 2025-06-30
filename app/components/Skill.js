import React from 'react'
import Container from './Container'
import Icon from './Icon'
import { GoArrowDown, GoArrowLeft, GoArrowRight } from "react-icons/go";
import Button from './Button';
import Card from './Card';
import Image from 'next/image';


const cardItems =[
    {id:1, src:"/images/react-svg.svg", title:"HTML & CSS", desc:"Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"},
    {id:2, src:"/images/react-svg.svg", title:"Javascript", desc:"Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"},
    {id:3, src:"/images/react-svg.svg", title:"Webflow", desc:"Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"},
]

const Skill = () => {
  return (
    <section className='bg-black rounded-[40px] text-white -mt-[90px]'>
        <Container className={"pt-[90px] pb-[70px]"}>
            <div className='flex'>
                <Icon className={"w-11 h-11"}> <GoArrowDown /></Icon>
                <Button className={"px-5 py-2  text-base"} label={"Why Choose me"} iconClass={"hidden"}/>
            </div>
            <div className='mt-10 flex justify-between '>
                <h2 className='max-w-[516px] font-sporting text-[58px] font-bold leading-[86px] tracking-[-3%]'>My Extensive List of Skills</h2>
                <div className='max-w-[510px] flex flex-col justify-items-end '>
                    <p className='  font-sporting text-lg text-right font-normal leading-[34px] mb-5'>Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p>
                    <div className='h-[1px]  bg-[#535353]'></div>
                    <div className='mt-9 flex justify-end gap-5  '>
                        <Icon className={"w-[60px] h-[60px]"}> <GoArrowLeft /></Icon>
                        <Icon className={"w-[60px] h-[60px]"}> <GoArrowRight /></Icon>
                    </div>
                </div>
            </div>
            <div className='flex gap-[10px] mt-10 '>
                {
                    cardItems.map((item)=>{
                        return <Card key={item.id} className={"bg-[#ffffff]/8 py-12 px-9 nth-[2]:rotate-[6.74deg] "}>
                            <Image src={item.src}  alt='react-image' width={64} height={64}/>
                            <h4 className='mt-[35px] mb-5 '>{item.title}</h4>
                            <p>{item.desc}</p>
                        </Card>
                    })
                }
            </div>
        </Container>
    </section>
  )
}

export default Skill