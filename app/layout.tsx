import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css"
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Agentic Next App',
  description: 'A Next.js application with Tailwind CSS, Framer Motion, and GSAP',
}




 export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en">
    <body className="bg-[#ffff] text-black ">
     
    
     
      
    <main className="">{children}</main>
  </body>
 </html>
  );
}
 