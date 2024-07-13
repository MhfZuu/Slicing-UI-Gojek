"use client"

import Image from 'next/image';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules'
import SwiperNavBtn from '../reusable-components/SwiperNavBtn'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '@/app/globals.css'

function Card(imageUrl :string, title :string, desc :string){
    return(
        <SwiperSlide className='flex items-center mb-10'>
            <div className='flex flex-col text-black items-center text-center'>
                <Image src={imageUrl} width={140} height={100} alt='' />
                <h3 className='font-bold text-xl mt-4 mb-2'>
                    {title}
                </h3>
                <p className='text-sm md:text-md'>
                    {desc}
                </p>
            </div>
        </SwiperSlide>
    )
}

export default function Cardsec1(){
    return (
        <div className="flex h-40 bg-gray-900 w-full relative h-[450px] items-end">
            <div className="h-3/4 bg-white w-full rounded-t-6xl relative">
                <div className='absolute -top-[75px] w-full'>
                    <Swiper className='md:max-w-[80%] max-w-[80%] mx-auto'
                        breakpoints={{
                            500:{
                                slidesPerView:2,
                            },
                            768:{
                                slidesPerView: 4
                        }
                        }}
                        spaceBetween={30} loop={true} pagination={true} modules={[Pagination, Navigation]}>
                            {Card (
                                '/gojek-1.svg',`Fortune's favorite`,
                                `Southeast Asia's only company to make it to Fortune's 'Change the World' list twice.`)}
                            {Card (
                                '/gojek-2.svg',`$7.1 b contribution`,
                                `Value added to the Indonesian economy in 2019.`
                            )}
                            {Card (
                                '/gojek-3.svg',`Tonne times greener`,
                                `Saved 11.3 tonnes of plastic in cutlery since October 2020.`
                            )}
                            {Card (
                                '/gojek-4.svg',`Digisting merchant`,
                                `Resulted in 80% growth in number of GoFood merchants during pandemic.`
                            )}
                        <div className='md:hidden absolute left-0 top-1/3 w-full flex justify-between'>
                            <SwiperNavBtn />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}