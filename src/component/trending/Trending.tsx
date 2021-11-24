import { useEffect, useState } from "react";
import Axios from "axios";
import { Card } from "../UI/card/Card";
import { Button } from "../UI/button/Button";
import { Select } from "../select/Select";
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
            <Select class="container-trending_type">
                <Button click={() => getTrending('all')} type="container-button-type">All</Button>
                <Button click={() => getTrending('movie')} type="container-button-type">Movie</Button>
                <Button click={() => getTrending('tv')} type="container-button-type">Tv</Button>
                <Button click={() => getTrending('person')} disabled={true} type="container-button-type">Person</Button>
                <hr style={{ width: "100%" }} />
                <Button click={() => setDate('day')} type="container-button-type">Day</Button>
                <Button click={() => setDate('week')} type="container-button-type">Week</Button>
            </Select>
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
