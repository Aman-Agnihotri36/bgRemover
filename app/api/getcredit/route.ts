import { MongoDbConnect } from "@/lib/database/connect"
import User from "@/lib/database/models/userModel"
import { handleError } from "@/types"
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { getCredit } from '@/lib/actions/userActions/route';

export async function GET() {
    const getCreditClient = async () => {
        const user = await currentUser()

        if (!user) {
            return
        }

        try {
            await MongoDbConnect()

            const UserDetail = await User.findOne({ clerkId: user?.id })

            if (UserDetail) {
                return UserDetail
            }
        } catch (error) {
            handleError(error)
        }
    }

    const Credit = await getCreditClient()
    if (!Credit) {
        return new NextResponse(JSON.stringify({ message: "Credit Not Updated" }), { status: 400 });
    }
    return new NextResponse(JSON.stringify({ result: Credit, message: 'Credit Updated' }), { status: 200 });
}

export async function POST(req: Request) {
    const creditNo = await req.json()

    const SubscriptionCredit = async () => {
        const user = await currentUser()

        if (!user) {
            return
        }
        const currentCredit = await getCredit()
        try {
            await MongoDbConnect()

            const UserDetail = await User.updateOne({ clerkId: user?.id }, { $set: { creditBalance: currentCredit?.result?.creditBalance + creditNo } })

            if (UserDetail) {
                return UserDetail
            }
        } catch (error) {
            handleError(error)
        }
    }

    const Credit = await SubscriptionCredit()
    if (!Credit) {
        return new NextResponse(JSON.stringify({ message: "Credit Not Updated" }), { status: 400 });
    }
    return new NextResponse(JSON.stringify({ result: Credit, message: 'Credit Updated' }), { status: 200 });
}