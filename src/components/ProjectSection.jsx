import React, {Suspense} from 'react'

import Loading from './Loading'

const ProjectWeb = React.lazy(() => import('./ProjectWeb'));
const ProjectRestful = React.lazy(() => import('./ProjectRestful'));
const ProjectExperimental = React.lazy(() => import('./ProjectExperimental'));
const ProjectDemos = React.lazy(() => import('./ProjectDemos'));

const ProjectSection = ({ tipo }) => {

    return (
        <div>
            {tipo == 'web' && <Suspense fallback={<Loading />}><ProjectWeb /></Suspense>}
            {tipo == 'restful' && <Suspense fallback={<Loading />}><ProjectRestful /></Suspense>}
            {tipo == 'experimental' && <Suspense fallback={<Loading />}><ProjectExperimental /></Suspense>}
            {tipo == 'demos' && <Suspense fallback={<Loading />}><ProjectDemos /></Suspense>}
        </div>
    )

}

export default ProjectSection