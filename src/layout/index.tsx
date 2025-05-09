import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Navigate, Outlet } from 'react-router-dom'
import "./index.less"
import LayoutMenu from './components/Menu'
import { store } from '@/redux'
import { setAuthBotton } from '@/redux/modules/auth/action'
import { connect } from 'react-redux'
import { useEffect } from 'react'
//基于antd的布局

const layoutIndex = (props: any) => {
    const { setAuthBotton } = props
    //获取权限按钮列表
    const getAuthBottonsList = async () => {
        let data = {
            '/sys/home': ['add']
        }
        //真正有后端的时候，应该是这么写
        //const {data} = await getAuthBottonList()，就是从后端获取权限按钮列表
        setAuthBotton(data)
    }

    useEffect(() => {
        getAuthBottonsList()
    })

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

//export default layoutIndex
//这里就是将setAuthBotton方法映射到props中
const mapDispatchToProps = { setAuthBotton }
export default connect(null, mapDispatchToProps)(layoutIndex)