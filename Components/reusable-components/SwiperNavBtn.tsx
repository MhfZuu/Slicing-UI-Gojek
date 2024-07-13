import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useSwiper } from "swiper/react";

export default function NextPrevBtn(){
    const swiper = useSwiper();
    return(
        <div className="absolute flex justify-between w-full top-1/3 md:top-1/4 z-30">
            <button className='flex justify-center w-12 h-12 rounded-full bg-gray-300 items-center opacity-75' 
                    onClick={()=>swiper.slidePrev(300,false)}>
                        <BiChevronLeft className="h-6 w-6 text-black"/>
            </button>
            <button className='flex justify-center w-12 h-12 rounded-full bg-gray-300 items-center opacity-75' 
                    onClick={()=>swiper.slideNext(300,false)}>
                        <BiChevronRight className="h-6 w-6 text-black"/>
            </button>
        </div>
    )
}