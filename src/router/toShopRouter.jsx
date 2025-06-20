import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import toToyRouter from './toToyRouter'
import toBathRouter from './toBathRouter'

const Loading = <div className='loading'>Loading...</div>

const ShopMain = lazy(() => import(`../components/container/shop/ShopMainContainer`))
const ShopFood = lazy(() => import(`../components/container/shop/ShopFoodContainer`))
const ShopSnack = lazy(() => import(`../components/container/shop/ShopSnackContainer`))
const ShopToy = lazy(() => import(`../components/container/shop/ShopToyContainer`))
const ShopBath = lazy(() => import(`../components/container/shop/ShopBathContainer`))
const ShopHouse = lazy(() => import(`../components/container/shop/ShopHouseContainer`))
const ShopFashion = lazy(() => import(`../components/container/shop/ShopFashionContainer`))

// 연준
const ToyLayout = lazy(() => import('../components/container/shop/toy-yyj/ToyLayout'))
const BathLayout = lazy(() => import('../components/container/shop/bath-yyj/BathLayout'))

const toShopRouter = () => {
    return (
        [
            {
                // /shop,
                path: '',
                element: <Navigate replace to={'main'} />
            },
            {
                path: 'main',
                element: <Suspense fallback={Loading}><ShopMain /></Suspense>
            },
            {
                // shop/food
                path: 'food',
                element: <Suspense fallback={Loading}><ShopFood /></Suspense>
            },
            {
                // shop/snack
                path: 'snack',
                element: <Suspense fallback={Loading}><ShopSnack /></Suspense>
            },
            {
                // shop/toy
                path: 'toy',
                element: <Suspense fallback={Loading}><ToyLayout /></Suspense>,
                children: toToyRouter()
            },
            {
                // shop/bath
                path: 'bath',
                element: <Suspense fallback={Loading}><BathLayout /></Suspense>,
                children: toBathRouter()
            },
            {
                // shop/toy
                path: 'house',
                element: <Suspense fallback={Loading}><ShopHouse /></Suspense>
            },
            {
                // shop/toy
                path: 'fashion',
                element: <Suspense fallback={Loading}><ShopFashion /></Suspense>
            },

        ]
    )
}

export default toShopRouter