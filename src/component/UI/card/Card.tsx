import { useState, useEffect } from "react";
import { FetchImage } from "../../../custom-hooks/fetch-image";
import Tippy from "@tippyjs/react";
import "./card.css";
import "tippy.js/dist/tippy.css";

export const Card = (props: any) => {
  const [image, setImage] = useState("");
  const { fetchImage } = FetchImage();

  useEffect(() => {
    let _image = true;
    fetchImage({ url: props.url }).then((e) => {
      if (_image) {
        setImage(e);
      }
    });
    return () => {
      _image = false;
    };
  }, [fetchImage, props.url]);

  return (
    <div className="container-card_image tooltip top" key={props.data.id}>
      <Tippy
        content={<props.component data={props.data} image={image} />}
        inlinePositioning={true}
      >
        <img src={image} alt="#" className="container-card_image-i" />
      </Tippy>
    </div>
  );
};
