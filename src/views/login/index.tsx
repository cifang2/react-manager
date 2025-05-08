import { Button } from "antd"
import { setToken } from "@/redux/modules/global/action"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"

interface LoginProps {
    setToken: typeof setToken
}


const Login = (props: LoginProps) => {
    const { setToken } = props
    const navigate = useNavigate()
    const handleLogin = () => {
        console.log('login')
        setToken('token')
        navigate('/sys/home')
    }

    return (
        <div>
            <Button type="primary" onClick={handleLogin}>Login</Button>
        </div>
    )
}

//export default Login

//映射dispatch到props上
const mapDispatchToProps = {
    setToken
}
export default connect(null, mapDispatchToProps)(Login)