import { AuthState } from "@/redux/interface";
import { Action } from "redux";
import * as types from '@/redux/mutation-types'
import { Draft, produce } from "immer";

const authRouter: AuthState = {
    authRouter: []
}
//定义SET_AUTH_ROUTER的reducer使用的时候需要传的action类型
interface SET_AUTH_ROUTER extends Action {
    type: typeof types.SET_AUTH_ROUTER,
    authRouter: string[]
}

type ActionType = SET_AUTH_ROUTER

//reducer
const auth = (state: AuthState = authRouter, action: ActionType) => {
    return produce(state, (draftState: Draft<AuthState>) => {
        switch (action.type) {
            case types.SET_AUTH_ROUTER:
                draftState.authRouter = action.authRouter
                break
            default:
                break
        }
    })
}

export default auth