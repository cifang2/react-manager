//持久化使用的是redux-persist

import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import global from "./modules/global/reducer";//这是啥？

//redux持久化配置
const persistConfig = {
    key: 'redux-state',
    storage: storage
}

//创建reducer
const reducer = combineReducers({
    global
})

//创建一个新的redux状态的reducer
const persistReducerConfig = persistReducer(persistConfig, reducer)

//开启redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//使用redux中间件
const middleyware = applyMiddleware(thunk)

//创建store
const store: Store = createStore(
    persistReducerConfig,
    composeEnhancers(middleyware)
)

//创建一个持久化的store
const persistor = persistStore(store)

export { store, persistor }