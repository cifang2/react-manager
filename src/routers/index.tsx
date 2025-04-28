import Login from '@/views/login'
import { Navigate, useRoutes } from 'react-router-dom'

export const rootRouter = [
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: '/login',
        element: <Login />,
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