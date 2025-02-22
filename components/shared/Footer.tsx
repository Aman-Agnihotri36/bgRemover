import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
            <Image src='assets/logo.svg' alt='' width={150} height={150} />
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden '>Copyright @Aman.dev | All right reserved</p>
            <div className='flex gap-1'>
                <Image src='assets/facebook_icon.svg' alt='' width={45} height={45} />
                <Image src='assets/twitter_icon.svg' alt='' width={45} height={45} />
                <Image src='assets/google_plus_icon.svg' alt='' width={45} height={45} />
            </div>
        </div>
    )
}

export default Footer
