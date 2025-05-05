import React from 'react';
import lazyLoad from '../utils/lazyLoad';
import LayoutIndex from '../constant';

//新建路由
const Role = [
    {
        element: <LayoutIndex />,
        children: [
            {
                path: '/sys/role',
                element: lazyLoad(React.lazy(() => import('@/views/role')))
            }
        ]
    },

]

export default Role;