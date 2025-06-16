import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'


const Loading = <div className='loading'>Loading...</div>

const IndexPage = lazy(() => import(`../pages/index/IndexPage`))
const JPage = lazy(() => import('../pages/tmp/JGH_tmp'))

const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><IndexPage /></Suspense>
    },
    {
        path: '/JGHtmp',
        element: <Suspense fallback={Loading}><JPage /></Suspense>
    }
])



export default root