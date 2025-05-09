import { store } from "@/redux"
import { routerArray } from "@/routers"
import seachRoute from "@/utile"
import { useLocation } from "react-router-dom"

const useAuthBottons = () => {
    const { pathname } = useLocation()
    const route = seachRoute(pathname, routerArray)
    return {
        BUTTONS: store.getState().auth.authBotton[route.meta!.key!] || {}
    }
}

export default useAuthBottons