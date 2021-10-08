import { CardMovies } from "../UI/movies/CardMovies";

export const Movies = () => {
  return (
    <div className="movies_container">
      <div className="movies_container_slider">
        <CardMovies />
      </div>
      <div className="movies_container_list"></div>
    </div>
  );
};
