import { useState, useEffect, } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { Card } from "../UI/card/Card";
import { Button } from "../UI/button/Button";
import { Wrap } from "../../container/wrap/Wrap";
import { ProviderToolTip } from "../UI/tooltip/provider/provider";
import { Fetch } from "../../custom-hooks/fetch-data";
import { FetchType } from "../../custom-hooks/fetch-type";
import "./provider.css";

const Providers = () => {
    const [providers, setProviders] = useState([]);
    const { http, loading } = Fetch();
    const { httpType } = FetchType();
    const { location, replace } = useHistory();
    const { url } = useRouteMatch();

    useEffect(() => {
        let leak = true;
        http(
            "https://api.themoviedb.org/3/watch/providers/movie?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US",
            setProviders, leak
        );
        return () => {
            leak = false;
        }
    }, [http]);

    const typeProvider = (type: string) => {
        replace(`${url}/${type}`);

        if (type === "movie") {
            http(
                "https://api.themoviedb.org/3/watch/providers/movie?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US",
                setProviders, true
            );
        } else {
            httpType(
                "https://api.themoviedb.org/3/watch/providers/tv?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US",
                setProviders
            );
        }
    };

    const Component = () => {
        return (
            <Route exact path={location.pathname}>
                {providers.map((provider: any, index) => (
                    <Card
                        data={provider}
                        url={provider.logo_path}
                        key={index}
                        component={ProviderToolTip}
                    />
                ))}
            </Route>
        );
    };

    return (
        <>
            <div className="container-type">
                <Button click={() => typeProvider("movie")} type="ss">
                    Movies
                </Button>
                <Button click={() => typeProvider("serie")} type="ss">
                    Series
                </Button>
            </div>
            <Wrap loading={loading}>
                <div className="container-provider">
                    <div className="container-provider-list">
                        <Component />
                    </div>
                </div>
            </Wrap>
        </>
    );
};

export default Providers;
