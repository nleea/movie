import { useEffect, useState } from "react";
import { Card } from "../UI/card/Card";
import { useHistory, useRouteMatch, Route } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { Select } from "../select/Select";
import { ToolTip } from "../UI/tooltip/Tooltip";
import { Wrap } from "../../container/wrap/Wrap";
import { Fetch } from "../../custom-hooks/fetch-data";
import { FetchType } from "../../custom-hooks/fetch-type";
import "./trending.css";


const Trending = () => {
    const [trending, setTrending] = useState([]);
    const [date, setDate] = useState("day");
    const { http, loading } = Fetch();
    const { httpType } = FetchType();
    const { url } = useRouteMatch();
    const { location, replace } = useHistory();

    useEffect(() => {
        const control = document.querySelector(".main-content");
        control?.classList.add("height-auto_trending");
        let leak = true;
        if (leak) {
            http("https://api.themoviedb.org/3/trending/all/day?api_key=05d20036abfa4d9de53f269637c358dc", setTrending, leak);
        };
        return () => {
            control?.classList.remove("height-auto_trending");
            leak = false;
        };
    }, [http]);

    const getTrending = async (text: string) => {
        replace(`${url}/${text}`);
        let _url = `https://api.themoviedb.org/3/trending/${text}/${date}?api_key=05d20036abfa4d9de53f269637c358dc`;
        httpType(_url, setTrending);
    };

    const Component = () => {
        return (
            <Route exact path={location.pathname} >
                {trending.map((trend: any) => {
                    return (
                        <Card
                            url={trend.poster_path}
                            data={trend}
                            key={trend.id}
                            component={ToolTip}
                        />
                    );
                })}
            </Route>
        );
    };

    return (
        <Wrap loading={loading} >
            <div className="trending-title">
                <h1>Trending</h1>
            </div>
            <div className="container-trending">
                <Select class="container-trending_type">
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
                </Select>
                <div className="container-trending_content">
                    <Component />
                </div>
            </div>
        </Wrap >
    );
};

export default Trending;
