const Section4=()=>{
    return (
        <div className="text-black bg-white w-full flex flex-col items-center py-20">
            <div className="mb-14">
                <h1 className="text-5xl font-bold">Join the ride</h1>
            </div>
            <div className="w-4/5 grid grid-rows-3 grid-flow-col md:grid-rows-1 gap-10 lg:gap-12">
                <div className="space-y-4">
                    <div className="rounded-lg aspect-square w-8 bg-[#4ac9e3]"></div>
                    <div className="space-y-1">
                        <h1 className="font-bold text-xl"> Employees</h1>
                        <p className="text-[15px] lg:text-md">
                            Behind Southeast Asia's only hyper-growth startup are some billion-dollar 
                            brains, doing what they do best.
                        </p>
                    </div>
                    <div>
                        <button className="rounded-3xl bg-[#00880d] w-fit py-3 px-4 text-white font-bold"> 
                            Join as employee
                        </button>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="rounded-lg aspect-square w-8 bg-[#7ccc6c]"></div>
                    <div className="space-y-1">
                        <h1 className="font-bold text-xl">Driver partners</h1>
                        <p className="text-[15px] lg:text-md">
                            We're home to 2 million+ driver partners, who enjoy a bundle of health and 
                            financial benefits.
                        </p>
                    </div>
                    <div>
                        <button className="rounded-3xl bg-[#00880d] w-fit py-3 md:py-0 lg:py-3 px-4 text-white font-bold">
                            Join as a driver partners
                        </button>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="rounded-lg aspect-square w-8 bg-[#d48bc8]"></div>
                    <div className="space-y-1">
                        <h1 className="font-bold text-xl">Merchants</h1>
                        <p className="text-[14px] lg:text-md">
                            We empower 500,000+ merchants with cutting-edge technologies that help them multiply 
                            reach and sales.
                        </p>
                    </div>
                    <div>
                        <button className="rounded-3xl bg-[#00880d] w-fit py-3 px-4 text-white font-bold">
                            Join as a merchant
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4