import Image from 'next/image'
import Link from 'next/link'

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
                        <div className="">
                            <p className='text-lg font-bold'>Connect With Us</p>
                        </div>
                    </div>
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