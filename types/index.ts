export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
}

export const handleError = (error: unknown) => {
    console.error(error)
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export type RazorpayOptions = {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;

};