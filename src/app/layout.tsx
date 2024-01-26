import type { Metadata } from "next";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
});

import "./globals.css";
import Navbar from "@/components/main/navbar/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "Rhythm Merge",
  description: "Find your favourite artists and bands in one place!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={heebo.className} lang="en">
      <body className="flex min-h-screen flex-col items-start justify-start">
        <Navbar />

        <main className="mx-auto mt-[72px] h-full w-full max-w-5xl flex-1 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
