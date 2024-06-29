import Image from 'next/image';
import Swiper from 'swiper';

function Card(imageUrl :string, title :string, desc :string){
    return(
        <div className='flex grow-1 flex-col items-center text-center'>
            <Image src={imageUrl} width={140} height={100} alt='' />
            <h3 className='font-bold text-2xl mt-4 mb-2'>
                {title}
            </h3>
            <p className='text-md'>
                {desc}
            </p>
        </div>
    )
}

export default function Cardsec1(){
    return (
        <div className="flex h-40 bg-gray-900 w-full relative h-[450px] items-end">
            <div className="h-3/4 bg-white w-full rounded-t-6xl relative">
                <div className='flex absolute -top-[75px] mx-auto'>
                    {Card (
                        '/gojek-1.svg',`Fortune's favorite`,
                        `Southeast Asia's only company to make it to Fortune's 'Change the World' list twice.`)}
                    {Card (
                        '/gojek-2.svg',`$7.1 b contribution`,
                        `Value added to the Indonesian economy in 2019.`
                    )}
                    {Card (
                        '/gojek-3.svg',`Tonne times greener`,
                        `Saved 11.3 tonnes of plastic in cutlery since October 2020.`
                    )}
                    {Card (
                        '/gojek-4.svg',`Digisting merchant`,
                        `Resulted in 80% growth in number of GoFood merchants during pandemic.`
                    )}
                </div>
            </div>
        </div>
    )
}