import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import toShopRouter from './toShopRouter'
import toAuthRouter from './toAuthRouter'


const Loading = <div className='loading'>Loading...</div>

const IndexPage = lazy(() => import(`../pages/index/IndexPage`))
const AuthPage = lazy(() => import(`../pages/auth/AuthPage`))
const CartPage = lazy(() => import(`../pages/cart/CartPage`))
const AdminPage = lazy(() => import(`../pages/admin/AdminPage`))

const AuthLayout = lazy(() => import('../layout/AuthLayout'))
const ShopLayout = lazy(() => import(`../layout/ShopLayout`))


const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><IndexPage /></Suspense>
    },
    {
        //Auth -> 로그인, 조인 페이지 > Admin
        path: 'auth',
        element: <Suspense fallback={Loading}><AuthLayout /></Suspense>,
        children: toAuthRouter()
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