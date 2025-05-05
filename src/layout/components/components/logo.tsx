import logo from "@/assets/react.svg"
import style from './index.module.less'
const Logo = () => {
    return (
        <div className={style.logo}>
            <img src={logo} alt="logo" className={style.logo_img}></img>
        </div>
    )
}

export default Logo