import { Movies } from "../../component/movies/Movies";
import { ListMovies } from "../list_movies/ListMovies";
import "./home.css";

export const Home = () => {
    return (

        <div className="container-home" >
            <Movies />
            <ListMovies />
        </div>

    );
};