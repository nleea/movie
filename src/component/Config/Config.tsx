import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import loadable from "@loadable/component";
import { _Link as Link } from "../UI/Link";
import "./config.css";

const Profile = loadable(() => import("./routes/profile/Profile"));
const Security = loadable(() => import('./routes/security/security'));
const Help = loadable(() => import('./routes/help/Help'));

const Configuration = () => {
    const { replace, location } = useHistory();
    useEffect(() => {
        replace('/config/profile');
        console.log(location);
    }, [replace])

    return (
        <div className="container-config" >
            <div className="config-data" >
                <div className="config-dashboard">
                    <div className="config-dashboard_option1">
                        <Link url="/config/profile" >
                            Profile
                        </Link>
                    </div>
                    <div className="config-dashboard_option2">
                        <Link url="/config/security"  >
                            Seguridad
                        </Link>
                    </div>
                    <div className="config-dashboard_option3">
                        <Link url="/config/help" >
                            Help
                        </Link>
                    </div>
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
        </div>
    );
};

export default Configuration;