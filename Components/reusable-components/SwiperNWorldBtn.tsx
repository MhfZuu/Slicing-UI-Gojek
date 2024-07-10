import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useSwiper } from "swiper/react";

type SetRotationFunction = (value: React.SetStateAction<number>) => void;
type NextPrevBtnProps = {
    setRotation: SetRotationFunction;
    activeIdx: number;
};

export default function NextPrevBtn({ setRotation, activeIdx }: NextPrevBtnProps) {
    const swiper = useSwiper();
    return(
        <div className="absolute flex justify-between w-full top-1/3 md:top-1/4 z-30">
            <button className='flex justify-center w-10 h-10 rounded-full bg-gray-300 items-center' 
                    onClick={()=>{
                        swiper.slidePrev(300,false);
                        activeIdx >0 && setRotation((prevRotation:number)=> prevRotation - 90);
                    }}>
                        <BiChevronLeft className="h-6 w-6"/>
            </button>
            <button className='flex justify-center w-10 h-10 rounded-full bg-gray-300 items-center' 
                    onClick={()=>{
                        swiper.slideNext(300,false);
                        activeIdx <2 && setRotation((prevRotation:number)=> prevRotation + 90);
                    }}>
                        <BiChevronRight className="h-6 w-6"/>
            </button>
        </div>
    )
}