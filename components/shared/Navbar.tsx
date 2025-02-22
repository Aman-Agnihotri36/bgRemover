import React from 'react'
import Image from 'next/image'

import { Button } from '../ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
            <Image width={165} height={165} src='/assets/logo.svg' alt='logo' />
            <div className='flex items-center gap-5'>
                <SignedIn>

                    <UserButton signInUrl='/' />
                    <Button>Get started <Image src='/assets/arrow_icon.svg' alt='arrow' width={15} height={15} /></Button>

                </SignedIn>

                <SignedOut>
                    <Button>
                        <Link href='/sign-in'>
                            Login
                        </Link>
                    </Button>
                </SignedOut>
            </div>

        </div>
    )
}

export default Navbar
