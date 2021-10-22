import { CardMovies } from "../UI/movies/CardMovies";
import "./movies.scss";

export const Movies = () => {
  return (
    <div className="movies_container">
      <div className="movies_container_slider">
        <CardMovies />
      </div>
    </div>
  );
};
