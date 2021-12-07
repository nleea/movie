import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { DashBoard } from "../../component/dashboard/DashBoard";
import { Routers } from "../../component/route/Route";
import { Context } from "../../provider/context";
import { RoutersAuth } from "../route/auth/Auth";

export const Layout = () => {
    const history = useHistory();
    const { state, dispatch } = useContext(Context);
    let render = <RoutersAuth />;

    useEffect(() => {
        const auth = JSON.parse(sessionStorage.getItem("auth")!);
        if (auth) {
            dispatch({
                payload: { token: auth.token, email: auth.email },
                type: "login",
            });
        }
        if (state.Isauth && state.user.token) {
            history.replace("/movies");
        } else {
            history.replace("/login");
        }
    }, [history, state.Isauth, dispatch, state.user.token]);

    if (state.Isauth) {
        render = (
            <>
                <div className="dashboard">
                    <DashBoard />
                </div>
                <div className="main-content">
                    <Routers />
                </div>
            </>
        );
    }

    return <>{render}</>;
};
