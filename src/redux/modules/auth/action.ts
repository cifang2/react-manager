import * as types from '@/redux/mutation-types'

//设置路由权限的action
export const setAuthRouter = (authRouter: string[]) => {
    return {
        type: types.SET_AUTH_ROUTER,
        authRouter
    }
}

//设置按钮权限的action
export const setAuthBotton = (authBotton: { [propName: string]: any }) => {
    return {
        type: types.SET_AUTH_BOTTON,
        authBotton
    }
}