import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Outlet } from 'react-router-dom'
import "./index.less"
import LayoutMenu from './components/Menu'
//基于antd的布局
const layoutIndex = () => {
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