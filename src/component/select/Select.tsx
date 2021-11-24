import "./select.css";

export const Select = (props: any) => {
    return (
        <div className={`${props.class} container-select_buttons`}>
            <div className="container-select_buttons-header">
                <div>Select</div>
            </div>
            {props.children}
        </div>
    );
};