import { RouteObject } from "@/routers/interface"

const seachRoute = (key: string, routes: RouteObject[]): RouteObject => {
    let result: RouteObject | undefined
    for (let i = 0; i < routes.length; i++) {
        const item = routes[i]
        if (item.path === key) {
            return item
        } else if (item.children) {
            result = seachRoute(key, item.children)
        } if (result) {
            return result
        }
    }

}

export default seachRoute