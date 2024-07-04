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
        <SwiperSlide className="aspect-square lg:aspect-video">
            <div className="h-auto">
                <Image className='h-screen object-cover w-full aspect-[3/4] md:aspect-auto lg:aspect-video' src={ImageUrl} width={100} height={100} unoptimized alt="hero image"/>
            </div>
        </SwiperSlide>
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
                pagination={true} modules={[Autoplay, Pagination]}>
                {Card("https://cdn-site.gojek.com/uploads/PUBGM_Desktop_Banner_52c1228f32.jpg")}
                {Card("https://cdn-site.gojek.com/uploads/Desktop_Center_Image_7feea7e470.jpg")}
                {Card("https://cdn-site.gojek.com/uploads/Web_Header_Desktop_a827fd9720.jpg")}
                {Card("https://cdn-site.gojek.com/uploads/J3_K_desktop_image_87a554b112.jpg")}
                <div className="absolute right-[11vw] top-[85%] w-[90px] flex justify-between">
                    <SwiperNavBtn />
                </div>
            </Swiper>
        </div>
    )
}

export default Cardsec3