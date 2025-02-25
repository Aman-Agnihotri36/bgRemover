'use client'
import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs';
import { Label } from './ui/label'
import { Input } from './ui/input'
import Image from 'next/image'
import { urlsliceActions } from '@/store/urlSlice'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import toast from 'react-hot-toast';
import { fileToBase64 } from '@/lib/assets'

function HeroSection() {

    const { isSignedIn } = useUser();
    const credit = useAppSelector((state) => state.url.credit)
    const [Loader, setLoader] = useState(false)
    const [Credit, setCredit] = useState(credit)

    const dispatch = useAppDispatch()
    const router = useRouter()

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const handleClick = (e: any) => {
        e.preventDefault();
        router.push('/sign-in')
    }

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const handleInput = async (e: any) => {

        if (Credit !== 0) {
            setLoader(true)
        }

        const checkUserCredit = await fetch("api/getcredit", {
            method: "GET",
        });


        const checkCredit = await checkUserCredit.json()
        setCredit(checkCredit)
        if (checkCredit?.result?.creditBalance < 1) {
            toast.error('No Credit Available')
            setTimeout(() => {
                router.push('/credit');
            }, 2000);

            return
        }
        const value = e.target.files?.[0]
        const formData = new FormData();
        formData.set("image_file", value);
        if (value) {
            fileToBase64(value)
                .then(base64Image => {
                    dispatch(urlsliceActions.setOriginal(base64Image));
                })
                .catch(err => console.error("Error converting file:", err));
        }


        const response = await fetch("api/remover", {
            method: "POST",

            body: formData,
        });




        const data = await response.json()
        if (data) {
            const imageUrl = `data:image/png;base64,${data.image}`;

            dispatch(urlsliceActions.setUrl(imageUrl))
            const response = await fetch("api/remover", {
                method: "GET",


            });

            if (response) {
                const response = await fetch("api/getcredit", {
                    method: "GET",
                });

                const data = await response.json()
                dispatch(urlsliceActions.setCredit(data?.result?.creditBalance))
            }


            router.push('/result')

            setLoader(false)
        }


    }
    return (
        <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
            <div >
                <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden' /> images for free.</h1>
                <p className='my-6 text-[15px] text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui veniam voluptatum <br /> quod consequuntur error, facilis dolorem deleniti possimus reprehenderit ipsum.</p>

                <div >
                    {isSignedIn ? (<div >  <Label htmlFor="picture" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700'>
                        <Image src='assets/upload_btn_icon.svg' alt='upload' width={15} height={15} />
                        {
                            !Loader ? <p className='text-white text-sm'>Upload Image</p> : (<p className='text-white text-sm'>Uploading...</p>)
                        }
                    </Label>
                        <Input onChange={handleInput} id="picture" type="file" accept='image/*' className='hidden' /> </div>) : (<div onClick={handleClick}> <Label htmlFor="picture" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700'>
                            <Image src='assets/upload_btn_icon.svg' alt='upload' width={15} height={15} />
                            {
                                !Loader ? <p className='text-white text-sm'>Upload Image</p> : (<p className='text-white text-sm'>Uploading...</p>)
                            }
                        </Label>
                            <Input onChange={handleInput} id="picture" type="file" accept='image/*' className='hidden' /></div>)}
                </div>
            </div>
            <div className='w-full max-w-md'>
                <Image src='/assets/header_img.png' alt='main' width={425} height={425} />
            </div>
        </div>
    )
}

export default HeroSection
