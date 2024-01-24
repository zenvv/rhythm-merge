import type { Metadata } from "next";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
});

import "./globals.css";
import Navbar from "@/components/main/navbar/Navbar";

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
      <body className=" flex h-full w-full flex-col items-center justify-center">
        <nav className="h-full w-full">
          <Navbar />
        </nav>
        <main className="mt-32 flex h-full w-full max-w-5xl flex-1 items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
