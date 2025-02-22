'use server'

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