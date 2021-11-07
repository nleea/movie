import { ComponentProps } from "react";

interface Iprops extends ComponentProps<any> {
    click: () => void;
    disabled?: boolean;
}

export const Button = (props: Iprops) => {

    return <button onClick={props.click} disabled={props.disabled}>{props.children}</button>
};