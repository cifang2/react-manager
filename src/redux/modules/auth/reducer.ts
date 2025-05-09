import { AuthState } from "@/redux/interface";
import { Action } from "redux";
import * as types from '@/redux/mutation-types'
import { Draft, produce } from "immer";

const authRouter: AuthState = {
    authRouter: [],
    authBotton: []
}
//定义SET_AUTH_ROUTER的reducer使用的时候需要传的action类型
interface SET_AUTH_ROUTER extends Action {
    type: typeof types.SET_AUTH_ROUTER,
    authRouter: string[]
}

//定义SET_AUTH_BOTTON的reducer使用的时候需要传的action类型
interface SET_AUTH_BOTTON extends Action {
    type: typeof types.SET_AUTH_BOTTON,
    authBotton: []
}

type ActionType = SET_AUTH_ROUTER | SET_AUTH_BOTTON
//这就是为什么单独定义了一个ActionType，方便调用

//reducer
const auth = (state: AuthState = authRouter, action: ActionType) => {
    return produce(state, (draftState: Draft<AuthState>) => {
        switch (action.type) {
            case types.SET_AUTH_ROUTER:
                draftState.authRouter = action.authRouter
                break
            case types.SET_AUTH_BOTTON:
                draftState.authBotton = action.authBotton
                break
            default:
                break
        }
    })
}

export default auth