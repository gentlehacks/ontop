"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { FiFigma } from "react-icons/fi";
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiCoreldraw } from "react-icons/si";

const HeroSection = () => {

    return (
        <div className="w-full flex flex-col items-center justify-center mt-[8rem] md:mt-[2rem]">
            <div className="w-full flex flex-col md:flex-row items-center justify-between">
                <motion.div 
                    initial={{y: "200px", opacity: 0}}
                    animate={{y: "0", opacity: 1}}
                    transition={{duration: 1, ease: 'easeOut'}}
                className="flex flex-col justify-center md:justify-left px-6 md:px-8">
                    <div className="flex flex-col">
                        <motion.div 
                            initial={{x: "150px", width: "2px"}} 
                            animate={{x: "0px", width: "40px"}}
                            transition={{duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}
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
                        <Link href="/document/cv.docx" target="_blank" rel="noopener noreferer" >
                            <motion.button 
                                initial={{y: 0}}
                                whileTap={{y: "3px"}}
                                whileHover={{y: "3px"}}
                            className="px-6 py-3 rounded-full border-2 boder-yellow-500 cursor-pointer">Download CV</motion.button>
                        </Link>
                        <Link href="linkedin.com/in/iamontop84" target="_blank" rel="noopener noreferer" >
                             <motion.button 
                                initial={{y: 0}}
                                whileTap={{y: "3px"}}
                                whileHover={{y: "3px"}} 
                             className="px-6 py-3 rounded-full bg-yellow-600 cursor-pointer ">Hire Me</motion.button>
                         </Link> 
                    </div>
                </motion.div>
                <motion.div 
                    initial={{scale: 0.8, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut'}}
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
                            <SiAdobephotoshop className="text-2xl md:text-4xl" />
                        </li>
                        <li>
                            <SiAdobeillustrator className="text-2xl md:text-4xl" />
                        </li>
                        <li>
                            <FiFigma className="text-2xl md:text-4xl" />
                        </li>
                        <li>
                            <SiCoreldraw className="text-2xl md:text-4xl" />
                        </li>
                        <li>
                            <SiCanva className="text-2xl md:text-4xl" />
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