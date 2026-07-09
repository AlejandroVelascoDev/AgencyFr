import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DALEXDEV — Elevating Digital Excellence",
  description:
    "DALEXDEV is a creative studio specializing in web design, development, UI/UX, and product design. We craft immersive digital experiences that make brands stand out.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#ffff] text-black ">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
