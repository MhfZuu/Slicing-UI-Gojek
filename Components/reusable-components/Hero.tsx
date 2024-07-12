import React from 'react'
import Image from 'next/image'

export default function Hero(){
    return(
    <div className='pt-[80px] lg:pt-[96px] z-0'>
        <div className='w-full lg:aspect-video  aspect-[3/4] flex flex-col h-auto items-center'>
            <iframe src='https://www.youtube.com/embed/VJH5FJ5kaJA?enablejsapi=1&version=3&controls=0&rel=0&mute=1&playlist=VJH5FJ5kaJA&playsinline=1&autoplay=1&loop=1' 
                    className='pointer-none hidden lg:block absolute z-10 w-full aspect-video'/>
           <Image className="lg:hidden absolute w-auto h-screen z-0 object-cover " 
                    src="https://cdn-site.gojek.com/uploads/hero_b18c33ed07.jpg" alt="bg-hero"
                    width={100} height={100} unoptimized/> 
            <div className='size-full  py-16 items-center'>
                <div className='h-full w-full items-center container flex w-full h-full flex-col justify-end lg:items-start
                                 lg:px-20 lg:justify-center pb-8'>  
                    <p className='h-auto w-5/6 z-10 text-white text-2xl md:text-4xl lg:w-3/4 lg:items-start lg:pl-5
                                  md:text-4xl lg:text-5xl lg:pr-3 font-bold'>
                        3 countries. 20+ products. 1 leading on-demand platform.
                    </p>
                </div>  
            </div>
        </div>
        <div className='flex flex-col gap-1 relative items-center pt-10 pb-5 bg-gray-900 z-30 text-white  md:pt-20 md:pb-10 
                        border-b border-neutral-300'>
            <p className='text-center text-3xl w-5/6 font-bold md:text-4xl lg:text-5xl m-1 md:m-2'>We're Gojek, the drivers of change</p>
            <div className='z-30 bg-[#00880d] rounded-full w-fit py-2 px-4'> Explore Carreers</div>
        </div>
    </div>
    )
}
