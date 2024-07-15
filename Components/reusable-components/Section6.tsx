"use client"

import Image from 'next/image'
import Link from 'next/link'
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

                                {product.items.map((item:any)=>{
                                    return (
                                       < Image src={item.url} alt={item.id} width={100} height={32}
                                               className='w-auto h-8 my-3'/>
                                    )
                                })}
                            </div>
                            <h1 className='mt-2 p-3 font-bold text-2xl font-maison-bold'>
                                {product.headline}
                            </h1>
                            <p className='p-3 pt-0 text-sm font-maison-book'>
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
        <div className="bg-gray-950 py-10 md:py-20 w-full">
            <div className="text-white flex flex-col mb-24 md:mb-28 items-center gap-2 ">
                <h1 className="text-3xl md:text-4xl text-center w-4/5 font-maisonext-xbold">
                    We build products that nations run on
                </h1>
                <button className="rounded-3xl bg-[#00880d] w-fit py-3 px-5 text-white text-base font-maison-demi">
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
            <div className='w-fit h-fit bg-[#00880d] py-3 px-4 rounded-3xl mx-auto mt-4 text-base font-maison-demi'>
                <Link href="/" className='text-white'>View all products</Link>
            </div>
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
        "items":[
            {   "id" : "gobox",
                "url":"https://cdn-site.gojek.com/uploads/gobox_horizontal_logo_white_03f344f3d2.svg"
            },{ "id" : "goride",
                "url":"https://cdn-site.gojek.com/uploads/goride_horizontal_logo_white_a2b9d20d84.svg"
            },{ "id" : "gobluebird",
                "url":"https://cdn-site.gojek.com/uploads/gobluebird_horizontal_logo_white_97f0e532c4.svg"
            },{ "id" : "gosend",
                "url":"https://cdn-site.gojek.com/uploads/gosend_horizontal_logo_white_f53401da5e.svg"
            },{ "id" : "gocar",
                "url":"https://cdn-site.gojek.com/uploads/gocar_horizontal_logo_white_786624f7de.svg"
            }
        ]
    },{
        "color1":"#00aed6",
        "color2":"#0093b2",
        "headline":"Payments",
        "desc":"From delas to donation, we make transaction easy, reliable, and cashless.",
        "items":[
            {   "id" : "gopay",
                "url":"https://cdn-site.gojek.com/uploads/gopay_horizontal_logo_white_257d535edd.svg"
            },{ "id" : "gosure",
                "url":"https://cdn-site.gojek.com/uploads/gosure_horizontal_logo_white_9aa83831d0.svg"
            },{ "id" : "gopaylater",
                "url":"https://cdn-site.gojek.com/uploads/gopaylater_horizontal_logo_white_4c5632c1ab.svg"
            },{ "id" : "gotagihan",
                "url":"https://cdn-site.gojek.com/uploads/gotagihan_horizontal_logo_white_41339237ce.svg"
            }
        ]
    },{
        "color1":"#ee2737",
        "color2":"#af272f",
        "headline":"Food & Shopping",
        "desc":"Filll your cart with food, electronics, medicines, and more. Without stepping out!",
        "items":[
            {   "id" : "gomed",
                "url": "https://cdn-site.gojek.com/uploads/gomed_horizontal_logo_white_0b7fdfd8ed.svg",
            },{ "id" : "goshop",
                "url":"https://cdn-site.gojek.com/uploads/goshop_horizontal_logo_white_9ef721940a.svg"
            },{ "id" : "gofood",
                "url":"https://cdn-site.gojek.com/uploads/gofood_horizontal_logo_white_13c7a3f74e.svg"
            },{ "id" : "gomart",
                "url":"https://cdn-site.gojek.com/uploads/gomart_horizontal_logo_white_8d2c362daa.svg"
            }
        ]
    },{
        "color1":"#93328e",
        "color2":"#80276c",
        "headline":"Bussiness",
        "desc":"Manage your restaurant, run ads, create promos, and do more.",
        "items":[
            {   "id" : "midtrans",
                "url":"https://cdn-site.gojek.com/uploads/Midtrans_Horizontal_white_09b12c27ba.svg"
            },{ "id" : "gostore",
                "url":"https://cdn-site.gojek.com/uploads/Go_Store_Horizontal_white_16427af66d.svg"
            },{ "id" : "moka",
                "url":"https://cdn-site.gojek.com/uploads/Moka_Horizontal_inverse_62111ab44e.svg"
            },{ "id" : "gobiz",
                "url":"https://cdn-site.gojek.com/uploads/product_gobiz_29ba1a1838.svg"
            },{ "id" : "selly",
                "url":"https://cdn-site.gojek.com/uploads/Selly_Horizontal_white_800d3d2585.svg"
            }
        ]
    },{
        "color1":"#df1995",
        "color2":"#aa0061",
        "headline":"Entertaiment",
        "desc":"Binge-watch your favourite series, book ticket, play games,have a goood time!",
        "items":[
            {
                "id" :"gotix",
                "url":"https://cdn-site.gojek.com/uploads/Selly_Horizontal_white_800d3d2585.svg"
            }
        ]
    }
]