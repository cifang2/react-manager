import { Menu, MenuProps, Spin } from "antd"
import Logo from "../components/logo"
import { useEffect, useState } from "react"
import * as Icons from '@ant-design/icons'
import React from "react"
import { useLocation } from "react-router-dom"


//菜单组件
const LayoutMenu = () => {
    //菜单数据                      
    const [menuList, setMenuList] = useState<MenuItem[]>([])
    //loading，获取菜单数据的时候就会显示loading
    const [loading, setLoading] = useState(false)

    const getMenuData = () => {
        setLoading(true)
        try {
            //axios获取菜单数据
            const data = [
                {
                    path: '/sys',
                    icon: 'SettingOutlined',
                    label: '菜单管理',
                    children: [
                        {
                            path: '/sys/home',
                            label: '用户管理',
                        },
                        {
                            path: '/sys/role',
                            label: '角色管理',
                        }
                    ]
                }
            ]
            setMenuList(deepLoopFloat(data))//把数据转化为antd需要的格式，set进Menulist
            setLoading(false)
        } catch {
            setLoading(false)
        }
    }

    //动态渲染icon图标
    const customIcons: { [key: string]: any } = Icons
    const renderIcon = (icon: string) => {
        if (!icon) return null
        return React.createElement(customIcons[icon])
    }

    //转换函数
    const deepLoopFloat = (menuList: Menu.MenuOptions[], newArray: MenuItem[] = []) => {
        menuList.forEach((item: Menu.MenuOptions) => {
            if (!item.children?.length) {
                newArray.push(getItem(item.label, item.path, renderIcon(item.icon!)))
            } else {
                const children = deepLoopFloat(item.children, [])
                newArray.push(getItem(item.label, item.path, renderIcon(item.icon!), children as []))
            }//这里是渲染
        })
        return newArray
    }
    //递归函数，用于将菜单数据转换为antd菜单需要的数据格式
    //导入menuList数组，如果没有子菜单，就处理后添加到newArray数组中
    //如果有子菜单，就递归调用deepLoopFloat函数，这时候传入的是子菜单



    //获取菜单数据
    useEffect(() => {
        getMenuData()
    }, [])
    //这段代码可以在页面加载完成后执行一次



    //定义menu类型
    type MenuItem = Required<MenuProps>['items'][number]

    const getItem = (
        label: React.ReactNode,
        key: string | undefined,
        icon?: React.ReactNode,
        children?: [],
        type?: 'group',
    ): MenuItem => {
        return {
            label,
            key,
            icon,
            children,
            type,
        } as MenuItem
    }

    //定义openKeys和selectedKeys
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    const onOpenChange = (opemKeys: string[]) => {
        if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(opemKeys)
        const latestOpenKey = opemKeys[openKeys.length - 1]
        if (latestOpenKey.includes(openKeys[0])) {
            setOpenKeys(openKeys)
        } else
            setOpenKeys([latestOpenKey])
    }

    //保持常量
    const { pathname } = useLocation()
    useEffect(() => {
        setSelectedKeys([pathname])
        setOpenKeys(getOpenKeys(pathname))
    }, [pathname])
    //获取openKeys
    const getOpenKeys = (path: string) => {
        let newStr: string = ''
        let newArr: any[] = []
        let arr = path.split('/').map(i => '/' + i)
        for (let i = 1; i < arr.length - 1; i++) {
            newStr += arr[i]
            newArr.push(newStr)
        }
        return newArr
    }
    //刷新页面后，副的菜单会自动打开，同时地址也会默认选中

    return (
        //返回一个logo，一个菜单
        //使用了spin组件，loading的时候显示loading
        //使用了menu组件，传入菜单数据
        <div className="layout-menu">
            <Logo />
            <Spin spinning={loading} tip="Loading...">
                <Menu
                    theme="dark"
                    mode="inline"
                    items={menuList}
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    onOpenChange={onOpenChange}
                />
            </Spin>
        </div>
    )
}


export default LayoutMenu
