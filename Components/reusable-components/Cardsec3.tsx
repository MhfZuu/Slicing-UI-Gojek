"use client"

import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import SwiperNavBtn from "../reusable-components/SwiperNavBtn"
import "swiper/css"
import "swiper/css/pagination"
import '@/app/globals.css'

const Card=(ImageUrl:string)=>{
    return (
            <div className="h-auto">
                <Image className='h-full object-cover w-full aspect-[3/4] md:aspect-auto lg:aspect-video' src={ImageUrl} width={100} height={100} unoptimized alt="hero image"/>
            </div>
    )
}

const Cardsec3 =()=>{
    return(
        <div>
            <Swiper id="another" 
                autoplay={{
                    delay:3000,
                    disableOnInteraction:true
                }} 
                pagination={{
                    clickable:true
                }} 
                modules={[Autoplay, Pagination]}>
                <SwiperSlide className="aspect-square md:aspect-video">
                    {Card("https://cdn-site.gojek.com/uploads/PUBGM_Desktop_Banner_52c1228f32.jpg")}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-1/2 h-full flex flex-col justify-center left-[10%] absolute text-white">
                        <h1 className="mb-8 font-bold text-5xl">Enjoy a variety of reward especially for you here</h1>
                        <button className="w-fit rounded-3xl bg-[#00880d] py-3 px-5 text-md font-bold ">
                            Know more!
                        </button>
                    </div>
                    {Card("https://cdn-site.gojek.com/uploads/Desktop_Center_Image_7feea7e470.jpg")}
                </SwiperSlide>
                <SwiperSlide className="aspect-square md:aspect-video">
                    {Card("https://cdn-site.gojek.com/uploads/Web_Header_Desktop_a827fd9720.jpg")}
                </SwiperSlide>
                <SwiperSlide className="aspect-square md:aspect-video">
                    {Card("https://cdn-site.gojek.com/uploads/J3_K_desktop_image_87a554b112.jpg")}
                </SwiperSlide>
                <div className="absolute right-[11vw] top-[85%] w-[90px] flex justify-between">
                    <SwiperNavBtn />
                </div>
            </Swiper>
        </div>
    )
}

export default Cardsec3