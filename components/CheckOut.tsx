'use client'

import toast from 'react-hot-toast';
import { useAppDispatch } from "@/lib/hooks"
import { urlsliceActions } from "@/store/urlSlice";
import { RazorpayOptions } from '@/types';
import { useRouter } from 'next/navigation';



import Script from 'next/script'





declare global {
    interface Window {
        Razorpay: (options: RazorpayOptions) => {
            open: () => void;
            close: () => void;
            on: (event: string, callback: () => void) => void;
        };
    }

}

function CheckOut({ price, credits }: { price: string, credits: number }) {

    const dispatch = useAppDispatch()

    const priceNumber = parseFloat(price.replace(/[^0-9.]/g, ""));
    const amountInCents = Math.round(priceNumber * 100);

    console.log(amountInCents)

    const router = useRouter();

    const handlePayment = async () => {

        try {
            const response = await fetch("/api/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: 100 })
            })
            const data = await response.json()


            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
                amount: amountInCents,
                currency: 'USD',
                name: '',
                description: 'Test Transaction',
                order_id: data.orderId,
                handler: async function () {
                    const data = await fetch('/api/getcredit', {
                        method: 'POST',
                        body: JSON.stringify(credits)
                    })

                    console.log('UPDATED DATAAAA', data)

                    const response = await fetch("api/getcredit", {
                        method: "GET",
                    })

                    const dataItem = await response.json()

                    dispatch(urlsliceActions.setCredit(dataItem?.result?.creditBalance))
                    toast.success('Purchase Credit Successfully')
                    router.push('/')
                },

                prefill: {
                    name: 'Aman',
                    email: 'johndoe@example.com',
                    contact: '9999999999'
                },
                theme: {
                    color: '#3399cc'
                },


            }

            const rzp1 = window.Razorpay(options)
            rzp1.open();
        }
        catch (error) {
            console.log('PAYMENT FAILED', error)
        }
    }


    return (

        <div>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            {

                <button onClick={handlePayment} className='w-full bg-gray-800  text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>Purchase</button>

            }

        </div>

    )
}

export default CheckOut
