import { ComponentProps } from "react";
import "./button.css";

interface Iprops extends ComponentProps<any> {
    click: () => void;
    disabled?: boolean;
    type: string;
}

export const Button = (props: Iprops) => {
    return <button onClick={props.click} disabled={props.disabled} className={props.type} >{props.children}</button>
};