import React from 'react'
import { useCollapse } from 'react-collapsed'

import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: "Full-stack developer at Nova et vetera (Visitante Sonoro Project)",
        role: "Lead Developer in charge of creating the Project's Admin Interface, Database, and Frontend Prototype using JavaScript, React, Node.js, and MongoDB (Project in development)",
        details: "Binaural listening experiences broadcast from the Colombian countryside - This website is part of the agenda of the prestigious independent art agency Nova Et Vetera. Visitante Sonoro has been awarded Colombia's Cocrea Award, and its goal is to create a platform dedicated to sharing the sounds and enriching musical experiences of the Colombian rural environment."
    },
    {
        year: 2023,
        title: "Web Developer at Pontificia Javeriana University",
        details: "Website for the Award-Winning Project 'El Tiempo del Error' by the Faculty of Arts Teacher Scholarship Recipient at Pontificia Javeriana University",
        role: "Web development and design in JavaScript, CSS, and HTML.",
    },
    {
        year: 2023,
        title: "Web developer at Mi Historia Fundación",
        details: "Website for the comic 'Dabeiba: un viaje en el tiempo'. Project that aims to develop peacebuilding skills in children living in contexts of violence or vulnerability in Colombia.",
        role: "Web development and scroll animations using GSAP, Javascript and HTML.",
    },
    {
        year: 2022,
        title: "Web developer at Asociación Ambiente y Sociedad",
        details: "Website for the project ‘Petróleo en el piedemonte amazónico: la sangre de la tierra en disputa’. An interactive story that highlights the impacts of the oil industry in the Amazonian region of Colombia.",
        role: "Web development and scroll animations using GSAP, Javascript and HTML",
    },
    {
        year: 2022,
        title: "Web developer at Mi Historia Fundación",
        details: "Wordpress website for ‘Mi Historia’, Project that seeks to promote a peace agenda in some of the most marginalized communities in Colombia.",
        role: "Creation and development of a Custom wordpress theme in HTML, PHP and Javascript",
    },
    {
        year: 2021,
        title: "Web developer at ‘Trozos’ project",
        details: "An innovative website that offers an introspective exploration of the artwork 'Casa Cabuya' by artist Luz Angélica Cardona",
        role: "Web development and design in JavaScript, CSS, and HTML.",
    },
    {
        year: 2021,
        title: "Frontend developer at Involucion",
        details: "I was part of the frontend development team for six months on the project ‘Compra lo nuestro website’ developed by the Colombian software company Involución",
        role: "Creation of components for the Web Api in AngularJS.",
    },
    {
        year: 2021,
        title: "Frontend developer at Zupral",
        details: "I was part of the development team of “Boonji Project”. A collection of 11,111 unique digital Non-Fungible Tokens launched on the Ethereum blockchain created by world-renowned artist Brendan Murphy",
        role: "Integrating the Figma Designs into a React Projects for the main website and the Api Store",
    },
    {
        year: 2021,
        title: "Personal Website",
        details: "My personal website serves as a platform for my exploration of innovative and creative ways to engage with digital media. I am particularly drawn to the exciting realm of experimenting with the narrative potential of the web. This endeavor not only fuels my passion for programming but also contributes significantly to my personal and professional development.",
        role: "Web development and design in P5JS, JavaScript, CSS, and HTML.",
    },
    {
        year: 2021,
        title: "Experiments with generative and sound art",
        details: "Collection of a series of web experiments centered around the realms of sound art and generative art on the internet",
        role: "Web development and design in P5JS, JavaScript, CSS, and HTML.",
    },
    {
        year: 2020,
        title: "Frontend developer at Midbo",
        details: "Experimental web gallery of Bogotá International Documentary Exhibition that took place in 2022",
        role: "Web development and design in P5JS, JavaScript, CSS, and HTML.",
    },
    {
        year: 2020,
        title: "Frontend developer at Mi Historia Fundación",
        details: "Website for the project ‘My Story: The Children Who Fought War in Colombia’. This Project was funded by a Global Challenges Research Fund grant, awarded by the UK Arts and Humanities Research Council and in association with the University of Leeds, Universidad del Rosario, the Colombian Truth Commission and Benposta.",
        role: "Web development and design in P5JS, JavaScript, CSS, and HTML.",
    },
    {
        year: 2020,
        title: "Web developer at ‘Lineas de fuga’ project",
        details: "This project is a collaborative creative initiative by members of the community of physical computing and electronic arts at Pontifica Javeriana University (students and teachers - Alejandro Forero and Pilar Santamaría Motta). It represents a process of building and re-building new relational spaces in response to the 'preventive isolation' mandated by the COVID-19 pandemic during the first semester of 2020.",
        role: "Web development and design in P5JS, JavaScript, CSS, and HTML.",
    },
    {
        year: 2020,
        title: "Web developer at ‘Luz habitante’ project ",
        details: "An experimental website exploring the interaction of light during the pandemic period. This was a collaborative project with my art students from the Javeriana University.",
        role: "Web development and design in P5JS, JavaScript, CSS, and HTML.",
    },
    {
        year: 2020,
        title: "Web developer at ‘Nueva normalidad’ project",
        details: "An experimental website that questions the way cameras are becoming surveillance of our daily lives due to the pandemic period. This was a collaborative project with my art students from Javeriana University.",
        role: "Web development and design in P5JS, JavaScript, CSS, and HTML.",
    },
]

const Work = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        duration: 2000,
        collapsedHeight: 350
    })

    const regresar = () => {
        if (isExpanded) {
            setTimeout(() => {
                const element = document.getElementById('work');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300)
        }
    }

    return (
        <>
            <div id='work' className={`m-auto md:pl-20 p-4 py-4`}>
                <h1 className='text-4xl mb-8 font-bold text-center text-[#001b5e]'>Work</h1>
                <div {...getCollapseProps()} >
                    {data.map((item, idx) => (
                        <WorkItem
                            key={idx}
                            year={item.year}
                            title={item.title}
                            details={item.details}
                            role={item.role}
                        />
                    ))}
                </div>

            </div>
            <div className='flex justify-center font-bold text-[#001b5e]'>
                <button {...getToggleProps({
                    onClick: () => regresar()
                })}>
                    {isExpanded ? 'View Less' : 'View More'}
                </button>
            </div>

        </>
    )
}

export default Work