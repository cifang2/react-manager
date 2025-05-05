import { GlobalState } from "@/redux/interface";
import { Action } from "redux";
import * as types from '@/redux/mutation-types'
import { Draft, produce } from "immer";

//方便ts开发所以定义的类型
const globalState: GlobalState = {
    token: '',
}

interface SetTokenAction extends Action {
    type: typeof types.SET_TOKEN,
    token: string
}

type ActionType = SetTokenAction

const global = (state: GlobalState = globalState, action: ActionType) => {
    return produce(state, (draftState: Draft<GlobalState>) => {
        switch (action.type) {
            case types.SET_TOKEN:
                draftState.token = action.token
                break;
            default:
                return draftState
        }
    })
}

export default global