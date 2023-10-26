import React from 'react'

import ProjectItem from './ProjectItem'

import boonjiImg from '../assets/boonji.png'
import errorImg from '../assets/el-tiempo-del-error.png'
import micaminoImg from '../assets/mi-camino.png'
import pieImg from '../assets/pie-del-monte.png'
import miHistoriaImg from '../assets/mi-historia.png'
import midboImg from '../assets/suenos-distantes.png'
import testimoniosImg from '../assets/testimonios.png'

const ProjectWeb = () => {

    const web = [
        {
            id: 'error',
            img: errorImg,
            title: "El tiempo del error",
            desc: "Skills: HTML, CSS, JavaScript",
            enlace:"https://eltiempodelerror.moebiusanimacion.com/"
        },
        {
            id: 'boonji',
            img: boonjiImg,
            title: "Boonji Project",
            desc: "Skills: React, Javascript, HTML, CSS, Git",
            enlace:"https://www.boonjiproject.com/"
        },
        {
            id: 'midbo',
            img: midboImg,
            title: "Sueños Distantes",
            desc: "Skills: P5JS, Javascript, HTML, CSS",
            enlace:"https://suenosdistantes.com/"            
        },
        {
            id: 'testimonios',
            img: testimoniosImg,
            title: "Mi Historia",
            desc: "Skills: P5JS, Javascript, HTML, CSS",
            enlace:"https://mihistoria.co/testimonios//"
        },
        {
            id: 'mi-camino',
            img: micaminoImg,
            title: "Mi Camino",
            desc: "Skills: GSAP, Javascript, HTML5",
            enlace:"https://mihistoria.co/mi-camino/"
        },
        {
            id: 'pie',
            img: pieImg,
            title: "Petróleo en el piedemonte amazónico",
            desc: "Skills: GSAP, Javascript, HTML5",
            enlace:"https://salvemoselpiedemonte.ambienteysociedad.org.co/"
        },
        {
            id: 'mi-historia',
            img: miHistoriaImg,
            title: "Mi Historia",
            desc: "Skills: PHP, Javascript, Wordpress",
            enlace:"https://mihistoria.co/"
        },
        
    ]
    return (
        <>
            <p className='py-8 md:text-center text-justify'>These are the websites I've crafted during my career as a web developer. This compilation showcases an array of projects created for diverse clients, including institutions, foundations, and independent collaborative teams. </p>
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

export default ProjectWeb