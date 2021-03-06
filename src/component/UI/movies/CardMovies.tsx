import { useEffect, useState } from "react";
import axios from "axios";
import { Carrousel } from "./CarrouselMovie";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./cardMovies.css";

export const CardMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const resp = async () => {
      const movies = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=05d20036abfa4d9de53f269637c358dc&language=en-US&page=1"
      );
      const data = (movies.data as any).results;
      setData(data);
    };
    resp();
  }, []);

  return (
    <div style={{ height: "100%", width: "90%", margin: "auto" }} >
      {data.length === 0 ? null : (
        <Carrousel data={data} />
      )}
    </div>
  );
};
