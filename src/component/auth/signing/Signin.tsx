import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../../provider/context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../custom-hooks/Auth/auth";

const Signin = () => {
    const [user, setuser] = useState({ email: "", password: "" });
    const { dispatch } = useContext(Context);
    const history = useHistory();

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
        <div>
            <div>
                <input type="text" onChange={handlerInput} name="email" />
                <input type="password" onChange={handlerInput} name="password" />
                <button onClick={handlerSubmit}>Send</button>
            </div>
        </div>
    );
};

export default Signin;
