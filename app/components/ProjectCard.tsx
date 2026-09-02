"use client"

import Image from "next/image";

interface Props {
    id: number;
    image: string;
    name: string;
}

const ProjectCard = ({id, image, name}: Props) => {

    return (
        <li className="relative overflow-hidden border-1 border-yellow-600 rounded-3xl shadow-md h-100">
            <Image
                src={`/${image}.jpg`}
                alt={name}
                width={500}
                height={500}
                priority
                className="w-full hover:scale-[1.1] taransition-all duration-200"
            />
            <div className="absolute bottom-0 left-0 w-full pt-20 bg-gradient-to-b 
            from-[rgba(0, 0, 0, 0)] via-[rgba(173, 162, 7, 0.29)] to-[rgb(0,0,0)] ">
                <h1 className="text-[1rem] text-yellow-500 font-semibold flex items-center ml-4">
                  <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2" /> {name}
                </h1>
            </div>
        </li>
    )
}

export default ProjectCard