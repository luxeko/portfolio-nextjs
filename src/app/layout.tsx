import React from "react";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
    title: "Luxeko - Portfolio",
    description: "Luxeko is a website developer with more than 2 years of experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <link rel="icon" href="https://ducanh-public-images.s3.ap-southeast-1.amazonaws.com/coding-2.png" type="image/x-icon" />
            <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28`}>
                <div className={`bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]`}></div>
                <div className={`bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]`}></div>

                <Header />
                {children}
            </body>
        </html>
    );
}
