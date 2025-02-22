import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Result() {
    return (
        <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[69vh] flex justify-center'>
            <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
                <div className='flex items-center  max-w-[90%] mx-auto  gap-8'>

                    <div>
                        <p className='font-semibold text-gray-600 mb-2'>Original</p>
                        <Image className='rounded-md border' src='/assets/image_w_bg.png' alt='' width={540} height={540} />
                    </div>

                    <div >
                        <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
                        <div className='rounded-md border  border-gray-300 h-[270px] w-[400px] relative bg-layer overflow-hidden'>
                            {/* <Image className='rounded-md border' src='/assets/image_wo_bg.png' alt='' width={450} height={450} /> */}
                            <div className='border-4 mx-auto relative top-[40%] border-violet-600 border-t-transparent h-12 w-12 rounded-full animate-spin'>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-end pl-8 max-w-[95%] mt-7 gap-6'>
                    <button className='px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button>
                    <Link href="" className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full '> Download image</Link>
                </div>
            </div>
        </div>
    )
}

export default Result
