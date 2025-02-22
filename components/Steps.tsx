import React from 'react'

import Image from 'next/image'

function Steps() {

    type Prop = {
        icon: string,
        title: string,
        text: string
    }

    const items = [
        {
            icon: 'assets/upload_icon.svg',
            title: 'Upload Image',
            text: 'sloodjio odjj ofoi odj ojof ofo fou'
        },
        {
            icon: 'assets/remove_bg_icon.svg',
            title: 'Remove background',
            text: 'sloodjio odjj ofoi odj ojof ofo fou'
        },
        {
            icon: 'assets/download_icon.svg',
            title: 'Download image',
            text: 'sloodjio odjj ofoi odj ojof ofo fou'
        }
    ]
    return (
        <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove background <br /> image in seconds</h1>

            <div className='flex  items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>
                {
                    items.map((item: Prop, index: number) => (
                        <div key={index} className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                            <Image src={`${item.icon}`} alt='upload' width={35} height={35} />
                            <div >
                                <p className='text-xl font-medium'>{item.title}</p>
                                <p className='text-sm text-neutral-500 mt-1'>{item.text}</p>
                            </div>


                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Steps
