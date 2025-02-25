'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { urlsliceActions } from "@/store/urlSlice";
import Image from "next/image"
import { useEffect } from "react"


function Credit() {
    const url = useAppSelector((state) => state.url.credit)
    const dispatch = useAppDispatch()
    let item;
    useEffect(() => {
        async function getCred() {
            const response = await fetch("api/getcredit", {
                method: "GET",
            });

            const data = await response.json()
            item = data?.result?.creditBalance;



            dispatch(urlsliceActions.setCredit(item))
        }
        getCred()
    }, [url])

    const urlTwo = useAppSelector((state) => state.url.credit)
    return (
        <>
            <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700'>
                <Image src='/assets/credit_icon.png' alt='' width={20} height={20} />
                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits: {urlTwo}</p>
            </button>
        </>
    )
}

export default Credit
