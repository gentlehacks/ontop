"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaTwitter, FaX, FaXTwitter } from "react-icons/fa6";

const Contact = () => {

    return (
        <motion.div id="contact"
            initial={{y: "200px", opacity: 0}}
            whileInView={{y: "0", opacity: 1}}
            transition={{duration: 0.4, ease: 'easeInOut'}}
            className="pt-[15rem] pb-[20rem] w-full flex flex-col items-center justify-center px-6 md:px-8">
            <h1 className="text-center text-[1.8rem] md:text-[2rem] font-semibold"><span className=" text-yellow-500">Contact</span> Me</h1>
            <p className="text-center max-w-[35rem] text-gray-300 text-lg md:text-1xl px-6 mt-2">Want a beautiful and modern design? contact me on one of my social links bellow.</p>
            <div className="bg-gray-950 w-full place-items-center border-1 border-gray-800 rounded-4xl py-6 px-4 mt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link target="_blank" rel="noopener noreferer" href="https://facebook.com/profile.php?id=61579717953748" 
                className="border-1 border-gray-700 w-[100%] hover:border-yellow-200 transition-all duration-200 backdrop-filter backdrop-blur-md bg-gray-850 p-6 rounded-3xl shadow-lg flex flex-col max-w-20rem"> 
                    <FaFacebook className="text-[2.5rem] text-blue-400" />
                    <div className="mt-6 text-center bg-yellow-600 bg-opacity-20 px-2 rounded-full font-medium">
                        <p className="font-medium">Facebook</p>
                    </div>

                    <p className="mt-8 text-gray-300 w-[80%] h-auto">@61579717953748</p>
                </Link>
                <Link target="_blank" rel="noopener noreferer" href="https://instagram.com/aliyusuleiman55277" className="border-1 border-gray-700 w-[100%] hover:border-yellow-200 transition-all duration-200 backdrop-filter backdrop-blur-md bg-gray-850 p-6 rounded-3xl shadow-lg flex flex-col max-w-20rem"> 
                    <FaInstagram className="text-[2.5rem] text-pink-400" />
                    <div className="mt-6 text-center bg-yellow-600 bg-opacity-20 px-2 rounded-full font-medium">
                        <p className="font-medium">Instagram</p>
                    </div>

                    <p className="mt-8 text-gray-300 w-[80%] h-auto">@aliyusuleiman55277</p>
                </Link>
                <Link target="_blank" rel="noopener noreferer" href="https://pinterest.com/iamontop84"
                 className="border-1 border-gray-700 w-[100%] hover:border-yellow-200 transition-all duration-200 backdrop-filter backdrop-blur-md bg-gray-850 p-6 rounded-3xl shadow-lg flex flex-col max-w-20rem"> 
                    <FaPinterest className="text-[2.5rem] text-red-400" />
                    <div className="mt-6 text-center bg-yellow-600 bg-opacity-20 px-2 rounded-full font-medium">
                        <p className="font-medium">Pinterest</p>
                    </div>

                    <p className="mt-8 text-gray-300 w-[80%] h-auto">@iamontop84</p>
                </Link>
                <Link target="_blank" rel="noopener noreferer" href="https://x.com/rahama22" className="border-1 border-gray-700 w-[100%] hover:border-yellow-200 transition-all duration-200 backdrop-filter backdrop-blur-md bg-gray-850 p-6 rounded-3xl shadow-lg flex flex-col max-w-20rem"> 
                    <FaXTwitter className="text-[2.5rem]" />
                    <div className="mt-6 text-center bg-yellow-600 bg-opacity-20 px-2 rounded-full font-medium">
                        <p className="font-medium">X/Twitter</p>
                    </div>

                    <p className="mt-8 text-gray-300 w-[80%] h-auto">@rahama22</p>
                </Link>
                <Link target="_blank" rel="noopener noreferer" href="https://tiktok.com/rahamacomputers01" className="border-1 border-gray-700 w-[100%] hover:border-yellow-200 transition-all duration-200 backdrop-filter backdrop-blur-md bg-gray-850 p-6 rounded-3xl shadow-lg flex flex-col max-w-20rem"> 
                    <FaTiktok className="text-[2.5rem]" />
                    <div className="mt-6 text-center bg-yellow-600 bg-opacity-20 px-2 rounded-full font-medium">
                        <p className="font-medium">TikTok</p>
                    </div>

                    <p className="mt-8 text-gray-300 w-[80%] h-auto">@rahamacomputers01</p>
                </Link>
                <Link target="_blank" rel="noopener noreferer" href="https://linkedin.com/in/iam-ontop-7bb1b2392" 
                className="border-1 border-gray-700 w-[100%] hover:border-yellow-200 transition-all duration-200 backdrop-filter backdrop-blur-md bg-gray-850 p-6 rounded-3xl shadow-lg flex flex-col max-w-20rem"> 
                    <FaLinkedin className="text-[2.5rem] text-blue-400" />
                    <div className="mt-6 text-center bg-yellow-600 bg-opacity-20 px-2 rounded-full font-medium">
                        <p className="font-medium">LinkedIn</p>
                    </div>

                    <p className="mt-8 text-gray-300 w-[80%] h-auto">@iam-ontop-7bb1b2392</p>
                </Link>
                <Link target="_blank" rel="noopener noreferer" href="https://mailto:iamontop84@gmail.com" className="border-1 border-gray-700 w-[100%] hover:border-yellow-200 transition-all duration-200 backdrop-filter backdrop-blur-md bg-gray-850 p-6 rounded-3xl shadow-lg flex flex-col max-w-20rem"> 
                    <CgMail className="text-[2.5rem]" />
                    <div className="mt-6 text-center bg-yellow-600 bg-opacity-20 px-2 rounded-full font-medium">
                        <p className="font-medium">Email</p>
                    </div>

                    <p className="mt-8 text-gray-300 w-[80%] h-auto">@iamontop84@gmail.com</p>
                </Link>
            </div>
        </motion.div>
    )
};

export default Contact