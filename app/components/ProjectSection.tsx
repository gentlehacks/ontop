"use client"

import {motion} from "framer-motion"
import Image from "next/image"
import ProjectCard from "./ProjectCard"

const projects = [
    {
        id: 1,
        image: "project-1",
        name: "Mheerah's special fura"
    },
    {
        id: 2,
        image: "project-2",
        name: "Umme's kitchen Flyer"
    },
    {
        id: 3,
        image: "project-3",
        name: "Abdool - logo"
    },
    {
        id: 4,
        image: "project-4",
        name: "Fauzee's kitchen"
    },
    {
        id: 5,
        image: "project-5",
        name: "Birthday Design"
    },
    {
        id: 6,
        image: "project-6",
        name: "Ummy kichen - logo"
    },
    {
        id: 7,
        image: "project-7",
        name: "Fauzee's kitchen - logo"
    },
    {
        id: 8,
        image: "project-8",
        name: "Politic's Design"
    },
    {
        id: 9,
        image: "project-9",
        name: "New month celeb."
    },
]

const ProjectSection = () => {

    return (
        <motion.div id="projects" 
            initial={{y: "200px", opacity: 0}}
            whileInView={{y: "0", opacity: 1}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
        className="pt-[15rem]">
            <h1 className="text-center font-semibold text-[1.5rem] md:text-[2rem]">Projects</h1>
            <ul className="mt-[4rem] gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id}
                        id={project.id}
                        image={project.image}
                        name={project.name} 
                    
                    />
                ))}
            </ul>
        </motion.div>
    )
}

export default ProjectSection