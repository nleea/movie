import { useEffect, useState } from "react";
import { Card } from "../UI/card/Card";
import { Button } from "../UI/button/Button";
import { Select } from "../select/Select";
import { ToolTip } from "../UI/tooltip/Tooltip";
import { Wrap } from "../../container/wrap/Wrap";
import { Fetch } from "../../custom-hooks/fetch-data";
import { FetchType } from "../../custom-hooks/fetch-type";
import "./series.css";

const Series = () => {
    const [series, setSeries] = useState([]);
    const [type, setType] = useState('top_rated');
    const { http, loading } = Fetch();
    const { httpType } = FetchType();

    useEffect(() => {
        const control = document.querySelector(".main-content")
        control?.classList.add('height-auto_series');
        http("https://api.themoviedb.org/3/tv/top_rated?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=1", setSeries);
        return () => {
            control?.classList.remove('height-auto_series');
        }
    }, [http]);

    const getSeries = async (text: string, page: number = 1) => {
        if (type !== text) {
            setType(text);
        }
        let url = `https://api.themoviedb.org/3/tv/${text}?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=${page}`;
        if (text === "latest") {
            url = `https://api.themoviedb.org/3/tv/${text}?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=${page}`;
        }
        httpType(url, setSeries);
    };

    return (
        <Wrap loading={loading} >
            <div className="series-title" ><h1>Series</h1></div>
            <div className="container-series" >
                <Select class="container-series_type" >
                    <Button click={() => getSeries('top_rated')} type="container-button-type" >Top Rated</Button>
                    <Button click={() => getSeries('latest')} disabled={true} type="container-button-type">Lasted</Button>
                    <Button click={() => getSeries('airing_today')} type="container-button-type">TV airing today</Button>
                    <Button click={() => getSeries('on_the_air')} type="container-button-type">On the Air</Button>
                    <Button click={() => getSeries('popular')} type="container-button-type">Popular</Button>
                </Select>
                <div className="container-series_content">
                    {
                        series.map((series: any, index: number) => {
                            return <Card data={series} url={series.poster_path} key={index} component={ToolTip} type="series" />
                        })
                    }
                </div>
            </div>
            <div className="container-series_pagination" >
                <button onClick={() => getSeries(type, 1)}>1</button>
                <button onClick={() => getSeries(type, 2)}>2</button>
                <button onClick={() => getSeries(type, 3)}>3</button>
                <button onClick={() => getSeries(type, 4)}>4</button>
            </div>
        </Wrap>
    );
};

export default Series;