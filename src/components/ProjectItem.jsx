import React from 'react'

const ProjectItem = ({ img, title, desc, enlace }) => {
    return (
        <div className='relative max-h-[280px] min-h-[240px] flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-l from-[#555] to-[#444]'>
            <img src={img} alt="/" className='rounded-xl h-[100%] w-[100%] group-hover:opacity-10 object-cover'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{desc}</p>
                <a href={enlace} target="_blank" >
                    <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>Visit</p>
                </a>
            </div>

        </div>
    )
}

export default ProjectItem