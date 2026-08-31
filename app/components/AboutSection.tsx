"use client"
import {motion} from "framer-motion"
import Image from "next/image"

const AboutSection = () => {

    return (
        <motion.div id="about"
            initial={{y: "250px", opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
        className="pt-[15rem] w-full flex flex-col items-center justify-center">
            <h1 className="text-[1.5rem] md:text-[2rem] font-semibold">About Me</h1>
            <div className="mt-[5rem] flex flex-col md:flex-row items-center justify-between">
                <div>
                    <Image 
                        src={"/ontop.png"}
                        alt="ontop"
                        width={500}
                        height={500}
                        priority
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="p-2 px-3 md:p-3 rounded-xl border-1 border-yellow-600 shadow-md">
                        <p className="text-xl text-gray-300 leading-[2]">
                            I&apos;m a Nigerian graphic designer specializing in brand identity, digital design, 
                            and visual communication. With experience using 
                            <span className="text-yellow-500"> Photoshop</span>,  
                            <span className="text-yellow-500"> Figma</span>,  
                            <span className="text-yellow-500"> CorelDRAW</span>,  
                            <span className="text-yellow-500"> Adobe Illustrator</span>, and  
                            <span className="text-yellow-500"> Canva</span>, I create designs that are both visually compelling and strategically effective.
                            I&apos;m committed to producing high-quality work that reflects each client&apos;s vision 
                            while maintaining consistency and creativity. Whether it&apos;s branding, UI design, 
                            or marketing graphics, I aim to deliver designs that make a strong and lasting impression.
                        </p>
                    </div>
                    <div className="w-full flex items-center justify-between mt-3">
                        <div className="w-full h-1 bg-gray-700" />
                        <p className="text-gray-300 text-center w-[170px] ml-4">About Me</p>
                        <div className="w-full h-1 bg-gray-700" />
                    </div>
                </div>
                
                
            </div>
        </motion.div>
    )
}

export default AboutSection