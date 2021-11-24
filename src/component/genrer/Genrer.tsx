import { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "../UI/button/Button";
import { Card } from "../UI/card/Card";
import { Select } from "../select/Select";
import "./genrer.css";

//https://api.themoviedb.org/3/movie/385128/videos?api_key=05d20036abfa4d9de53f269637c358dc

const Genrer = () => {
    const [genrer, setGenrer] = useState([]);
    const [type, setType] = useState(28);

    useEffect(() => {
        const control = document.querySelector(".main-content")
        control?.classList.add('height-auto_series');
        const request = async () => {
            const resp = await Axios.get(`http://api.themoviedb.org/3/genre/28/movies?api_key=05d20036abfa4d9de53f269637c358dc&page=1`);
            const data = (resp.data as any).results;
            setGenrer(data);
        }
        request();
        return () => {
            control?.classList.remove('height-auto_series');
        }
    }, []);

    const getByGenrer = async (id: number, page: number = 1) => {
        if (type !== id) {
            setType(id);
        }
        let url = `http://api.themoviedb.org/3/genre/${id}}/movies?api_key=05d20036abfa4d9de53f269637c358dc&page=${page}`;
        const resp = await Axios.get(url);
        const data = (resp.data as any).results;
        setGenrer(data);
        setType(id);
    };

    return (
        <>
            <div className="container-genrer">
                <Select class="container-genrer_type">
                    <Button click={() => getByGenrer(28)} type="container-button-type">Action</Button>
                    <Button click={() => getByGenrer(12)} type="container-button-type">Adventure</Button>
                    <Button click={() => getByGenrer(16)} type="container-button-type">Animation</Button>
                    <Button click={() => getByGenrer(35)} type="container-button-type">Comedy</Button>
                    <Button click={() => getByGenrer(80)} type="container-button-type">Crime</Button>
                    <Button click={() => getByGenrer(99)} type="container-button-type">Documentary</Button>
                    <Button click={() => getByGenrer(18)} type="container-button-type">Drama</Button>
                    <Button click={() => getByGenrer(10751)} type="container-button-type">Family</Button>
                    <Button click={() => getByGenrer(14)} type="container-button-type">Fantasy</Button>
                    <Button click={() => getByGenrer(36)} type="container-button-type">History</Button>
                    <Button click={() => getByGenrer(27)} type="container-button-type">Horror</Button>
                    <Button click={() => getByGenrer(10402)} type="container-button-type">Music</Button>
                    <Button click={() => getByGenrer(9648)} type="container-button-type">Mystery</Button>
                    <Button click={() => getByGenrer(10749)} type="container-button-type">Romance</Button>
                    <Button click={() => getByGenrer(878)} type="container-button-type">Science Fiction</Button>
                    <Button click={() => getByGenrer(10770)} type="container-button-type">TV Movie</Button>
                    <Button click={() => getByGenrer(53)} type="container-button-type">Thriller</Button>
                    <Button click={() => getByGenrer(10752)} type="container-button-type">War</Button>
                    <Button click={() => getByGenrer(37)} type="container-button-type">Western</Button>
                </Select>
                <div className="container-genrer_content">
                    {genrer.map((genrer: any, index) => <Card data={genrer} url={genrer.poster_path} key={index} />)}
                </div>
            </div>
            <div className="container-genrer_pagination" >
                <Button click={() => getByGenrer(type)} type="">1</Button>
                <Button click={() => getByGenrer(type, 2)} type="">2</Button>
                <Button click={() => getByGenrer(type, 3)} type="">3</Button>
                <Button click={() => getByGenrer(type, 4)} type="">4</Button>
            </div>
        </>
    );
};

export default Genrer;