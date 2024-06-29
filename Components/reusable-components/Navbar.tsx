"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const bahasa =["Bahasa Indonesia", "Bahasa Inggris"];
const company=["About", "Newsroom","Safety","Sustainability"];
const partners=["Driver Partner", "Merchant Partner"];

function DropDown(text: string, key: string[]){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="flex gap-1 items-center cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                <p>{text}</p>
                {isOpen? <IoChevronDown className="rotate-180  ease-in duration-200 h-6 -pt-1" />:
                         <IoChevronDown className="ease-in duration-200 h-6 -pt-1" />}
            </div>
            {isOpen && ExtendDD(key)}
        </div>
    );
}

function ExtendDD(args: string[]){
    return(
        <div className="absolute min-w-52 min-h-24 bg-gray-900
                        top-10 grid grid-cols-1 px-4 py-6
                        rounded-[15px] -right-2 gap-y-6">
            {args.map((arg) => (
                <Link href="/" className="text-base hover:underline" >{arg}</Link>
            ))}
        </div>
    );
} 

export default function Navbar(){ 
    return (
        <nav className='w-full fixed z-50 top-0 flex text-white px-0
                        h-20 md:h-24 md:px-4 bg-gray-900 items-center md:py-8 
                        justify-between font-gojek text-lg'>
            <Link href="/" className="px-[20px]">
                <Image className='w-[100px] md:w-[120px]'
                    src="/gojek-horizontal-logo-white.svg" 
                    alt="logo gojek" 
                    width={120} 
                    height={32}
                />
            </Link>
            
            <ul className="hidden flex gap-10 min-w-200 px-8 lg:inline-flex">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li className="relative">
                    {DropDown("Partners with us", partners)}
                </li>
                <li>
                    <Link href="/">Carreers</Link>
                </li>
                <li className="relative">
                    {DropDown("Company", company)}
                </li> 
                <li>
                    <Link href="/">Product</Link>
                </li>
                <li>
                    <Link href="/">Blog</Link>
                </li>
                <li>
                    <Link href="/">Help</Link>
                </li>
                <li className="relative">
                    {DropDown("EN", bahasa)}
                </li>
            </ul>
        </nav>
    )
}