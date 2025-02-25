'use server'

import { currentUser } from "@clerk/nextjs/server"
import { MongoDbConnect } from "@/lib/database/connect"
import User from "@/lib/database/models/userModel"
import { CreateUserParams, handleError } from "@/types"

export const createUser = async (user: CreateUserParams) => {

    try {
        await MongoDbConnect()
        const newUser = await User.create(user)




        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        handleError(error)
    }
}

export const getCredit = async () => {
    const user = await currentUser()

    if (!user) {
        return
    }

    try {
        await MongoDbConnect()
        console.log(user?.id)
        const UserDetail = await User.findOne({ clerkId: user?.id })

        if (UserDetail) {
            return { success: true, result: UserDetail }
        }
    } catch (error) {
        handleError(error)
    }
}