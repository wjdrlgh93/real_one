import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'



const Loading = <div className='loading'>Loading...</div>
const ShopPage = lazy(()=> import(`../pages/tmp/test1.jsx`))
const IndexPage = lazy(() => import(`../pages/index/IndexPage`))


const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><IndexPage /></Suspense>
    },
    // 임시 링킹 path

    {
        path: '/tets2',
        element:<Suspense fallback={Loading}><ShopPage/></Suspense>
    }

])



export default root