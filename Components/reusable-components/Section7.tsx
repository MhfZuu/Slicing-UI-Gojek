import Image from 'next/image'

const Section7=()=>{
    return(
        <div className="w-full">
            <div className="gap-20 py-20 px-[10vw] grid grid-cols-1 md:grid-cols-2 grid-flows-row bg-gray-950">
                <div className="w-full flex flex-col justify-center">
                    <Image src='https://cdn-site.gojek.com/uploads/home_spot_image_goclub_0555c2c8fe.svg'
                           alt="" width={100} height={100} className='w-full'/>
                </div>
                <div className="text-white space-y-5 pr-4 flex flex-col justify-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-8">Gojek Loyalty Program</h1>
                        <p>
                            Make more transaction, get more rewards!
                        </p>
                    </div>
                    <button 
                        className="rounded-3xl bg-[#00880d] w-fit py-2 px-5 text-white font-bold">
                                View more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section7