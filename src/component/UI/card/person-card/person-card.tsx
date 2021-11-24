import { useState, useEffect } from "react";
import Axios from "axios";
import { ToolTip } from "../../tooltip/person-tooltip/person-tooltip";
import Tippy from "@tippyjs/react";
import "../card.css";
import 'tippy.js/dist/tippy.css';

export const Card = (props: any) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        const image = async () => {
            const resp = await Axios.get(
                `https://image.tmdb.org/t/p/w400/${props.url}`
            );
            console.log(resp.config.url);
            setImage(resp.config.url!);
        };
        if (props.url) image();
    }, [props.url]);

    return (
        <div className="container-card_image tooltip top" key={props.key} >
            <Tippy content={<ToolTip image={image} data={props.data} />} >
                <img src={image} alt="#" className="container-card_image-i" />
            </Tippy>
        </div>
    );
};
