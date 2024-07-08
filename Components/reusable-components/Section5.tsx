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
                <SwiperSlide className='mb-8'>
                    <div className='aspect-square lg:aspect-[4/3] h-auto '>
                        <Image  src={content.ImageUrl} 
                                className='rounded-3xl object-cover h-full w-full aspect-square lg:[4/3]' 
                                width={100} height={100}
                                unoptimized alt=' '/>
                        <div className='top-0 z-10 absolute text-left px-8 py-14 text-white w-full 
                                        h-full flex flex-col justify-end'>
                            <h1 className='text-xl font-bold'>
                                {content.Headline}
                            </h1>
                            <p className='text-sm'>
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
        <div className='bg-white w-full px-[2.5%] md:px-[5%] py-14'>
            <div className='w-full'>
                <h1 className='text-center font-bold text-4xl text-black'>
                    Perks of being good in company
                </h1>
            </div>

            <Swiper className='aspect-auto mt-10'
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
            <div className='absolute top-1/2 w-full'>
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
        'ImageUrl': 'https://cdn-site.gojek.com/uploads/Slack_Image_1366x912_9ff18d7b2b.webp',
        'Headline': 'Fly for work & fun',
        'Desc'    : 'Explore new offices, cultures, and a thousand islands!'
    },{
        'ImageUrl': 'https://cdn-site.gojek.com/uploads/0c6106ede99edb7281ac73e4bc5e8f4e_74737762b5.webp',
        'Headline': 'Free counselling',
        'Desc'    : `We talk about mental health. This one's for you and your family.`
    }
]