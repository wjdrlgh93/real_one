import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import toShopRouter from './toShopRouter'
import toLoginOutRouter from './toLoginOutRouter'
import toAdminRouter from './toAdminRouter'


const Loading = <div className='loading'>Loading...</div>

const IndexPage = lazy(() => import(`../pages/index/IndexPage`))

const LoginLayout = lazy(() => import('../layout/LogInLayout'))
const ShopLayout = lazy(() => import(`../layout/ShopLayout`))
const AdminLayout = lazy(() => import('../layout/AdminLayout'))


const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><IndexPage /></Suspense>
    },
    {
        //Auth -> 로그인, 조인 페이지 > Admin
        path: 'auth',
        element: <Suspense fallback={Loading}><LoginLayout /></Suspense>,
        children: toLoginOutRouter()

    },
    {
        // 숍리스트  -> cart
        path: 'shop',
        element: <Suspense fallback={Loading}><ShopLayout /></Suspense>,
        children: toShopRouter()
    },
    // {
    //     // 숍리스트  -> shop
    //     path: 'cart',
    //     element: <Suspense fallback={Loading}><ShopLayout /></Suspense>,
    //     children: toShopRouter()
    // },
    {
        //admin ( if ROLE : admin)
        path: 'admin',
        element: <Suspense fallback={Loading}><AdminLayout /></Suspense>,
        children: toAdminRouter()
    }
])



export default root