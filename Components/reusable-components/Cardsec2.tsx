"use client"

import Image from 'next/image';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules'
import SwiperNavBtn from '../reusable-components/SwiperNavBtn'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/app/globals.css'

function Card(imageUrl :string, color :string, title :string, desc :string){
    return(
        <SwiperSlide className='w-auto flex items-center mt-20 mb-8 px-5' id='swiperslide'>
            <div style={{backgroundColor:color, boxShadow: `0 0 32px ${color}`}} 
                 className='justify-center p-10 w-full md:min-h-[320px] min-h-[100vw] flex flex-col shadow-4 rounded-[40px]'>
                <div className='h-16 px-5 md:px-10'>
                    <Image className="absolute lg:-top-[25%] -top-[17%] left-0  w-[90%] md:w-full h-auto" 
                           src={imageUrl} width={140} height={100} alt='' unoptimized />
                </div>
                <div className='pt-10 md:pt-6 min-h-20 text-black'>
                    <h3 className='font-maisonext-xbold text-3xl mt-4 mb-2'>
                        {title}
                    </h3>
                    <p className='text-sm md:text-base font-maison-book'>
                        {desc}
                    </p>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default function Cardsec2(){
    return (
        <div className="bg-white pb-10">
            <div className='flex flex-col gap-1 relative items-center bg-inherit text-black mb-6'>
                <p className='font-maisonext-xbold text-center text-3xl w-5/6 md:text-3xl lg:text-4xl m-1 md:m-2'>We scale like a dream</p>
                <div className='z-30 bg-[#00880d] rounded-full w-fit py-2 px-4 text-white font-maison-demi'> Scale with us</div>
            </div>
            <div className='w-full' >
                <Swiper className='md:max-w-[95%]  max-w-full '
                    breakpoints={{
                        768:{
                            slidesPerView:3,
                            spaceBetween:20
                        },
                        990:{
                            slidesPerView: 4,
                            spaceBetween: 20
                    }}}
                    spaceBetween={30} loop={true} pagination={true} slidesPerView={1} modules={[Pagination]}>
                    {Card(
                        'https://cdn-site.gojek.com/uploads/170_mil_340e5c5603.png', 
                        '#7ccc6c', '190 million+', 'app download since 2015')}
                    {Card(
                        'https://cdn-site.gojek.com/uploads/2_million_04b50bc75a.png', 
                        '#d48bc8', '2 million+','driver partners')}
                    {Card(
                        'https://cdn-site.gojek.com/uploads/50_million_c34b6365a4.png', 
                        '#ffae52', '900.000+', 'GoFood merchants')}
                    {Card(
                        'https://cdn-site.gojek.com/uploads/12x_growth_cc1a49b8c3.png',
                         '#4ac9e3', '2.448x', 'Jump in download from 2015 to 200')}
                    <div className='lg:hidden absolute left-0 top-1/2 w-full flex justify-between'>
                        <SwiperNavBtn />
                    </div>
                </Swiper>
            </div>
        </div>
    )
}