"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react";
import { IoChevronDown, IoMenu, IoClose} from "react-icons/io5";
import '@/app/globals.css'

const bahasa =["Bahasa Indonesia", "Bahasa Inggris"];
const company=["About", "Newsroom","Safety","Sustainability"];
const partners=["Driver Partner", "Merchant Partner"];


export default function Navbar(){ 
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNavBtn = () =>{
        setIsNavOpen(!isNavOpen)
    }

    function DropDown(text: string, keys: string[]){
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div>
                <div className="flex gap-1 items-center cursor-pointer" 
                     onClick={()=>setIsOpen(!isOpen)}>
                    <p>{text}</p>
                    <IoChevronDown className={`${isOpen?"rotate-180":""} 
                                              ease-in duration-300 h-8 w-5 -pt-1`} />
                </div>
                <div 
                    className={`${isNavOpen?`relative`:`absolute min-w-52 bg-gray-900 
                               top-[67px] rounded-[15px] -right-2 `}
                                ${isOpen?"max-h-[100vh] transition-heigth duration-700 ease-in-out":
                                "max-h-[0px] transition-heigth duration-500 ease-in-out"} 
                                grid px-4 overflow-hidden`}>
                    {keys.map((key) => (
                        <Link href="/" className="text-base my-4 hover:underline" >
                            {key}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <nav className='w-full fixed z-50 top-0 flex text-white px-0
                        h-20 md:h-24 md:px-4 bg-gray-900 items-center 
                        md:py-8 justify-between font-gojek text-lg'>
            <Link href="/" className="px-[20px]">
                <Image className='w-[100px] md:w-[120px]'
                    src="/gojek-horizontal-logo-white.svg" 
                    alt="logo gojek" 
                    width={120} 
                    height={32}
                />
            </Link>
            
            <div className="flex justify-center">

                <div className={`${isNavOpen?"open":""} fixed flex flex-col gap-6 
                                bg-gray-900 w-full h-screen p-6 top-[80px] lg:gap-10 
                                lg:min-w-200 lg:px-8 lg:top-0 lg:inline-flex lg:flex-row 
                                lg:w-auto lg:h-auto lg:relative lg:py-0 lg:items-center`}
                    id="navLink">
                    
                    <Link href="/">Home</Link>
                    <Link href="" className="relative">
                        {DropDown("Partners with us", partners)}
                    </Link>
                    <Link href="/">Carreers</Link>
                    <Link href="" className="relative">
                        {DropDown("Company", company)}
                    </Link> 
                    <Link href="/">Product</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Help</Link>
                    <Link href="" className="relative">
                        {DropDown("EN", bahasa)}
                    </Link>
                </div>
                <button className="lg:hidden pr-4" 
                        onClick={handleNavBtn}>

                        {isNavOpen?
                        <IoClose className="w-8 h-auto"/>:
                        <IoMenu className="w-8 h-auto"/>}
                </button>
            </div>
        </nav>
    )
}