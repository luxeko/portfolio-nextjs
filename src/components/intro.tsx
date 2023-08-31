"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";

const Intro = () => {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className={`flex items-center justify-center`}>
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image src={"https://ducanh-public-images.s3.ap-southeast-1.amazonaws.com/avatar.jpg"} alt="Luxeko" width={192} height={192} quality={95} priority className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl" />
                    </motion.div>
                    <motion.span
                        className="text-3xl absolute bottom-0 right-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-4 px-4 font-medium text-2xl leading-[1.5] sm:text-4xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I'm Luxeko.</span> I'm a <span className="font-bold">full-stack website developer</span> with <span className="font-bold">more than 2 years</span> of experience. I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React, Java and Nodejs</span>.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href={"#contacts"} className={`bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group`}>
                    Contact me here <BsArrowRight className={`opacity-70 group-hover:translate-x-1 transition`} />{" "}
                </Link>
                <a href="/public/Le-Kha-Duc-Anh-CV.pdf" download className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group border border-black/10">
                    Download CV <BsDownload className="opacity-60 group-hover:translate-x-1 transition" />
                </a>
                <a href="https://www.linkedin.com/in/luxeko/" target="_blank" className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group border border-black/10">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/luxeko" target="_blank" className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group border border-black/10">
                    <BsGithub />
                </a>
            </motion.div>
        </section>
    );
};

export default Intro;
