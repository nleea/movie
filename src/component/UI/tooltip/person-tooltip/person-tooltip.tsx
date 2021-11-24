import "../tooltip.css";

export const ToolTip = (props: any) => {
    return (
        <div className="tiptext">
            <div className="tooltip-container_header">
                <h1>{props.data.name}</h1>
            </div>
            <div className="tooltip-container_content">{props.data.known_for_department}</div>
            <div className="tooltip-container_image" >
                <img src={props.image} alt="/" className="image_tip-person" />
            </div>
            <div className="tooltip-container_data">
                <div>Popularity: <p>{props.data.popularity}</p></div>
                <div>Peliculas mas famosas: {props.data.known_for.map((e: any) => <p>{e.original_title}</p>)}</div>
            </div>
        </div>
    );
};
