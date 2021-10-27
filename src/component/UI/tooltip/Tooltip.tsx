import "./tooltip.scss";

export const ToolTip = (props: { data: any; image: string }) => {
  return (
    <div className="tiptext">
      <div className="tooltip-container_header">
        <h1>{props.data.title}</h1>
      </div>
      <div className="tooltip-container_content">{props.data.overview}</div>
      <div className="tooltip-container_image" >
        <img src={props.image} alt="/" className="image_tip"/>
      </div>
    </div>
  );
};
