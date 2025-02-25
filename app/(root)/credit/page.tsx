import ByCredit from '@/components/ByCredit'
import { auth } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

async function Credit() {
    const { userId } = await auth();

    if (!userId) {
        return <RedirectToSignIn />;
    }


    return (

        <ByCredit />

    )
}

export default Credit
