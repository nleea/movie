import { useEffect, useState } from "react";
import { useRouteMatch, useHistory, Route } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { Card } from "../UI/card/Card";
import { ToolTip } from "../UI/tooltip/Tooltip";
import { Select } from "../select/Select";
import { Fetch } from "../../custom-hooks/fetch-data";
import { FetchPage } from "../../custom-hooks/fetch-page";
import { Wrap } from "../../container/wrap/Wrap";
import "./genrer.css";

//https://api.themoviedb.org/3/movie/385128/videos?api_key=05d20036abfa4d9de53f269637c358dc

const Genrer = () => {
    const [genrer, setGenrer] = useState([]);
    const [type, setType] = useState(28);
    const [genre] = useState("action");
    const { http, loading } = Fetch();
    const { httpPage } = FetchPage();
    const history = useHistory();
    const { url } = useRouteMatch();

    useEffect(() => {
        const control = document.querySelector(".main-content")
        control?.classList.add('height-auto_series');
        let leak = true;
        http(`http://api.themoviedb.org/3/genre/28/movies?api_key=05d20036abfa4d9de53f269637c358dc&page=1`, setGenrer, leak);
        return () => {
            control?.classList.remove('height-auto_series');
            leak = false;
        }
    }, [http]);

    const getByGenrer = async (id: number, genrer: string = "", page: number = 1) => {
        if (type !== id) {
            setType(id);
        }
        history.replace(`${url}/${genrer}`);
        let _url = `http://api.themoviedb.org/3/genre/${id}}/movies?api_key=05d20036abfa4d9de53f269637c358dc&page=${page}`;
        httpPage(_url, setGenrer);
        setType(id);
    };

    const Component = () => {
        return (
            <Route exact path={history.location.pathname}>
                {genrer.map((genrer: any, index) => <Card data={genrer} url={genrer.poster_path} key={index} component={ToolTip} />)}
            </Route>

        );
    };

    return (
        <Wrap loading={loading} >
            <div className="genrer-title">
                <h1>Genrer</h1>
            </div>
            <div className="container-genrer">
                <Select class="container-genrer_type">
                    <Button click={() => getByGenrer(28, "action")} type="container-button-type">Action</Button>
                    <Button click={() => getByGenrer(12, "adventure")} type="container-button-type">Adventure</Button>
                    <Button click={() => getByGenrer(16, "animation")} type="container-button-type">Animation</Button>
                    <Button click={() => getByGenrer(35, "comedy")} type="container-button-type">Comedy</Button>
                    <Button click={() => getByGenrer(80, "crime")} type="container-button-type">Crime</Button>
                    <Button click={() => getByGenrer(99, "documentary")} type="container-button-type">Documentary</Button>
                    <Button click={() => getByGenrer(18, "drama")} type="container-button-type">Drama</Button>
                    <Button click={() => getByGenrer(10751, "family")} type="container-button-type">Family</Button>
                    <Button click={() => getByGenrer(14, "fantasy")} type="container-button-type">Fantasy</Button>
                    <Button click={() => getByGenrer(36, "history")} type="container-button-type">History</Button>
                    <Button click={() => getByGenrer(27, "horror")} type="container-button-type">Horror</Button>
                    <Button click={() => getByGenrer(10402, "music")} type="container-button-type">Music</Button>
                    <Button click={() => getByGenrer(9648, "mystery")} type="container-button-type">Mystery</Button>
                    <Button click={() => getByGenrer(10749, "romance")} type="container-button-type">Romance</Button>
                    <Button click={() => getByGenrer(878, "science-fiction")} type="container-button-type">Science Fiction</Button>
                    <Button click={() => getByGenrer(10770, "tv-movie")} type="container-button-type">TV Movie</Button>
                    <Button click={() => getByGenrer(53, "thriller")} type="container-button-type">Thriller</Button>
                    <Button click={() => getByGenrer(10752, "war")} type="container-button-type">War</Button>
                    <Button click={() => getByGenrer(37, "western")} type="container-button-type">Western</Button>
                </Select>
                <div className="container-genrer_content">
                    <Component />
                </div>
            </div>
            <div className="container-genrer_pagination" >
                <Button click={() => getByGenrer(type, genre)} type="">1</Button>
                <Button click={() => getByGenrer(type, genre, 2)} type="">2</Button>
                <Button click={() => getByGenrer(type, genre, 3)} type="">3</Button>
                <Button click={() => getByGenrer(type, genre, 4)} type="">4</Button>
            </div>
        </Wrap>
    );
};

export default Genrer;