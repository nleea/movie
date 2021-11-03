import { Movies } from "../../component/movies/Movies";
import { ListMovies } from "../list_movies/ListMovies";

export const Home = () => {
    return (
        <>
            <Movies />
            <ListMovies />
        </>
    );
};