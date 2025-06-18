import React, { lazy, Suspense } from 'react'

const Loading = <div className='loading'>Loading...</div>
const LoginPage = lazy(() => import('../components/container/auth/AuthJoin'))
const toLoginOutRouter = () => {
  return (
    [
      {
        path: '',
        element: <Suspense fallback={Loading}><LoginPage /></Suspense>
      }

    ]
  )

}

export default toLoginOutRouter