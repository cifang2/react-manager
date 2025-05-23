import React from 'react';
import lazyLoad from '../utils/lazyLoad';
import LayoutIndex from '../constant';

//新建路由
const Home = [
    {
        element: <LayoutIndex />,
        children: [
            {
                path: '/sys/home',
                element: lazyLoad(React.lazy(() => import('@/views/home'))),
                meta: {
                    title: '首页',
                    key: '/sys/home'
                }
            }
        ]
    },

]

export default Home;