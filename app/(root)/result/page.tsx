'use client'
import { useAppSelector } from '@/lib/hooks'
import { useUser, RedirectToSignIn } from '@clerk/nextjs';

import Link from 'next/link'


function Result() {

    const { isSignedIn } = useUser();

    const url = useAppSelector((state) => state.url.value)
    const urlTwo = useAppSelector((state) => state.url.original)

    if (!isSignedIn) {
        return <RedirectToSignIn />;
    }

    // <img className="max-w-full max-h-full object-contain" src={url} alt="" />




    return (
        <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[69vh] flex justify-center'>
            <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
                <div className='flex items-center gap-20 flex-wrap justify-center  max-w-[100%] mx-auto  '>

                    <div className=''>
                        <p className='font-semibold text-gray-600 mb-2'>Original</p>
                        {/* <Image className='rounded-md border' src={urlTwo} alt='' /> */}
                        <div className='h-[300px] w-[310px] sm:h-[305px] sm:w-[400px]'>
                            <img className="h-full w-full object-fill rounded-md border" src={urlTwo} alt="" />
                        </div>
                    </div>

                    <div >
                        <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
                        <div className='rounded-md border flex justify-center items-center border-gray-300 sm:h-[303px] sm:w-[360px] h-[290px] w-[312px] relative bg-layer overflow-hidden'>
                            {/* <Image className='rounded-md relative bottom-10 border' src={url} alt='' fill /> */}
                            <div className='w-[100%] h-[100%]'>
                                <img className="w-full h-full object-fill " src={url} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-end  max-w-[100%] mt-7 gap-6'>
                    <Link href='/'><button className='sm:px-8 px-0  py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button></Link>
                    <a href={url} download='image.png' className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700'> Download image</a>
                </div>
            </div>
        </div>
    )
}

export default Result
