"use client"
import { FiFigma } from "react-icons/fi";
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiCoreldraw } from "react-icons/si";

interface Props {
    id: number;
    name: string;
    percent: number;
    category: string;
}

const SkillCard = ({id, name, percent, category}: Props) => {

    return (
        <li key={id} className="relative flex flex-col items-center justify-center p-5 hover:scale-[1.1] 
        transition-all duration-200 backdrop-filter backdrop-blur-lg
         border-1 border-gray-600 hover:border-yellow-600 rounded-lg shadow-md">
            {name == "photoshop" ? (
                <SiAdobephotoshop className="text-[3rem]" />
            ): name == "illustrator" ? (
                <SiAdobeillustrator className="text-[3rem]" />
            ) : name == "coreldraw" ? (
                <SiCoreldraw className="text-[3rem]" />
            ) : name == "figma" ? (
                <FiFigma className="text-[3rem]" />
            ): name == "canva" ? (
                <SiCanva className="text-[3rem]" />
            ): name == "coreldraw" ? (
                <SiCoreldraw className="text-[3rem]" />
            ) :(
                <SiAdobephotoshop className="text-[1rem]" />
            )}
            <h2 className="mt-4 mb-5 md:mb-0 text-lg font-semibold">{name}</h2>
            <div className={`absolute bottom-2 right-3 text-center bg-gray-900 rounded-full px-2
                ${category === "low" 
                    ? 'bg-red-400' 
                    : category === "medium" 
                    ? "bg-yellow-500" 
                    : category === "high" 
                    ? "bg-green-500" 
                    : ""}    
            `}>
                {percent}%
            </div>
        </li>
    )
}

export default SkillCard;