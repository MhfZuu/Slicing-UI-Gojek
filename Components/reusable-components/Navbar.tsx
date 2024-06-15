"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    const navs = [{list : "Home", id:0}, {list : "Partner with us", id:1}, {list : "Carreers", id:2}, 
                  {list : "Company", id:3}, {list : "Product", id:4}, {list : "Blog", id:5}, 
                  {list : "Help", id:6}, {list : "EN", id:7}]
    
    return (
        <nav className=' sticky top-0 flex text-white 
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
            
            <ul className="flex gap-10 min-w-200 px-8">
                {navs.map((nav) => ((nav.id === 1|| nav.id === 3|| nav.id === 7 )?
                (
                    <li>
                         <Link href="/">
                            {nav.list}
                         </Link>
                    </li>
                 ):(
                   <li>
                        <Link href="/">{nav.list}</Link>
                   </li>
                )))}
            </ul>
        </nav>
    )
}