import ReduxProvider from "@/components/ReduxProvider";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="sm:flex  sm:w-[100%] sm:h-screen sm:flex-col">

            <Navbar />
            <main className="sm:flex-1 sm:w-[100%] " suppressHydrationWarning>

                {children}


            </main>
            <Footer />

        </div>
    );
}
