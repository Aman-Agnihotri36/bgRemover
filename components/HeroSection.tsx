import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import Image from 'next/image'

function HeroSection() {
    return (
        <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
            <div >
                <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden' /> images for free.</h1>
                <p className='my-6 text-[15px] text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui veniam voluptatum <br /> quod consequuntur error, facilis dolorem deleniti possimus reprehenderit ipsum.</p>

                <div >
                    <Label htmlFor="picture" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700'>
                        <Image src='assets/upload_btn_icon.svg' alt='upload' width={15} height={15} />
                        <p className='text-white text-sm'>Upload Image</p>
                    </Label>
                    <Input id="picture" type="file" className='hidden' />
                </div>
            </div>
            <div className='w-full max-w-md'>
                <Image src='/assets/header_img.png' alt='main' width={425} height={425} />
            </div>
        </div>
    )
}

export default HeroSection
