import { useEffect, useState } from "react";
import Axios from "axios";
import { Card } from "../UI/card/Card";
import "./trending.css";

const Trending = () => {
    const [trending, setTrending] = useState([]);
    const [date, setDate] = useState('day');

    useEffect(() => {
        const control = document.querySelector(".main-content");
        control?.classList.add('height-auto_trending');
        const request = async () => {
            const resp = await Axios.get(
                "https://api.themoviedb.org/3/trending/all/day?api_key=05d20036abfa4d9de53f269637c358dc"
            );
            const data = (resp.data as any).results;
            setTrending(data);
        };
        request();
        return () => {
            control?.classList.remove('height-auto_trending');
        }
    }, []);

    const getTrending = async (text: string) => {
        let url = `https://api.themoviedb.org/3/trending/${text}/${date}?api_key=05d20036abfa4d9de53f269637c358dc`;
        const resp = await Axios.get(url);
        const data = (resp.data as any).results;
        setTrending(data);
    };

    return (
        <div className="container-trending">
            <div className="container-trending_type">
                <button onClick={() => getTrending('all')} >All</button>
                <button onClick={() => getTrending('movie')} >Movie</button>
                <button onClick={() => getTrending('tv')} >Tv</button>
                <button onClick={() => getTrending('person')} disabled={true}>Person</button>
                <hr style={{ width: "100%" }} />
                <button onClick={() => setDate('day')} >Day</button>
                <button onClick={() => setDate('week')} >Week</button>
            </div>
            <div className="container-trending_content">
                {trending.map((trend: any) => {
                    return <Card url={trend.poster_path} data={trend} key={trend.id} />;
                })}
            </div>
            <div className="container-trending_pagination" >
                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button >4</button>
            </div>
        </div>
    );
};

export default Trending;
