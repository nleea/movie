import { useState, useEffect } from "react";
import { Card } from "../UI/card/Card";
import { Button } from "../UI/button/Button";
import { ToolTip } from "../UI/tooltip/person-tooltip/person-tooltip";
import { Wrap } from "../../container/wrap/Wrap";
import { Fetch } from "../../custom-hooks/fetch-data";
import { FetchPage } from "../../custom-hooks/fetch-page";
import { movie_api } from "../../util/urls";
import "./person.css";

const Person = () => {
    const [popular, setPopular] = useState<Array<any>>();
    const { http, loading } = Fetch();
    const { httpPage } = FetchPage();

    useEffect(() => {
        let leak = true;
        http(`https://api.themoviedb.org/3/person/popular?api_key=${movie_api}&language=en-US&page=1`, setPopular, leak);
        return () => { leak = false; }
    }, [http]);

    const GetPopular = async (page: number = 1) => {
        httpPage(`https://api.themoviedb.org/3/person/popular?api_key=${movie_api}&language=en-US&page=${page}`, setPopular)
    };

    return (
        <Wrap loading={loading} >
            <div className="container-popular">
                <div className="popular-title" ><h1>Persons famous</h1></div>
                <div className="container-popular_content">
                    {popular ? popular.map((person: any, index) => <Card data={person} url={person.profile_path} key={index} component={ToolTip} />) : null}
                </div>
                <div className="container-genrer_pagination" >
                    <Button click={() => GetPopular()} type="">1</Button>
                    <Button click={() => GetPopular(2)} type="">2</Button>
                    <Button click={() => GetPopular(3)} type="">3</Button>
                    <Button click={() => GetPopular(4)} type="">4</Button>
                </div>
            </div>
        </Wrap>
    );
};

export default Person;