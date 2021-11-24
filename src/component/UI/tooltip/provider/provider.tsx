import "../tooltip.css";

interface props {
    data: {
        provider_name: string;
        display_priority: any;
    };
    image?: string;
}

export const ProviderToolTip = (props: props) => {
    return (
        <div className="tiptext">
            <div className="tooltip-container_header">
                <h1>{props.data.provider_name}</h1>
            </div>
            <div className="tooltip-container_content">{props.data.display_priority}</div>
            <div className="tooltip-container_image">
                <img src={props.image} alt="/" className="image_tip-providers" />
            </div>
        </div>
    );
};
