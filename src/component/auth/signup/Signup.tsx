import { useContext, useState } from "react";
import { Context } from "../../../provider/context";

const Signup = () => {
    const [user, setuser] = useState({ name: "", lastname: "", age: 0, email: "", password: "" });
    const { dispatch } = useContext(Context);

    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    };

    const handlerSubmit = () => {
        dispatch({ type: "signup", payload: user });
    };

    return (
        <div>
            <div>
                <input type="text" onChange={handlerInput} name="name" />
                <input type="text" onChange={handlerInput} name="lastname" />
                <input type="number" onChange={handlerInput} name="age" />
                <input type="text" onChange={handlerInput} name="email" />
                <input type="password" onChange={handlerInput} name="password" />
                <button onClick={handlerSubmit} >Send</button>
            </div>
        </div>
    );
};

export default Signup;