import { useState, useEffect } from "react";
import Axios from "axios";
import Tippy from "@tippyjs/react";
import "./card.css";
import 'tippy.js/dist/tippy.css';

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
      <Tippy content={<props.component data={props.data} image={image} />} inlinePositioning={true}>
        <img src={image} alt="#" className="container-card_image-i" />
      </Tippy>
    </div>
  );
};
