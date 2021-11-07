import { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "../UI/button/Button";
import { Card } from "../UI/card/Card";
import "./genrer.css";

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
                <div className="container-genrer_type">
                    <Button click={() => getByGenrer(28)} >Action</Button>
                    <Button click={() => getByGenrer(12)} >Adventure</Button>
                    <Button click={() => getByGenrer(16)} >Animation</Button>
                    <Button click={() => getByGenrer(35)} >Comedy</Button>
                    <Button click={() => getByGenrer(80)} >Crime</Button>
                    <Button click={() => getByGenrer(99)} >Documentary</Button>
                    <Button click={() => getByGenrer(18)} >Drama</Button>
                    <Button click={() => getByGenrer(10751)} >Family</Button>
                    <Button click={() => getByGenrer(14)} >Fantasy</Button>
                    <Button click={() => getByGenrer(36)} >History</Button>
                    <Button click={() => getByGenrer(27)} >Horror</Button>
                    <Button click={() => getByGenrer(10402)} >Music</Button>
                    <Button click={() => getByGenrer(9648)} >Mystery</Button>
                    <Button click={() => getByGenrer(10749)} >Romance</Button>
                    <Button click={() => getByGenrer(878)} >Science Fiction</Button>
                    <Button click={() => getByGenrer(10770)} >TV Movie</Button>
                    <Button click={() => getByGenrer(53)} >Thriller</Button>
                    <Button click={() => getByGenrer(10752)} >War</Button>
                    <Button click={() => getByGenrer(37)} >Western</Button>
                </div>
                <div className="container-genrer_content">
                    {genrer.map((genrer: any, index) => <Card data={genrer} url={genrer.poster_path} key={index} />)}
                </div>
            </div>
            <div className="container-genrer_pagination" >
                <Button click={() => getByGenrer(type)}>1</Button>
                <Button click={() => getByGenrer(type, 2)}>2</Button>
                <Button click={() => getByGenrer(type, 3)}>3</Button>
                <Button click={() => getByGenrer(type, 4)}>4</Button>
            </div>
        </>
    );
};

export default Genrer;