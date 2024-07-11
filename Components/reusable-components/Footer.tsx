import Image from 'next/image'
import Link from 'next/link'
import { IoLanguage, IoLocation, IoLogoApple,IoLogoGooglePlaystore } from 'react-icons/io5'

const item1=["About", "Products", "Blog"]
const item2=["Driver Partner", "Merchant Partner"]
const item3=["Student", "Profesional"]
const item4=["Help Center", "Our Location"]

function GridItem(title: string, items: string[]){
    return (
        <div className="">
            <p className='text-lg font-bold'>{title}</p>
            <ul className='space-y-4'>
                {items.map((item) => (
                    <li className="mt-4">
                        <Link href="/">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer(){
    return (
        <footer className="text-white bg-gray-950 ">
            <div className="w-4/5 m-auto py-10 lg:py-16 border-b border-neutral-300">
                <Image className='mb-14'
                    src="/gojek-horizontal-logo-white.svg" 
                    alt="logo gojek" 
                    width={112} 
                    height={32}
                />
                <div className='grid grid-cols-2 md:grid-cols-5 gap-10'>
                    <div>
                        {GridItem("Company", item1)}
                    </div>
                    <div>
                        {GridItem("Join with us", item2)}
                    </div>
                    <div>
                        {GridItem("Carreers", item3)}
                    </div>
                    <div>
                        {GridItem("Get In Touch", item4)}
                    </div>
                    <div>
                        <div className="text-lg font-bold">
                            <div>
                                <p>Connect With Us</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:hidden text-black font-semibold space-y-4'>
                    <p className='text-white text-lg font-bold'>Download The App</p>
                    <button className='w-full rounded-2xl bg-white flex justify-center
                                       items-center py-1 gap-2'>
                        <IoLogoApple/>
                        App store
                     </button>
                    <button className='w-full rounded-2xl bg-white flex justify-center
                                       items-center py-1 gap-2'>
                        <IoLogoGooglePlaystore/>
                        Play store
                    </button>
                </div>
            </div>
            <div className="w-4/5 m-auto py-10 lg:py-16 grid
                            grid-cols-1 md:grid-cols-3">
                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                    <Link href="/" className="underline">Privacy Notice</Link>
                    <Link href="/" className="underline">Terms & Condition</Link>
                    <Link href="/" className="underline">Data Attribution</Link>
                    <Link href="/" className="underline">Cookie Settings</Link>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className='w-4/5 mx-auto pb-6 space-y-4'>
                <div className='flex items-center gap-3'>
                    <IoLocation className='h-6 w-6'/>
                    <select className='px-3 py-1 w-full rounded-2xl bg-gray-950 border border-slate-200'>
                        <option>Indonesia</option>
                        <option>English</option>
                    </select>
                </div>
                <div className='flex items-center gap-3'>
                    <IoLanguage className='h-6 w-6'/>
                    <select className='px-3 py-1 w-full rounded-2xl bg-gray-950 border border-slate-200'>
                        <option>English</option>
                        <option>Indonesia</option>
                    </select>
                </div>
            </div>
            <div className="text-center w-4/5 mx-auto pb-10">
                <p>
                © 2023 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedia Tbk. 
                Registered in the Directorate General of Intellectual Property of 
                the Republic of Indonesia.
                </p>
            </div>
        </footer>
    )
}