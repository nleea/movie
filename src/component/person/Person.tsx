import { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "../UI/card/person-card/person-card";
import { Button } from "../UI/button/Button";
import "./person.css";

const Person = () => {
    const [popular, setPopular] = useState<Array<any>>();

    useEffect(() => {
        const request = async () => {
            const resp = await Axios.get(
                "https://api.themoviedb.org/3/person/popular?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=1"
            );
            const data = (resp.data as any).results;
            setPopular(data);
        };
        request();
    }, []);

    const GetPopular = async (page: number = 1) => {
        let url = `https://api.themoviedb.org/3/person/popular?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=${page}`;
        const resp = await Axios.get(url);
        const data = (resp.data as any).results;
        setPopular(data);
    };

    return (
        <div className="container-popular">
            <h1>Person famous</h1>
            <div className="container-popular_content">
                {popular ? popular.map((person: any, index) => <Card data={person} url={person.profile_path} key={index} />) : null}
            </div>
            <div className="container-genrer_pagination" >
                <Button click={() => GetPopular()} type="">1</Button>
                <Button click={() => GetPopular(2)} type="">2</Button>
                <Button click={() => GetPopular(3)} type="">3</Button>
                <Button click={() => GetPopular(4)} type="">4</Button>
            </div>
        </div>
    );
};

export default Person;