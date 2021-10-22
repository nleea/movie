import { useEffect, useState } from "react";
import Axios from "axios";
import { Card } from "../../component/UI/card/Card";
import "./listmovies.scss";

export const ListMovies = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const movies = async () => {
      const resp = await Axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=1"
      );
      const data = (resp.data as any).results;
      setState(data);
    };
    movies();
  },[]);

  return (
    <div className="container-list_movies">
      <div className="container-list_movies-button">
        <button>Top Rated</button>
        <button>Upcomint</button>
        <button>Popular</button>
        <button>Now Playing</button>
        <button>Lastest</button>
      </div>
      <div className="container-list_movies-content">
        {state.map((m: any) => {
          
          return <Card url={m.poster_path} />;
        })}
      </div>
    </div>
  );
};
