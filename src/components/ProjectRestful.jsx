import React from 'react'

import ProjectItem from './ProjectItem'

import visitanteImg from '../assets/visitante-sonoro.png'
import compraImg from '../assets/compra.png'

const ProjectRestful = () => {
    const web = [
        {
            id: 'visitante',
            img: visitanteImg,
            title: "Visitante sonoro",
            desc: "Skills: HTML, CSS, JavaScript, NodeJs, MongoDB, Git",
            enlace:"https://alejoforero.com/visitantesonoro/web/"
        },
        {
            id: 'compra',
            img: compraImg,
            title: "Compra lo nuestro",
            desc: "Skills: HTML, CSS, Angular, Git",
            enlace:"https://compralonuestro.co/"
        },
    ]
    return (
        <>
            <p className='md:text-center text-justify py-8'>My experience with REST applications began at the Colombian development firm, Ivolución, where I worked as a frontend developer for six months in 2021. In 2023, I decided to further enhance my skills by mastering the MERN stack. This led to my first venture as a FullStack RESTful API developer, creating the "Visitante Sonoro" project at Nova Et Vetera, which is currently in progress.</p>
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

export default ProjectRestful