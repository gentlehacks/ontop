"use client"
import { FiFigma } from "react-icons/fi";
import { SiCanva } from "react-icons/si";

// Inline Custom SVGs replacing missing react-icons
const SiAdobeillustrator = () => (
  <svg role="img" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M0 0v24h24V0H0zm7.6 17.2l-.7-2.1H4.1l-.7 2.1H1.1l3.5-10.4h2.8l3.6 10.4H7.6zm10.7-3.1c0 2.2-1.4 3.3-3.6 3.3-2.1 0-3.3-1.1-3.3-3.1V6.8h2.3v7c0 .9.5 1.3 1.2 1.3.8 0 1.2-.4 1.2-1.3V6.8h2.3v7.3zM5.9 12.8L5.2 10l-.7 2.8h1.4z"/>
  </svg>
);

const SiAdobephotoshop = () => (
  <svg role="img" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M0 0v24h24V0H0zm8.8 12.1c0 1.7-1.1 2.5-2.8 2.5H4.6v2.6H2.3V6.8h4c1.6 0 2.5.8 2.5 2.3 0 1.1-.6 1.8-1.5 2.1.9.2 1.5 1 1.5 2.1zm6.9.1c0 1-.3 1.7-.8 2.2-.6.5-1.5.7-2.7.7-.6 0-1.2-.1-1.6-.2v-2.1c.4.1.8.2 1.3.2.9 0 1.4-.4 1.4-1.1 0-.6-.5-.9-1.5-1.3-1.4-.5-2.2-1.2-2.2-2.5 0-1.9 1.4-2.9 3.4-2.9.6 0 1.2.1 1.6.2v2.1c-.4-.1-.8-.1-1.2-.1-.8 0-1.4.3-1.4.9 0 .5.4.8 1.4 1.2 1.5.5 2.3 1.2 2.3 2.5zm-6.5-2.9c0-.6-.4-.9-1-.9H4.6v1.9h1.1c.6-.1 1-.4 1-1z"/>
  </svg>
);

const SiCoreldraw = () => (
  <svg role="img" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.622 17.544l-2.006-2.522c1.782-.676 3.125-2.176 3.125-4.244 0-3.048-2.481-4.872-5.717-4.872H6.918v12.261h2.247v-4.113h1.493l1.83 4.113h3.134zm-6.951-6.226v-2.27h1.838c2.022 0 3.14.73 3.14 2.164 0 1.405-1.125 2.138-3.14 2.138H8.671v-2.032z"/>
  </svg>
);

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
         border-1 border-gray-600 hover:border-yellow-600 rounded-3xl shadow-md">
            {name == "photoshop" ? (
                <SiAdobephotoshop  />
            ): name == "illustrator" ? (
                <SiAdobeillustrator />
            ) : name == "coreldraw" ? (
                <SiCoreldraw  />
            ) : name == "figma" ? (
                <FiFigma className="text-[3rem]" />
            ): name == "canva" ? (
                <SiCanva className="text-[3rem]" />
            ): name == "coreldraw" ? (
                <SiCoreldraw  />
            ) :(
                <SiAdobephotoshop  />
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

export default SkillCard