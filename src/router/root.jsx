import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import toShopRouter from './toShopRouter'


const Loading = <div className='loading'>Loading...</div>

const IndexPage = lazy(() => import(`../pages/index/IndexPage`))
const JGHPage = lazy(() => import(`../pages/tmp/JGH_tmp`))
const Yj_tmp = lazy(() => import('../pages/tmp/Yj_tmp'))


const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><IndexPage /></Suspense>
    }
    // 임시 링킹 path
    {
        path: '/JGH_tmp',
        element: <Suspense fallback={Loading}><JGHPage /></Suspense>
    },
    {
        path:'Yj',
        element:<Suspense fallback={Loading}><Yj_tmp/></Suspense>
    }
])



export default root