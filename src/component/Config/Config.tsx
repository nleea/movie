import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import loadable from "@loadable/component";
import { _Link as Link } from "../UI/Link";
import "./config.css";

const Profile = loadable(() => import("./routes/profile/Profile"));
const Security = loadable(() => import('./routes/security/security'));
const Help = loadable(() => import('./routes/help/Help'));

const Configuration = () => {
    const { replace } = useHistory();
    useEffect(() => {
        replace('/config/profile');

    }, [replace])

    return (
        <>
            <h1 className="title-config">Configuration</h1>
            <div className="container-config" >
                <div className="config-data" >
                    <div className="config-dashboard">
                        <Link url="/config/profile" class="config-dashboard_options">
                            Profile
                        </Link>
                        <Link url="/config/security" class="config-dashboard_options">
                            Seguridad
                        </Link>
                        <Link url="/config/help" class="config-dashboard_options">
                            Help
                        </Link>
                    </div>
                    <div className="config-option">
                        <Switch>
                            <Route exact path="/config/profile" >
                                <Profile />
                            </Route>
                            <Route path="/config/security">
                                <Security />
                            </Route>
                            <Route path="/config/help">
                                <Help />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div></>
    );
};

export default Configuration;
