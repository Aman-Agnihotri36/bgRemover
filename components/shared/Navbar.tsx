import React from 'react'
import Image from 'next/image'

import { Button } from '../ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
// import { getCredit } from '@/lib/actions/userActions/route'
import { currentUser } from '@clerk/nextjs/server'
import Credit from './Credit'

async function Navbar() {
    const user = await currentUser()
    const fullName = `${user?.firstName} ${user?.lastName}`;



    // const item = await getCredit()
    // console.log('SEE THIS', item)
    return (
        <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
            <Image width={165} height={165} src='/assets/logo.svg' alt='logo' />
            <div className='flex items-center gap-5'>
                <SignedIn>
                    <div className='flex relative left-4 items-center gap-2 sm:gap-3'>
                        <Credit />
                        <p className='text-gray-600 max-sm:hidden'>Hi, {fullName}</p>
                    </div>
                    < UserButton signInUrl='/' />


                </SignedIn>

                <SignedOut>

                    <Link href='/sign-in'>
                        <Button>Get started <Image src='/assets/arrow_icon.svg' alt='arrow' width={15} height={15} /></Button>
                    </Link>

                </SignedOut>
            </div>

        </div>
    )
}

export default Navbar
