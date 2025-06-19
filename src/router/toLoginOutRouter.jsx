import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const Loading = <div className='loading'>Loading...</div>
const LoginPage = lazy(() => import('../components/container/auth/AuthJoin'))

const AuthDetail = lazy(() => import('../components/container/auth/AuthDetail'))
const AuthMemberList = lazy(() => import('../components/container/auth/AuthMemberList'))
const AuthMemberListDetail = lazy(() => import('../components/container/auth/AuthMemberListDetail'))

const toLoginOutRouter = () => {
  return (
    [
      {
        //auth
        path: '',
        element: <Navigate replace to={'login'} />
      },
      {
        //auth/login
        path: 'login',
        element: <Suspense fallback={Loading}><LoginPage /></Suspense>

      },
      {
        // auth/detail/userid
        path: 'detali/:id',
        element: <Suspense fallback={Loading}><AuthDetail /></Suspense>
      },
      {
        path: 'memberlist',
        element: <Suspense fallback={Loading}><AuthMemberList /></Suspense>
      },
      {
        path: `memberlist/detail/:id`,
        element: <Suspense fallback={Loading}><AuthMemberListDetail /></Suspense>
      }
    ]
  )

}

export default toLoginOutRouter