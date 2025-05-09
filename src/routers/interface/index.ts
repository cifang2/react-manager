//定义路由的类型
export interface RouteObject {
    push(arg0: any): (value: string, index: number, array: string[]) => void;
    path?: string;//路由的路径
    element?: React.ReactNode;//react内置类型
    children?: RouteObject[];//子路由，表示里面还可以渲染其他组件
    meta?: MetaProps;
}

export interface MetaProps {
    requiresAuth?: boolean;
    title: string;
    key?: string;
}