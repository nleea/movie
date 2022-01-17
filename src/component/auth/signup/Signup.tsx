import { useContext, useState, useEffect } from "react";
import { Context } from "../../../provider/context";
import { _Link as Link } from "../../UI/Link";
import "./signup.css";

const data = {
    name: "",
    lastname: "",
    age: 0,
    email: "",
    password: ""
}

const Signup = () => {
    const [user, setuser] = useState(data);
    const { dispatch } = useContext(Context);

    useEffect(() => {
        const element = document.querySelector(".content-separate");
        element?.classList.toggle("content-separate_signup");
        return () => {
            element?.classList.toggle("content-separate_signup");
        };
    }, [])

    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    };

    const handlerSubmit = () => {
        dispatch({ type: "signup", payload: user });
    };

    return (
        <div className="content-signup" >
            <div className="content-signup_header">
                <h1>Signup</h1>
            </div>
            <div className="content-signup_body" >
                <input type="text" onChange={handlerInput} name="name" placeholder="Name" />
                <input type="text" onChange={handlerInput} name="lastname" placeholder="Last Name" />
                <input type="number" onChange={handlerInput} name="age" placeholder="Age" />
                <input type="text" onChange={handlerInput} name="email" placeholder="Email" />
                <input type="password" onChange={handlerInput} name="password" placeholder="Password" />
                <button onClick={handlerSubmit} >Send</button>
            </div>
            <div className="content-signup_expands" >
                <Link url="/login"> Ya tienes Cuenta?</Link>
            </div>
        </div>
    );
};

export default Signup;