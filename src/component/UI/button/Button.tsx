
interface Iprops {
    text: string;
    click: () => void;
    disabled?: boolean;
}

export const Button = (props: Iprops) => {

    return <button onClick={props.click} disabled={props.disabled}>{props.text}</button>
};