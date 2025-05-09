import BottonPermition from "@/components/BottonPermition"
import { Button } from "antd"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <BottonPermition
                btn={'add'}
                Comp={
                    <Button type="primary">添加</Button>
                }
            />
            <BottonPermition
                btn={'del'}
                Comp={
                    <Button type="primary">删除</Button>
                }
            />
            {/* 注意到此时del没有被渲染出来，因为没有响应的权限 */}
        </div>
    )
}
export default Home