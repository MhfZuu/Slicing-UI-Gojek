import Image from  'next/image'

const Section9 =()=>{
    return(
        <div className='relative w-full h-auto aspect-[3/4] md:aspect-auto bg-gray-900'>
            <Image src="https://cdn-site.gojek.com/uploads/download_desktop_ccdc61425a.png" 
                   className='w-full object-cover z-0 h-auto aspect-[3/4] md:aspect-auto' alt='' width={100} height={100} 
                   unoptimized/>
            <div className='absolute h-full w-4/5 top-0 left-[10%] lg:left-0 py-16 flex flex-col justify-end lg:justify-center gap-y-4'>
                <h1 className='lg:w-2/3 text-2xl md:text-[46px] text-white font-bold mx-auto leading-tight'>
                    Good to Go? Download the Gojek app today!
                </h1>
                <div className='flex gap-5 lg:w-2/3 mx-auto flex-col lg:flex-row'>
                    <button className='px-5 py-3 text-black text-md rounded-3xl bg-white font-semibold'>App Store</button>
                    <button className='px-5 py-3 text-black text-md rounded-3xl bg-white font-semibold'>Play Store</button>
                </div>
            </div>
        </div>
    )
}

export default Section9