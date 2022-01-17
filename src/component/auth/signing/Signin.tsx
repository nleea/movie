import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../../provider/context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, } from "../../../custom-hooks/Auth/auth";
import { _Link as Link } from "../../UI/Link";
import "./signin.css";

const data = {
    email: "",
    password: ""
};

const Signin = () => {
    const [user, setuser] = useState(data);
    const { dispatch } = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        const element = document.querySelector(".content-separate");
        element?.classList.toggle("content-separate_signin");
        return () => {
            element?.classList.toggle("content-separate_signin");
        };
    }, []);

    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    };

    const handlerSubmit = async () => {
        signInWithEmailAndPassword(auth, user.email, user.password).then(
            async (u) => {
                const token = await u.user.getIdToken();
                dispatch({ type: "login", payload: { email: u.user.email, token } });
                history.replace("/movies");
            }
        );
    };

    return (
        <div className="content-signin">
            <div className="content-signin_header">
                <h1>Signin</h1>
            </div>
            <div className="content-signin_body">
                <input type="text" onChange={handlerInput} name="email" placeholder="Email" />
                <input type="password" onChange={handlerInput} name="password" placeholder="Password" />
                <button onClick={handlerSubmit}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-send-fill util-space"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"
                        />
                    </svg>
                    Movies
                </button>
            </div>
            <div className="content-signin_expands">
                <Link url="/signup"> No tienes Cuenta?</Link>
            </div>
        </div>
    );
};

export default Signin;
