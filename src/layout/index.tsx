import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Navigate, Outlet } from 'react-router-dom'
import "./index.less"
import LayoutMenu from './components/Menu'
import { store } from '@/redux'
//基于antd的布局
const layoutIndex = () => {
    //从store中获取token
    const userToken = store.getState().global.token
    if (!userToken) {
        return <Navigate to="/login" />
    }
    return (
        <div className="container">
            <Sider collapsible width={220} theme="dark" >
                <LayoutMenu />
            </Sider>
            <Layout>
                <Layout.Header>
                    Header
                </Layout.Header>
                <Layout.Content>
                    <Outlet />
                </Layout.Content>
                <Layout.Footer>
                    Footer
                </Layout.Footer>
            </Layout>
        </div>
    )
}

export default layoutIndex