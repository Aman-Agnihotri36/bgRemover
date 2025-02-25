import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import ReduxProvider from "@/components/ReduxProvider";
import { Toaster } from "react-hot-toast";

const IBMPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});



export const metadata: Metadata = {
  title: "bg.removal",
  description: "AI-powered image generator",
  icons: {
    icon: '/assets/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en" suppressHydrationWarning>
        <body
          className={cn('font-IBMPlex antialiased', IBMPlex.variable)}
        >
          <ReduxProvider>
            {children}
            <Toaster />
          </ReduxProvider>

        </body>
      </html>


    </ClerkProvider>
  );
}
