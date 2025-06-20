import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const Loading = <div className='loading'>Loading...</div>


const AdminIndex = lazy(() => import('../components/container/admin/AdminIndex'))

const AdminCarts = lazy(() => import('../components/container/admin/AdminCarts'))
const AdminMembers = lazy(() => import('../components/container/admin/AdminMembers'))
const AdminPayments = lazy(() => import('../components/container/admin/AdminPayments'))
const AdminProduct = lazy(() => import('../components/container/admin/AdminProducts'))
const AdminProductAdd = lazy(() => import('../components/container/admin/AdminProductAdd'))
const AdminShopList = lazy(() => import('../components/container/admin/AdminShopList'))

const toAdminRouter = () => {
    return (
        [
            {
                // /admin
                path: '',
                element: <Navigate replace to={'index'} />
            },
            {
                // admin MainPage
                path: 'index',
                element: <Suspense fallback={Loading}><AdminIndex /></Suspense>
            },
            {
                // admin/members     // admin/member/detail/:id(modal)
                // admin/detail/userid(modal)
                path: 'members',
                element: <Suspense fallback={Loading}><AdminMembers /></Suspense>
            },
            {
                // admin/cart
                path: 'cart',
                element: <Suspense fallback={Loading}><AdminCarts /></Suspense>
            },
            {
                // admin/payments
                path: 'paym',
                element: <Suspense fallback={Loading}><AdminPayments /></Suspense>
            },
            {
                // admin/product
                path: 'product',
                element: <Suspense fallback={Loading}><AdminProduct /></Suspense>
            },
            {
                // admin/product
                path: 'product_add',
                element: <Suspense fallback={Loading}><AdminProductAdd /></Suspense>
            },
            {
                // admin/product
                path: 'shop_list',
                element: <Suspense fallback={Loading}><AdminShopList /></Suspense>
            }
        ]
    )
}

export default toAdminRouter