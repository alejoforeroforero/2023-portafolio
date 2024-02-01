import React from 'react'

import ProjectItem from './ProjectItem'

import webDevImg from '../assets/web-development.png'
import flashCardImg from '../assets/flashcard.png'

const ProjectDemos = () => {
    const web = [
        {
            id: 'webDev',
            img: webDevImg,
            title: "My Portafolio Web",
            desc: "Skills: React, TailwindCss",
            enlace:""
        },
        {
            id: 'flashCard',
            img: flashCardImg,
            title: "Flash Card Api",
            desc: "Skills: React, Redux Tool Kit, Css Grid, Api calls",
            enlace:"https://flashcarddemo.alejoforero.com/"
        },
    ]
    return (
        <>
            <p className='md:text-center text-justify py-8'>Over the past year, my primary focus has been on honing my coding skills, with a strong emphasis on mastering the latest ECMAScript specifications and delving into the intricacies of React and the MERN stack. Below, you'll discover a collection of demos I've crafted for the purpose of enhancing my proficiency, demonstrating my expertise in action.</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                {web.map(project => (
                    <ProjectItem
                        key={project.id}
                        img={project.img}
                        title={project.title}
                        desc={project.desc}
                        enlace={project.enlace}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectDemos