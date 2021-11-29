import "./backdrop.css";


export const Backdrop = (props: any) => {
    return (
        <div className="backdrop">{props.children}</div>
    );
};