import { useState, useEffect } from "react";
import axios from "axios";
import "./image.css";

interface props {
    url: string;
    title: string;
    overview: string;
}

export const Image = (props: props) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        const imagePath = async () => {
            const data = await axios.get(`https://image.tmdb.org/t/p/w500${props.url}`);
            setImage(data.config.url!);
        };
        imagePath();
    }, [props.url]);

    return (
        <>
            <div key={props.url} className="container_image-carrousel">
                <img src={image} alt="" className="container_image-carrousel_i" decoding="async" loading="lazy" sizes="(max-height: 500px) 500px, 20vh" />
                <div className="container_image-overview">
                    <h3>{props.title}</h3>
                    <div>{props.overview}</div>
                </div>
            </div>
        </>
    );
};