import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import toShopRouter from './toShopRouter'
import toAuthRouter from './toAuthRouter'
import toLoginOutRouter from './toLoginOutRouter'


const Loading = <div className='loading'>Loading...</div>

const IndexPage = lazy(() => import(`../pages/index/IndexPage`))
const AuthPage = lazy(() => import(`../pages/auth/AuthPage`))
const CartPage = lazy(() => import(`../pages/cart/CartPage`))

const AdminLayout = lazy(() => import(`../layout/AdminLayout`))
const AuthLayout = lazy(() => import('../layout/AuthLayout'))
const LoginLayout = lazy(() => import('../layout/LogInLayout'))
const ShopLayout = lazy(() => import(`../layout/ShopLayout`))


const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><IndexPage /></Suspense>
    },
    {
        //Auth -> 로그인, 조인 페이지 > Admin
        path: 'log',
        element: <Suspense fallback={Loading}><LoginLayout /></Suspense>,
        children: toLoginOutRouter()

    },
    {
        // 숍리스트  -> cart
        path: 'shop',
        element: <Suspense fallback={Loading}><ShopLayout /></Suspense>,
        children: toShopRouter()
    },
    {
        // 숍리스트  -> shop
        path: 'cart',
        element: <Suspense fallback={Loading}><ShopLayout /></Suspense>,
        children: toShopRouter()
    }

])



export default root