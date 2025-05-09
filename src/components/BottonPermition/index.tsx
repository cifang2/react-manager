import { JSX } from "react";
import { ButtonProps } from "antd";
import useAuthBottons from "@/hooks/useAuthButtons";

type BottonComponent = React.FC<ButtonProps> | JSX.Element | null;
interface BottonPermitionProps {
    btn: string;//按钮要做什么
    Comp: BottonComponent;
}

const BottonPermition = ({ btn, Comp }: BottonPermitionProps): JSX.Element | null => {
    const { BUTTONS } = useAuthBottons()
    if (!btn) {
        return <>{Comp}</>
    }
    //如果bottons为空
    if (Object.keys(BUTTONS).length === 0) {
        return null
    }
    if (BUTTONS && BUTTONS.includes(btn)) {
        return <>{Comp}</>
    }
    return null
}

export default BottonPermition;