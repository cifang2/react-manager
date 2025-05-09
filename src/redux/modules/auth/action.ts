import * as types from '@/redux/mutation-types'

//设置路由权限的action
export const setAuthRouter = (authRouter: string[]) => {
    return {
        type: types.SET_AUTH_ROUTER,
        authRouter
    }
}