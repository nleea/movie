import "./tooltip.css";

interface props {
  data: {
    title: string;
    overview: any;
    name?: string;
  };
  image?: string;
}

export const ToolTip = (props: props) => {
  return (
    <div className="tiptext">
      <div className="tooltip-container_header">
        <h1>{props.data.title ? props.data.title : props.data.name}</h1>
      </div>
      <div className="tooltip-container_content">{props.data.overview}</div>
      <div className="tooltip-container_image">
        <img src={props.image} alt="/" className="image_tip" />
      </div>
    </div>
  );
};
