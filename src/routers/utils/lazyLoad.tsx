import { Spin } from 'antd'
import React, { Suspense } from 'react'
//utils是一个通常用来存放工具函数和通用逻辑的地方


const lazyLoad = (Comp: React.LazyExoticComponent<any>) => {
    //接收一个 React.LazyExoticComponent 类型的组件
    //在index中，调用React内置的懒加载方法，不用管原理，返回这样的组件
    return (
        <Suspense fallback={
            <Spin
                size='large'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}>

            </Spin>
        }>
            <Comp />
        </Suspense>
        //suspense是用于异步加载的特殊组件，在懒加载的组件准备号之前
        //会用fallback里的组件替代
    )
}
export default lazyLoad