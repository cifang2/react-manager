//定义路由的类型
export interface RouteObject {
    push(arg0: any): (value: string, index: number, array: string[]) => void;
    path?: string;
    element?: React.ReactNode;
    children?: RouteObject[];
}