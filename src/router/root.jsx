import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import toShopRouter from './toShopRouter'


const Loading = <div className='loading'>Loading...</div>

const IndexPage = lazy(() => import(`../pages/index/IndexPage`))
const AuthPage = lazy(() => import(`../pages/auth/AuthPage`))
const ShopPage = lazy(() => import(`../pages/shop/ShopPage`))
const CartPage = lazy(() => import(`../pages/cart/CartPage`))
const AdminPage = lazy(() => import(`../pages/admin/AdminPage`))

const ShopLayout = lazy(() => import(`../layout/ShopLayout`))


const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><IndexPage /></Suspense>
    },
    {
        //Auth -> 로그인, 조인 페이지 > Admin
        path: 'auth',
        element: <Suspense fallback={Loading}><AuthPage /></Suspense>
    },
    {
        // 숍리스트  -> cart
        path: 'shop_list',
        element: <Suspense fallback={Loading}><ShopLayout /></Suspense>,
        children: toShopRouter()
    }

])



export default root