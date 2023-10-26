import React, { useState } from 'react'
import ProjectSection from './ProjectSection'

const Projects = () => {

  const [project, setProject] = useState("web");

  const handleType = (type) => {
    setProject(type);
  }

  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <div className='text-center py-2'>
        <button className={`${project === 'web' && 'underline'} p-1 m-2 underline-offset-4`} onClick={()=>{handleType('web')}}>WebSites</button>
        <button className={`${project === 'restful' && 'underline'} p-1 m-2 underline-offset-4`}  onClick={()=>{handleType('restful')}}>Restful Apis</button>
        <button className={`${project === 'experimental' && 'underline'} p-1 m-2 underline-offset-4`}  onClick={()=>{handleType('experimental')}}>Experimental Web</button>
        <button className={`${project === 'demos' && 'underline'} p-1 m-2 underline-offset-4`}  onClick={()=>{handleType('demos')}}>Demos</button>
      </div>
      {project === 'web' && <ProjectSection tipo='web' />}
      {project === 'restful' && <ProjectSection tipo='restful' />}
      {project === 'experimental' && <ProjectSection tipo='experimental' />}
      {project === 'demos' && <ProjectSection tipo='demos' />}
    </div>
  )
}

export default Projects