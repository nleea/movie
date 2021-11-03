import { useState, useEffect } from "react";
import Axios from "axios";
import { ToolTip } from "../tooltip/Tooltip";
import "./card.css";

export const Card = (props: any) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const image = async () => {
      const resp = await Axios.get(
        `https://image.tmdb.org/t/p/w500/${props.url}`
      );
      setImage(resp.config.url!);
    };
    image();
  }, [props.url]);

  return (
    <div className="container-card_image tooltip top" key={props.key} >
      <ToolTip image={image} data={props.data} />
      <img src={image} alt="#" className="container-card_image-i" />
    </div>
  );
};
