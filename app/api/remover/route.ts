
import { getCredit } from '@/lib/actions/userActions/route';
import { MongoDbConnect } from '@/lib/database/connect';
import User from '@/lib/database/models/userModel';
import { handleError } from '@/types';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import fs from 'node:fs'




export async function GET() {
    const UpdateCredit = async () => {
        const user = await currentUser()

        if (!user) {
            return
        }

        try {
            await MongoDbConnect()
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            const credit: any = await getCredit()

            const UserDetail = await User.updateOne(
                { clerkId: user.id },
                { $set: { creditBalance: credit.result.creditBalance - 1 } }
            );

            if (UserDetail) {

                return UserDetail
            }
        } catch (error) {
            handleError(error)
        }
    }

    const Credit = await UpdateCredit()

    if (!Credit) {
        return new NextResponse(JSON.stringify({ message: "Credit Not Updated" }), { status: 400 });
    }
    return new NextResponse(JSON.stringify({ result: Credit, message: 'Credit Updated' }), { status: 200 });

}


export async function POST(req: Request) {
    try {
        const data = await req.formData()


        const imageFile = data.get("image_file");

        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        async function removeBg(blob: any) {
            const formData = new FormData();
            formData.append("size", "auto");
            formData.append("image_file", blob);

            const response = await fetch("https://api.remove.bg/v1.0/removebg", {
                method: "POST",
                headers: { "X-Api-Key": process.env.BGREMOVER_KEY! },
                body: formData,
            });

            if (response.ok) {

                return await response.arrayBuffer();

            } else {
                throw new Error(`${response.status}: ${response.text()}`);
            }
        }

        // const inputPath = "/path/to/file.jpg";
        // const fileBlob = await fs.openAsBlob(inputPath)
        const rbgResultData = await removeBg(imageFile);

        fs.writeFileSync("no-bg.png", Buffer.from(rbgResultData));
        const base64Image = Buffer.from(rbgResultData).toString('base64');

        return new NextResponse(JSON.stringify({ image: base64Image, message: "Background removed successfully" }), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error }), { status: 500 });
    }
}