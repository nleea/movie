import { useState, useEffect } from "react";
import Axios from "axios";
import "./card.scss";

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
    <div className="">
      <img src={image} alt="#" className="container-card_image-i" />
    </div>
  );
};
