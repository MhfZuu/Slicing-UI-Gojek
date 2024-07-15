import Image from  'next/image'

const Section9 =()=>{
    return(
        <div className='relative w-full h-auto aspect-[3/4] md:aspect-auto bg-gray-900'>
            <Image src="https://cdn-site.gojek.com/uploads/download_desktop_ccdc61425a.png" 
                   className='w-full object-cover z-0 h-auto aspect-[3/4] md:aspect-auto' alt='' width={100} height={100} 
                   unoptimized/>
            <div className='absolute h-full w-4/5 top-0 left-[10%] lg:left-0 py-16 flex flex-col justify-end lg:justify-center gap-y-4'>
                <h1 className='lg:w-2/3 text-2xl md:text-4xl text-white font-maisonext-xbold mx-auto leading-tight'>
                    Good to Go? Download the Gojek app today!
                </h1>
                <div className='flex gap-5 lg:w-2/3 mx-auto flex-col lg:flex-row text-base font-maison-demi'>
                    <button className='px-5 py-3 text-black rounded-3xl bg-white'>App Store</button>
                    <button className='px-5 py-3 text-black rounded-3xl bg-white'>Play Store</button>
                </div>
            </div>
        </div>
    )
}

export default Section9