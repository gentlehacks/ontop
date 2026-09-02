"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { FiFigma } from "react-icons/fi";
import { SiCanva } from "react-icons/si";

// Inline Custom SVGs replacing missing react-icons
const SiAdobeillustrator = () => (
    <svg role="img" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
        <path d="M0 0v24h24V0H0zm7.6 17.2l-.7-2.1H4.1l-.7 2.1H1.1l3.5-10.4h2.8l3.6 10.4H7.6zm10.7-3.1c0 2.2-1.4 3.3-3.6 3.3-2.1 0-3.3-1.1-3.3-3.1V6.8h2.3v7c0 .9.5 1.3 1.2 1.3.8 0 1.2-.4 1.2-1.3V6.8h2.3v7.3zM5.9 12.8L5.2 10l-.7 2.8h1.4z" />
    </svg>
);

const SiAdobephotoshop = () => (
    <svg role="img" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
        <path d="M0 0v24h24V0H0zm8.8 12.1c0 1.7-1.1 2.5-2.8 2.5H4.6v2.6H2.3V6.8h4c1.6 0 2.5.8 2.5 2.3 0 1.1-.6 1.8-1.5 2.1.9.2 1.5 1 1.5 2.1zm6.9.1c0 1-.3 1.7-.8 2.2-.6.5-1.5.7-2.7.7-.6 0-1.2-.1-1.6-.2v-2.1c.4.1.8.2 1.3.2.9 0 1.4-.4 1.4-1.1 0-.6-.5-.9-1.5-1.3-1.4-.5-2.2-1.2-2.2-2.5 0-1.9 1.4-2.9 3.4-2.9.6 0 1.2.1 1.6.2v2.1c-.4-.1-.8-.1-1.2-.1-.8 0-1.4.3-1.4.9 0 .5.4.8 1.4 1.2 1.5.5 2.3 1.2 2.3 2.5zm-6.5-2.9c0-.6-.4-.9-1-.9H4.6v1.9h1.1c.6-.1 1-.4 1-1z" />
    </svg>
);

const SiCoreldraw = () => (
    <svg role="img" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.622 17.544l-2.006-2.522c1.782-.676 3.125-2.176 3.125-4.244 0-3.048-2.481-4.872-5.717-4.872H6.918v12.261h2.247v-4.113h1.493l1.83 4.113h3.134zm-6.951-6.226v-2.27h1.838c2.022 0 3.14.73 3.14 2.164 0 1.405-1.125 2.138-3.14 2.138H8.671v-2.032z" />
    </svg>
);

const HeroSection = () => {

    return (
        <div className="w-full flex flex-col items-center justify-center mt-[8rem] md:mt-[2rem] px-6 md:px-8">
            <div className="w-full flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    initial={{ y: "200px", opacity: 0 }}
                    animate={{ y: "0", opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex flex-col justify-center md:justify-left px-6 md:px-8">
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ x: "150px", width: "2px" }}
                            animate={{ x: "0px", width: "40px" }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                            className="w-2 h-1 rounded-full bg-yellow-600 mr-2"
                        />
                        <h1 className="font-medium text-lg md:text-2xl">
                            Hi i&apos;m OnTop
                        </h1>
                    </div>

                    <h1 className="font-semibold text-[2.5rem] md:text-[4rem] mt-2">
                        <span className="text-yellow-500">Graphic </span> Designer
                    </h1>
                    <div className="w-full hidden md:flex flex items-center gap-6 mt-[5rem]">
                        <Link href="#projects"  >
                            <motion.button
                                initial={{ y: 0 }}
                                whileTap={{ y: "3px" }}
                                whileHover={{ y: "3px" }}
                                className="px-6 py-3 rounded-full border-2 boder-yellow-500 cursor-pointer">Explore</motion.button>
                        </Link>
                        <Link href="#contact"  >
                            <motion.button
                                initial={{ y: 0 }}
                                whileTap={{ y: "3px" }}
                                whileHover={{ y: "3px" }}
                                className="px-6 py-3 rounded-full bg-yellow-600 cursor-pointer ">Contact Me</motion.button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="flex flex-col items-center justify-center w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem]">
                    <Image
                        src={"/ontop.png"}
                        width={500}
                        height={500}
                        alt="Ontop image"
                        priority
                        className="w-full h-full"
                    />
                    <ul className="mt-5 flex items-center justify-center gap-5">
                        <li>
                            <SiAdobephotoshop />
                        </li>
                        <li>
                            <SiAdobeillustrator />
                        </li>
                        <li>
                            <FiFigma />
                        </li>
                        <li>
                            <SiCoreldraw />
                        </li>
                        <li>
                            <SiCanva />
                        </li>
                    </ul>
                </motion.div>
            </div>
            <div className="md:hidden w-full flex items-center justify-center gap-6 mt-[5rem]">
                <button className="px-6 py-3 rounded-full border-2 boder-yellow-500 ">Download CV</button>
                <Link href="/page2">
                    <button className="px-6 py-3 rounded-full bg-yellow-600 ">Hire Me</button>
                </Link>

            </div>
        </div>
    )
};

export default HeroSection;