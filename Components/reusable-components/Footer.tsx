import Image from 'next/image'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoInstagramAlt } from 'react-icons/bi'
import { IoLanguage, IoLocation, IoLogoApple,IoLogoGooglePlaystore,IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'

const item1=["About", "Products", "Blog"]
const item2=["Driver Partner", "Merchant Partner"]
const item3=["Student", "Profesional"]
const item4=["Help Center", "Our Location"]

function GridItem(title: string, items: string[]){
    return (
        <div className="">
            <p className='text-lg font-maison-demi'>{title}</p>
            <ul className='space-y-4'>
                {items.map((item) => (
                    <li className="text-base font-maison-book mt-4">
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
            <div className="w-4/5 h-auto m-auto py-10 lg:py-16 border-b border-neutral-300">
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
                    <div className='col-span-2 md:col-span-1'>
                        <div className="text-lg font-maison-demi space-y-4 ">
                            <div>
                                <p>Connect With Us</p>
                                <div className='w-auto flex gap-x-7 md:gap-x-0 lg:gap-x-4'>
                                    <BiLogoFacebook className='w-8 h-8'/>
                                    <IoLogoTwitter className='w-8 h-8'/>
                                    <BiLogoInstagramAlt className='w-8 h-8'/>
                                    <IoLogoYoutube className='w-8 h-8'/>
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <p>Download The App</p>
                                <div className='flex gap-x-4'>
                                    <IoLogoGooglePlaystore className='w-8 h-8'/>
                                    <IoLogoApple className='w-8 h-8'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:hidden text-black space-y-4 mt-4'>
                    <p className='text-white text-lg font-maison-demi'>Download The App</p>
                    <button className='w-full rounded-2xl bg-white flex justify-center
                                       items-center py-1 gap-2 text-base font-maison-book'>
                        <IoLogoApple/>
                        App store
                     </button>
                    <button className='w-full rounded-2xl bg-white flex justify-center
                                       items-center py-1 gap-2 text-base font-maison-book'>
                        <IoLogoGooglePlaystore/>
                        Play store
                    </button>
                </div>
            </div>
            <div className='w-4/5 mx-auto grid md:grid-cols-3 gap-6 py-10 lg:py-16'>
                <div className="w-full grid grid-cols-1">
                    <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-base font-maison-book">
                        <Link href="/" className="underline flex items-center">Privacy Notice</Link>
                        <Link href="/" className="underline flex items-center">Terms & Condition</Link>
                        <Link href="/" className="underline flex items-center">Data Attribution</Link>
                        <Link href="/" className="underline flex items-center">Cookie Settings</Link>
                    </div>
                </div>    
                <div className='flex items-start gap-3'>
                    <IoLocation className='h-6 w-8 my-3'/>
                    <select className='text-base font-maison-book px-3 py-3 w-full rounded-3xl bg-gray-950 border border-slate-200'>
                        <option>Indonesia</option>
                        <option>English</option>
                    </select>
                </div>
                <div className='flex items-start gap-3'>
                    <IoLanguage className='h-6 w-8 my-3'/>
                    <select className='text-base font-maison-book px-3 py-3 w-full rounded-3xl bg-gray-950 border border-slate-200'>
                        <option>English</option>
                        <option>Indonesia</option>
                    </select>
                 </div>
            </div>
            <div className="text-center w-4/5 mx-auto pb-10">
                <p className='text-base font-maison-book'>
                © 2023 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedia Tbk. 
                Registered in the Directorate General of Intellectual Property of 
                the Republic of Indonesia.
                </p>
            </div>
        </footer>
    )
}