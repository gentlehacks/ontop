"use client"
import {motion} from "framer-motion"

const Loading = () => {



    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-900">
            <div>
                <motion.div className="w-[2rem] h-[2rem] bg-yellow-600 rounded-full"
                    initial={{x: 0}}
                    animate={{x: "-50"}}
                />
            </div>
        </div>
    )
};

export default Loading