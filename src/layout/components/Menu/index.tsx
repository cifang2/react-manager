import { Menu, MenuProps, Spin } from "antd"
import Logo from "../components/logo"
import { useEffect, useState } from "react"


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
            let data = [
                {
                    path: '/sys',
                    icon: 'SettingOutlined',
                    label: '菜单管理',
                    children: [
                        {
                            path: '/sys/home',
                            label: '用户管理',
                        }
                    ]
                }
            ]
            setMenuList(deepLoopFloat(data))//把数据转化为antd需要的格式，set进Menulist
            setLoading(false)
        } catch (err) {
            setLoading(false)
        }
    }

    //转换函数
    const deepLoopFloat = (menuList: Menu.MenuOptions[], newArray: MenuItem[] = []) => {
        menuList.forEach((item: Menu.MenuOptions) => {
            if (!item.children?.length) {
                newArray.push(getItem(item.label, item.path, item.icon))
            } else {
                const children = deepLoopFloat(item.children, [])
                newArray.push(getItem(item.label, item.path, item.icon, children))
            }
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
    ): MenuItem => {
        return {
            key,
            icon,
            children,
            label
        } as MenuItem
    }

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
                />
            </Spin>
        </div>
    )
}


export default LayoutMenu
