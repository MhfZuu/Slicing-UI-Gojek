"use client"

import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperNavBtn from "../reusable-components/SwiperNavBtn"
import "swiper/css"
import "swiper/css/pagination"
import '@/app/globals.css'

const SlideCard= (contents:any[]) => {
    return (
        contents.map((content)=>{
            return (
                <SwiperSlide className='h-auto mb-10 flex justify-center'>
                    <div className="text-black text-center flex flex-col items-center space-y-4">
                        <h1 className="font-extrabold text-2xl lg:text-4xl">{content.country}</h1>
                        <p className="text-sm font-normal lg:text-md pt-4 w-[85%] lg:4/5">{content.desc}</p>
                        <div className='bg-[#00880d] rounded-3xl px-6 py-3 w-fit'>
                            <p className='font-semibold text-white text-sm'>
                                Enter newsroom
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
    )
}

const Section8 = () => {
    return (
        <section className=" bg-[#4ac9e3] h-screen py-12 overflow-hidden">
            <div className="lg:container mx-auto h-full">
                <Swiper className='lg:w-2/3 justify-center'
                    slidesPerView={1}
                    pagination={true}
                    modules={[Pagination]}>

                    {SlideCard(contents)}
                    <div className='absolute top-1/4 w-full'>
                        <SwiperNavBtn />
                    </div>
                </Swiper>
                <div>
                    <Image src='https://lelogama.go-jek.com/prime/upload/image/General_impact_-_Globe.svg'
                            width={100} height={100} alt='gojek world' 
                            className='w-full aspect-[2/1]lg:aspect-[3/2]'/>
                </div>
            </div>
        </section>
    )
}

export default Section8


const contents =[
    {
        "country":"Indonesia",
        "desc"   :"In 2019, Gojek added $7.1 billion to the Indonesian economy, transforming employment and quality of life"
    },{
        "country":"Singapore",
        "desc"   :"Clocking 30 million trips in its first year of operation - a threadfold increase in just six months - Gojek is scalling like a ragging bull"   
    },,{
        "country":"Vietnam",
        "desc"   :"Over 80,000 GoFood merchants and 150,000 driver partners help million of our customer eat, move, repeat!"   
    }
]