import { useEffect } from "react";
import axios from "axios";
import Carrousel from "../movies/CarrouselMovie";
import { Progress } from "../progress/Progress";
import { RatingSIze } from "../rating/Rating";
import "./cardMovies.scss";

export const CardMovies = () => {
  useEffect(() => {
    const resp = async () => {
      const movies = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=1"
      );
    };
    resp();
  });

  return (
    <div className="card-movies">
      <div className="card-movies_carrousel">
        <Carrousel class={{ color: "black" }} />
      </div>
      <div className="card-movies_info">
        <div className="card-movies_info-description">
          <h1>Description</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          excepturi consequatur numquam rerum aut incidunt libero odio magni,
          omnis corrupti, quod aliquid non ut veritatis? Libero temporibus
          beatae quae explicabo?
        </div>
        <h4>
          Language: <strong>En</strong>
        </h4>

        <div className="card-movies_info-rating">
          <h4>Vote average:</h4>
          <RatingSIze />
        </div>
        <div className="card-movies_info-vote">
          <h4>Vote count:</h4>
          <strong>2020</strong>
          <h4>Release</h4>
          <strong>2020-12-21</strong>
        </div>

        <div className="card-movies_info-progress">
          <h4>Popularity: </h4>
          <Progress />
        </div>
      </div>
    </div>
  );
};
