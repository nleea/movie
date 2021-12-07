import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const Signin = loadable(() => import('../../auth/signing/Signin'));
const Signup = loadable(() => import('../../auth/signup/Signup'));

export const RoutersAuth = () => {
    return (
        <Switch>
            <Route path="/login" >
                <Signin />
            </Route>
            <Route path="/signup" >
                <Signup />
            </Route>
        </Switch>
    );
};
