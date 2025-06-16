import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import toShopRouter from './toShopRouter'


const Loading = <div className='loading'>Loading...</div>

const IndexPage = lazy(() => import(`../pages/index/IndexPage`))


const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><IndexPage /></Suspense>
    }

])



export default root