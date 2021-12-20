import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { Fetch } from "../../custom-hooks/fetch-data";
import { FetchType } from "../../custom-hooks/fetch-type";
import { movie_api } from "../../util/urls";
import { Movie } from "../UI/movie/Movie";
import "./series.css";

const Series = () => {
    const [series, setSeries] = useState([]);
    const [type, setType] = useState("top_rated");
    const { http, loading } = Fetch();
    const { httpType } = FetchType();
    const { url } = useRouteMatch();
    const { replace } = useHistory();

    useEffect(() => {
        const control = document.querySelector(".main-content");
        control?.classList.add("height-auto_series");
        let leak = true;
        http(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${movie_api}&language=en-US&page=1`,
            setSeries,
            leak
        );
        return () => {
            control?.classList.remove("height-auto_series");
            leak = false;
        };
    }, [http]);

    const getSeries = async (text: string, page: number = 1) => {
        if (type !== text) {
            setType(text);
        }
        replace(`${url}/${text}`);
        let _url = `https://api.themoviedb.org/3/tv/${text}?api_key=${movie_api}&language=en-US&page=${page}`;
        httpType(_url, setSeries);
    };

    return (
        <>
            <Movie title="Series" data={series} loading={loading}>
                <Button
                    click={() => getSeries("top_rated")}
                    type="container-button-type"
                >
                    Top Rated
                </Button>
                <Button
                    click={() => getSeries("latest")}
                    disabled={true}
                    type="container-button-type"
                >
                    Lasted
                </Button>
                <Button
                    click={() => getSeries("airing_today")}
                    type="container-button-type"
                >
                    TV airing today
                </Button>
                <Button
                    click={() => getSeries("on_the_air")}
                    type="container-button-type"
                >
                    On the Air
                </Button>
                <Button click={() => getSeries("popular")} type="container-button-type">
                    Popular
                </Button>
            </Movie>
            <div className="container-series_pagination">
                <button onClick={() => getSeries(type, 1)}>1</button>
                <button onClick={() => getSeries(type, 2)}>2</button>
                <button onClick={() => getSeries(type, 3)}>3</button>
                <button onClick={() => getSeries(type, 4)}>4</button>
            </div>
        </>
    );
};

export default Series;
