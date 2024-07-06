"use client"

import { Pagination } from 'swiper/modules'
import {SwiperSlide, Swiper} from 'swiper/react'
import SwiperNavBtn from "../reusable-components/SwiperNavBtn"
import "swiper/css"
import "swiper/css/pagination"
import '@/app/globals.css'

const CardRbw=(products:any[])=>{
    return (
        <>
            {products.map((product)=>{
                return(
                    <SwiperSlide className='w-auto mb-12 h-auto'>
                        <div style={{backgroundColor: product.color2}} 
                             className={`rounded-3xl h-full text-white text-center`}>

                            <div style={{backgroundColor: product.color1}} 
                                 className={`p-10 h-[300px] rounded-3xl text-left`}>

                                {product.items.map((item:string)=>{
                                    return (
                                        <p className='text-xl font-bold'>{item}</p> 
                                    )
                                })}
                            </div>
                            <h1 className='mt-2 p-3 font-bold'>
                                {product.headline}
                            </h1>
                            <p className='p-3 pt-0'>
                                {product.desc}
                            </p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </>
    )
}

const Section6=()=>{
    return(
        <div className="bg-gray-950 py-20 w-full">
            <div className="text-white flex flex-col mb-28 items-center gap-2 ">
                <h1 className="text-center w-4/5 text-5xl font-bold">
                    We build products that nations run on
                </h1>
                <button className="rounded-3xl bg-[#00880d] w-fit py-3 px-5 text-white font-bold">
                    View all products
                </button>
            </div>
            <Swiper className='w-[90%] items-stretch h-auto'
                breakpoints={{
                    768:{
                        slidesPerView:3,
                    },
                    990:{
                        slidesPerView: 4,
                }}}
                slidesPerView={1} 
                pagination={true} 
                loop={true} 
                spaceBetween={30}
                modules={[Pagination]}>
                    
                {CardRbw(products)}
                <div className='absolute top-1/2 w-full'>
                    <SwiperNavBtn />
                </div>
            </Swiper>
        </div>
    )
}

export default Section6

const products=[
    {
        "color1":"#00aa13",
        "color2":"#008c15",
        "headline":"Transport & Logistics",
        "desc":"We've kinda done 13,000 trips between the earth and the moon.",
        "items":["gobox", "goride", "gobluebird", "gosend" , "gocar"]
    },{
        "color1":"#00aed6",
        "color2":"#0093b2",
        "headline":"Payments",
        "desc":"From delas to donation, we make transaction easy, reliable, and cashless.",
        "items":["gopay", "gosure", "goplaylater", "gotagihan"]
    },{
        "color1":"#ee2737",
        "color2":"#af272f",
        "headline":"Food & Shopping",
        "desc":"Filll your cart with food, electronics, medicines, and more. Without stepping out!",
        "items":["gomed", "goshop", "gofood", "gomart"]
    },{
        "color1":"#93328e",
        "color2":"#80276c",
        "headline":"Bussiness",
        "desc":"Manage your restaurant, run ads, create promos, and do more.",
        "items":["midtrans", "gostore", "moka", "gobiz", "selly"]
    },{
        "color1":"#df1995",
        "color2":"#aa0061",
        "headline":"Entertaiment",
        "desc":"Binge-watch your favourite series, book ticket, play games,have a goood time!",
        "items":["gotix"]
    }
]