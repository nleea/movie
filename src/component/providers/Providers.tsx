import { useState, useEffect } from "react";
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

    useEffect(() => {
        http(
            "https://api.themoviedb.org/3/watch/providers/movie?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US",
            setProviders
        );
    }, [http]);

    return (
        <>
            <div className="container-type">
                <Button
                    click={() =>
                        http(
                            "https://api.themoviedb.org/3/watch/providers/movie?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US",
                            setProviders
                        )
                    }
                    type="ss"
                >
                    Movies
                </Button>
                <Button
                    click={() =>
                        httpType(
                            "https://api.themoviedb.org/3/watch/providers/tv?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US",
                            setProviders
                        )
                    }
                    type="ss"
                >
                    Series
                </Button>
            </div>
            <Wrap loading={loading}>
                <div className="container-provider">
                    <div className="container-provider-list">
                        {providers.map((provider: any, index) => (
                            <Card
                                data={provider}
                                url={provider.logo_path}
                                key={index}
                                component={ProviderToolTip}
                            />
                        ))}
                    </div>
                </div>
            </Wrap>
        </>
    );
};

export default Providers;
