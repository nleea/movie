import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { Fetch } from "../../custom-hooks/fetch-data";
import { FetchType } from "../../custom-hooks/fetch-type";
import { movie_api } from "../../util/urls";
import { Movie } from "../UI/movie/Movie";
import "./trending.css";

const Trending = () => {
    const [trending, setTrending] = useState([]);
    const [date, setDate] = useState("day");
    const { http, loading } = Fetch();
    const { httpType } = FetchType();
    const { url } = useRouteMatch();
    const { replace } = useHistory();

    useEffect(() => {
        const control = document.querySelector(".main-content");
        control?.classList.add("height-auto_trending");
        let leak = true;
        if (leak) {
            http("https://api.themoviedb.org/3/trending/all/day?api_key=" + movie_api, setTrending, leak);
        };
        return () => {
            control?.classList.remove("height-auto_trending");
            leak = false;
        };
    }, [http]);

    const getTrending = async (text: string) => {
        replace(`${url}/${text}`);
        let _url = `https://api.themoviedb.org/3/trending/${text}/${date}?api_key=${movie_api}`;
        httpType(_url, setTrending);
    };

    return (
        <Movie loading={loading} title="Trending" data={trending} >
            <Button click={() => getTrending("all")} type="container-button-type">
                All
            </Button>
            <Button
                click={() => getTrending("movie")}
                type="container-button-type"
            >
                Movie
            </Button>
            <Button click={() => getTrending("tv")} type="container-button-type">
                Tv
            </Button>
            <Button
                click={() => getTrending("person")}
                disabled={true}
                type="container-button-type"
            >
                Person
            </Button>
            <hr style={{ width: "100%" }} />
            <Button click={() => setDate("day")} type="container-button-type">
                Day
            </Button>
            <Button click={() => setDate("week")} type="container-button-type">
                Week
            </Button>
        </Movie >
    );
};

export default Trending;
