'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function BgSlider() {

    const [sliderPosition, setSliderPosition] = useState(40)

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const handleSliderChange = (e: any) => {
        setSliderPosition(e.target.value)
    }
    return (
        <div >
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Remove Background With High  <br /> Quality and Accuracy</h1>

            <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
                <Image src='/assets/image_w_bg.png' alt='img' width={600} height={600} style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }} />

                <Image className='absolute top-0 left-0 w-full h-full' src='/assets/image_wo_bg.png' alt='img' width={600} height={600} style={{ clipPath: `inset(0 0 0 ${sliderPosition}% )` }} />
            </div>

            <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} />
        </div>
    )
}

export default BgSlider
