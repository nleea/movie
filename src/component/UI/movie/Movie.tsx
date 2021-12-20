import { Card } from "../card/Card";
import { useHistory, Route } from "react-router-dom";
import { Select } from "../../select/Select";
import { Wrap } from "../../../container/wrap/Wrap";
import { ToolTip } from "../tooltip/Tooltip";
import "./movie.css";

export const Movie = (props: any) => {
    const { location } = useHistory();

    const Component = () => {
        return (
            <Route exact path={location.pathname} >
                {props.data.map((trend: any) => {
                    return (
                        <Card
                            url={trend.poster_path}
                            data={trend}
                            key={trend.id}
                            component={ToolTip}
                        />
                    );
                })}
            </Route>
        );
    };

    return (
        <Wrap loading={props.loading} >
            <div className="movie-title">
                <h1>{props.title}</h1>
            </div>
            <div className="container-movie">
                <Select class="container-movie_type">
                    {props.children}
                </Select>
                <div className="container-movie_content">
                    <Component />
                </div>
            </div>
        </Wrap >
    );
};
