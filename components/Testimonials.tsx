import { testimonialsData } from '@/lib/assets'
import React from 'react'

function Testimonials() {
    return (
        <div>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold sm:bg-gradient-to-r sm:from-gray-900 sm:to-gray-400 sm:bg-clip-text text-gray-500 sm:text-transparent'>Customer Testimonials</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
                {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
                {testimonialsData.map((item: any, index: number) => (
                    <div key={index} className='bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700'>
                        <p className='text-4xl text-gray-500'></p>
                        <p className='text-sm text-gray-500'>{item.text}</p>
                        <div className='flex items-center gap-3 mt-5'>
                            <img className='w-9 rounded-full' src={item.image} alt="" />
                            <div>
                                <p>{item.author}</p>
                                <p>{item.jobTitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
