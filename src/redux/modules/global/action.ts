import * as types from '@/redux/mutation-types'
//一些操作的动作

//setToken
export const setToken = (token: string) => ({
    type: types.SET_TOKEN,
    token
})