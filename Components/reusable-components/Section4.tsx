import Image from 'next/image'

const Section4=()=>{
    return (
        <div className="text-black bg-white w-full flex flex-col items-center py-12 lg:py-20">
            <div className="mb-10 lg:mb-14">
                <h1 className="text-3xl lg:text-5xl font-bold">Join the ride</h1>
            </div>
            <div className="w-4/5 grid grid-rows-3 grid-flow-col md:grid-rows-1 gap-y-6 md:gap-x-10">
                {contents.map((content)=>{
                    return (
                        <div className="space-y-3">
                            <Image src={content.imageUrl}
                                width={32} height={32} alt='tiny'/>
                            <div className="space-y-1">
                                <h1 className="font-bold text-xl">{content.headline}</h1>
                                <p className="text-[15px] lg:text-md">{content.desc}</p>
                            </div>
                            <div>
                                <button className="rounded-3xl bg-[#00880d] w-fit py-3 px-4 text-white font-bold"> 
                                    Join as employee
                                </button>
                            </div>
                        </div>
                    )
                 })}
            </div>
        </div>
    )
}
export default Section4

const contents=[
    {   
        "imageUrl": "https://cdn-site.gojek.com/uploads/employees_fef08f1b0f.svg",
        "headline": "Employees",
        "desc"    : " Behind Southeast Asia's only hyper-growth startup are some billion-dollar brains, doing what they do best."
    },{   
        "imageUrl": "https://cdn-site.gojek.com/uploads/driver_partner_166faab31a.svg",
        "headline": "Driver Partners",
        "desc"    : "We're home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits."
    },{   
        "imageUrl": "https://cdn-site.gojek.com/uploads/merchant_partner_57c8629626.svg",
        "headline": "Merchants",
        "desc"    : "We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales."
    }
]