"use client"

import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperNavBtn from "../reusable-components/SwiperNavBtn"
import "swiper/css"
import "swiper/css/pagination"
import '@/app/globals.css'

const Card = (contents:any[]) => {
    return (
        contents.map((content)=>{
            return(
                <SwiperSlide>
                    <div className='rounded-2xl aspect-square md:aspect-video w-full p-6'>
                        <Image  src={content.ImageUrl} 
                                className='object-cover w-full z-0' 
                                width={100} height={100}
                                unoptimized alt=' '/>
                        <div className='z-10 absolute top-0 text-left text-white w-full pr-1/2 h-auto'>
                            <h1 className='text-2xl font-bold'>
                                {content.Headline}
                            </h1>
                            <p className='text-md'>
                                {content.Desc}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
    )
}

const Section5= () => {
    return (
        <div className='bg-white w-full px-[5%]'>
            <Swiper className='aspect-auto'
            breakpoints={{
                768:{
                    slidesPerView:2
                }
            }}
            slidesPerView={1} 
            pagination={true} 
            loop={true} 
            spaceBetween={45}
            modules={[Pagination]}>
                {Card(contents)}
            <div>
                <SwiperNavBtn />
            </div>
            </Swiper>
        </div>
    )
}

export default Section5

const contents =[{
        'ImageUrl': 'https://cdn-site.gojek.com/uploads/Slack_Image_1366_834d7aec02.webp',
        'Headline': 'Parental insurance',
        'Desc'    : 'Subsidised health support for your parents.' 
    },{
        'ImageUrl': 'https://cdn-site.gojek.com/uploads/62ac3b0465bd61d4f71f1920238467bc_webp_1366_912_Slack_Image_1366x912_aa074976e0.webp',
        'Headline': 'Well benefits',
        'Desc'    : 'We share the bills-health, mobile , internet, and more.'
    },{
        'ImageUrl': 'https://cdn-site.gojek.com/uploads/Slack_Image_1366x912_9ff18d7b2b.webpp',
        'Headline': 'Fly for work & fun',
        'Desc'    : 'Explore new offices, cultures, and a thousand islands!'
    },{
        'ImageUrl': 'https://cdn-site.gojek.com/uploads/0c6106ede99edb7281ac73e4bc5e8f4e_74737762b5.webp',
        'Headline': 'Free counselling',
        'Desc'    : `We talk about mental health. This one's for you and your family.`
    }
]