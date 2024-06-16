"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const bahasa =["Bahasa Indonesia", "Bahasa Inggris"];
const company=["About", "Newsroom","Safety","Sustainability"];
const partners=["Driver Partrner", "Merchant Partner"];

function DropDown(text: string, key: string[]){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="flex gap-1 items-center cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                <p>{text}</p>
                {isOpen ? <IoChevronUp className="h-6 pt-1.5" /> : <IoChevronDown className="h-6 pt-1.5" />}
            </div>
            {isOpen && ExtendDD(key)}
        </div>
    );
}

function ExtendDD(args: string[]){
    return(
        <div className="absolute min-w-52 min-h-24 bg-gray-900
                        top-10 grid auto-rows-auto px-4 py-3
                        rounded-md -right-2">
            {args.map((arg) => (
                <Link href="/" >{arg}</Link>
            ))}
        </div>
    );
} 

export default function Navbar(){ 
    return (
        <nav className='ticky top-0 flex text-white 
                        min-h-20 bg-black py-8 px-5 
                        justify-between --font-gojek text-lg'>
            <Link href="/" className="px-[20px]">
                <Image 
                    src="/gojek-horizontal-logo-white.svg" 
                    alt="logo gojek" 
                    width={100} 
                    height={80}
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