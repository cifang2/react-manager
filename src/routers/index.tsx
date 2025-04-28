// import Login from '@/views/login'
import { Navigate, useRoutes } from 'react-router-dom'
import lazyLoad from './utils/lazyLoad'
import React from 'react'

export const rootRouter = [
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: '/login',//↓以这种方式引入可以实现懒加载
        element: lazyLoad(React.lazy(() => import('@/views/login'))),
        meta: {
            requireAuth: false,
            title: "登录",
            key: "login",
        }
    }
]

const Router = () => {
    const routes = useRoutes(rootRouter)
    return routes
}
export default Router