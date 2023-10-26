import React, { Suspense } from 'react'

import Loading from './components/Loading'

import Projects from './components/Projects'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Sidenav from './components/Sidenav'

const Main = React.lazy(() => import('./components/Main'));


function App() {
  return (
    <div>
      <Sidenav />
      <div className='w-full h-[100vh]'>
        <Suspense fallback={<Loading />}><Main /></Suspense>
      </div>
      <About />  
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
