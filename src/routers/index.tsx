// import Login from '@/views/login'
import { Navigate, useRoutes } from 'react-router-dom'
import lazyLoad from './utils/lazyLoad'
import React from 'react'
import { RouteObject } from './interface/index'

//导入modules下的所有路由
const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true })

//历遍并处理路由
export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach((item: string) => {
    Object.keys(metaRouters[item] as any).forEach(key => {
        routerArray.push(...(metaRouters[item] as any)[key])
    })
})
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
    },
    ...routerArray,//把路由拆散出来放在这里
]

const Router = () => {
    const routes = useRoutes(rootRouter)
    return routes
}
export default Router