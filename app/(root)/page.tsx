
import HeroSection from "@/components/HeroSection";

import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import { auth } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";


export default async function Home() {

  const { userId } = await auth();

  if (!userId) {
    return <RedirectToSignIn />;
  }

  return (
    <div >
      <HeroSection />
      <Steps />

      <Testimonials />

    </div>
  );
}
