import { useState } from "react";

interface Iprops {
    text: string;
    click: () => void;
    disabled?:boolean;
}

export const Button = (props: Iprops) => {
    const [active, setActive] = useState(false);
    return <button onClick={props.click} disabled={props.disabled}>{props.text}</button>
};