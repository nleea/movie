import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import { Home } from "../../container/home/Home";

const Series = loadable(() => import('../series/Series'));
const Trending = loadable(() => import("../trending/Trending"));

export const Routers = () => {
    return (
        <Switch>
            <Route exact path="/movies">
                <Home />
            </Route>
            <Route path="/series">
                <Series />
            </Route>
            <Route path="/trending">
                <Trending />
            </Route>
        </Switch>
    );
};
