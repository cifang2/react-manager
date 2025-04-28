import { Spin } from 'antd'
import React, { Suspense } from 'react'

const lazyLoad = (Comp: React.LazyExoticComponent<any>) => {
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
    )
}
export default lazyLoad
