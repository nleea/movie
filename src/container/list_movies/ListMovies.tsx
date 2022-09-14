import { useEffect, useState } from "react";
import Axios from "axios";
import { Card } from "../../component/UI/card/Card";
import { Button } from "../../component/UI/button/Button";
import { ToolTip } from "../../component/UI/tooltip/Tooltip";
import "./listmovies.css";

export const ListMovies = () => {
  const [state, setState] = useState([]);
  const [type, setType] = useState("top_rated");

  useEffect(() => {
    const movies = async () => {
      const resp = await Axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=1"
      );
      const data = (resp.data as any).results;
      setState(data);
    };
    movies();
  }, []);

  const getMovies = async (text: string, page: number = 1) => {
    if (type !== text) {
      setType(text);
    }
    let url = `https://api.themoviedb.org/3/movie/${text}?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=${page}`;
    if (text === "latest") {
      url = `https://api.themoviedb.org/3/movie/${text}?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US`;
    }
    const resp = await Axios.get(url);
    const data = (resp.data as any).results;
    setState(data);
  };

  return (
    <div className="container-list_movies">
      <div className="container-list_movies-button">
        <Button click={() => getMovies("top_rated")} type="">Top Rated</Button>
        <Button click={() => getMovies("upcoming")} type="">Upcomint</Button>
        <Button click={() => getMovies("popular")} type="">Popular</Button>
        <Button click={() => getMovies("now_playing")} type="">Now Playing</Button>
        <Button click={() => getMovies("latest")} disabled={true} type="">Lastest</Button>
      </div>
      <div className="container-list_movies-content">
        {state.map((m: any) => {
          return <Card url={m.poster_path} data={m} component={ToolTip} tupe="movies" key={m.id}></Card>;
        })}
      </div>
      <div className="container-pagination" >
        <button onClick={() => getMovies(type, 1)}>1</button>
        <button onClick={() => getMovies(type, 2)}>2</button>
        <button onClick={() => getMovies(type, 3)}>3</button>
        <button onClick={() => getMovies(type, 4)}>4</button>
      </div>
    </div>
  );
};
