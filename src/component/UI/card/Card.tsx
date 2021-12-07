import { useState, useEffect } from "react";
import Axios from "axios";
import Tippy from "@tippyjs/react";
import "./card.css";
import 'tippy.js/dist/tippy.css';

export const Card = (props: any) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    let _image = true;
    const image = async () => {
      const resp = await Axios.get(
        `https://image.tmdb.org/t/p/w500/${props.url}`
      );
      if (_image) {
        setImage(resp.config.url!);
      }
    };
    image();

    return () => {
      _image = false;
    };
  }, [props.url]);

  return (
    <div className="container-card_image tooltip top" key={props.data.id} >
      <Tippy content={<props.component data={props.data} image={image} />} inlinePositioning={true}>
        <img src={image} alt="#" className="container-card_image-i" />
      </Tippy>
    </div>
  );
};
