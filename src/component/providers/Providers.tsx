import { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "../UI/card/Card";
import { ProviderToolTip } from "../UI/tooltip/provider/provider";
import "./provider.css"

const Providers = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const resp = await Axios.get(("https://api.themoviedb.org/3/watch/providers/movie?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US"));
            const data = (resp.data as any).results;
            setProviders(data);
        }
        fetch();
    }, []);

    return (
        <div className="container-provider" >
            <div className="container-provider-list" >
                {providers.map((provider: any, index) => <Card data={provider} url={provider.logo_path} key={index} component={ProviderToolTip} />)}
            </div>
        </div>
    );
}

export default Providers;