import { plans } from '@/lib/assets'
import Image from 'next/image'
import React from 'react'

function ByCredit() {


    type prop = {
        id: string,
        price: number,
        credits: number,
        desc: string
    }
    return (
        <div className='min-h-[80vh] text-center pt-14 mb-10'>
            <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Choose the plan that's right for you</h1>
            <div className='flex flex-wrap justify-center mt-7  gap-6 text-left '>
                {plans.map((item: prop, index: number) => (
                    <div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500'>
                        <Image src='/assets/logo_icon.svg' alt='' width={40} height={40} />
                        <p className='mt-3 font-semibold'>{item.id}</p>
                        <p className='text-sm '>{item.desc}</p>
                        <p className='mt-6'>
                            <span className='text-3xl font-medium'>{item.price}</span> {item.credits}credits
                        </p>
                        <button className='w-full bg-gray-800  text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>Purchase</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ByCredit
