"use client"
import {motion} from "framer-motion"
import SkillCard from "./SkillCard";


const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "photoshop",
            percent: 80,
            category: "high"
        },
        {
            id: 2,
            name: "illustrator",
            percent: 50,
            category: "medium"
        },
        {
            id: 3,
            name: "figma",
            percent: 40,
            category: "medium"
        },
        {
            id: 4,
            name: "canva",
            percent: 70,
            category: "high"
        },
        {
            id: 5,
            name: "coreldraw",
            percent: 90,
            category: "high"

        }
    ]

    return (
        <motion.div id="skills"
            initial={{y: "200px", opacity: 0}}
            whileInView={{y: "0", opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
        className="pt-[15rem] flex flex-col mx-auto px-0 md:px-8"> 
            <h1 className="w-full flex items-center justify-center font-semibold text-[1.5rem] md:text-[2rem] mb-[5rem]">
                Skills & Technologies
            </h1>
            <ul className="mt-[2rem] w-full gap-5 px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                {skills.map(skill => (
                    <SkillCard 
                        key={skill.id}
                        id={skill.id}
                        name={skill.name} 
                        percent={skill.percent}
                        category={skill.category}
                    
                    />
                ))}
            </ul>
        </motion.div>
    )
};

export default Skills