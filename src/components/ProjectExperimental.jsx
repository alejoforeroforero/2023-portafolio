import React from 'react'

import ProjectItem from './ProjectItem'

import personalImg from '../assets/website.png'
import trozosImg from '../assets/trozos.png'
import lineasImg from '../assets/lineas-de-fuga.png'
import luzImg from '../assets/luz-habitante.png'
import vigilantesImg from '../assets/vigilantes.png'
import circuloImg from '../assets/circulo.png'
import huidaImg from '../assets/huida.png'
import mapaImg from '../assets/mapa-sonoro.png'
import secImg from '../assets/secuenciador.png'


const ProjectExperimental = () => {
    const web = [
        {
            id: 'personal',
            img: personalImg,
            title: "Personal Website",
            desc: "Skills: HTML, CSS, JavaScript, P5JS",
            enlace:"https://alejoforero.com/"
        },
        {
            id: 'trozos',
            img: trozosImg,
            title: "Trozos",
            desc: "Skills: HTML, CSS, JavaScript, P5JS",
            enlace:"https://trozos.alejoforero.com/"
        },
        {
            id: 'lineas',
            img: lineasImg,
            title: "Lineas de fuga",
            desc: "Skills: HTML, CSS, JavaScript, P5JS",
            enlace:"https://lineasdefuga.alejoforero.com/"
        },
        {
            id: 'luz',
            img: luzImg,
            title: "Luz habitante",
            desc: "Skills: HTML, CSS, JavaScript, P5JS",
            enlace:"https://luzhabitante.alejoforero.com/"
        },
        {
            id: 'vigilantes',
            img: vigilantesImg,
            title: "Nueva normalidad",
            desc: "Skills: HTML, CSS, JavaScript",
            enlace:"https://nuevanormalidad.alejoforero.com/"
        },
        {
            id: 'circulo',
            img: circuloImg,
            title: "Circulo autónomo",
            desc: "Skills: HTML, CSS, JavaScript, P5JS",
            enlace:"https://experimentos.alejoforero.com/circuloautonomo2/"
        },
        {
            id: 'huida',
            img: huidaImg,
            title: "Huida",
            desc: "Skills: HTML, CSS, JavaScript, P5JS",
            enlace:"https://experimentos.alejoforero.com/huida/"
        },
        {
            id: 'mapa',
            img: mapaImg,
            title: "Mapa sonoro",
            desc: "Skills: HTML, CSS, JavaScript, P5JS",
            enlace:"https://experimentos.alejoforero.com/mapasonoro/"
        },
        {
            id: 'secImg',
            img: secImg,
            title: "Secuenciador",
            desc: "Skills: HTML, CSS, JavaScript, P5JS",
            enlace:"https://experimentos.alejoforero.com/secuenciador-onda-senoidal/"
        },
        
    ]
    
    return (
        <>
            <p className='md:text-center text-justify py-8'>Exploring the realm of sound experimentation and the generation of images through code has played a pivotal role in my evolution as a programmer. Below, you'll find a compilation of the various experiments I've undertaken in this domain over the past few years along with the projects I've collaborated on with my students at the University</p>
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

export default ProjectExperimental