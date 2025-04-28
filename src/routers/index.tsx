// import Login from '@/views/login'
import { Navigate, useRoutes } from 'react-router-dom'
import lazyLoad from './utils/lazyLoad'
import React from 'react'
import { RouteObject } from './interface'

//导入modules下的所有路由
const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true })
//使用vite的import.meta.globEager()方法，动态导入modules下的所有.tsx文件
//eager: true 表示立即加载模块，而不是在需要时才加载
//metaRouters对象中，键名是每个tsx的路径
//键值也是对象，这个对象包含tsx所有的export
//这是一种动态批量导入的方法，因为你可以随时在modules添加内容


//历遍并处理路由
export const routerArray: RouteObject[] = []
//创建一个空数组，类型是RouteObject，这是一个自定义接口
//[]是typescript中表示数组类型的后缀
// 这里表示这是一个由 RouteObject 类型元素组成的数组

Object.keys(metaRouters).forEach((item: string) => {
    Object.keys(metaRouters[item] as any).forEach(key => {
        routerArray.push(...(metaRouters[item] as any)[key])
    })
})
//Object.keys方法，获取所有路径，返回数组
/*大概是[
    './modules/home.tsx',
    // ... 其他在 modules 文件夹中的 tsx 文件路径
]这样的结构*/
//调用数组的forEach方法，每个路径都会使用回调函数，不使用map是因为map只会返回新数组
//第二层历遍，使用第一层得到了item作为索引，得倒了每个文件的export内容的名称，字符串数组
//如果有default,会有。如果是具名导出，就是名字。
//之后，把导出的文件名+导出名作为双重索引，将所有的方法本身添加到routerArray中



export const rootRouter = [
    {
        path: '/',
        element: <Navigate to="/login" />  // 根路径重定向到登录页
    },
    {
        path: '/login',
        element: lazyLoad(React.lazy(() => import('@/views/login'))),
        // 懒加载登录组件
        meta: {  // 路由元信息
            requireAuth: false,  // 不需要认证
            title: "登录",      // 页面标题
            key: "login"        // 唯一标识
        }
    },
    ...routerArray,  // 合并动态导入的所有路由
]
//这就是一个动态的路由配置数组

const Router = () => {
    const routes = useRoutes(rootRouter)  // 解析配置数组并创建路由实例，返回一个react组件
    return routes  // 返回路由组件
}
export default Router