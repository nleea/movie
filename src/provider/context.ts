import { createContext, Dispatch } from "react";
import { Signup } from "../custom-hooks/Auth/auth";

interface IinitialStateApp {
  user: {
    email: string;
    token: string;
  };
  Isauth: boolean;
}

interface Iaction {
  type: string;
  payload?: any;
}

export const initialStateApp: IinitialStateApp = {
  user: {
    token: "",
    email: "",
  },
  Isauth: false,
};

enum types {
  LOGIN = "login",
  LOGOUT = "logout",
  SIGNUP = "signup",
}

export function reducer(state: IinitialStateApp, action: Iaction) {
  switch (action.type) {
    case types.LOGIN:
      sessionStorage.setItem(
        "auth",
        JSON.stringify({
          token: action.payload.token,
          email: action.payload.email,
        })
      );
      return {
        user: { email: action.payload.email, token: action.payload.token },
        Isauth: true,
      };
    case types.LOGOUT:
      sessionStorage.clear();
      return {
        user: { token: "", email: "" },
        Isauth: false,
      };
    case types.SIGNUP:
      Signup(
        action.payload.name,
        action.payload.email,
        action.payload.password,
        action.payload.age,
        action.payload.lastname
      );
      return { ...state };
    default:
      return { ...state };
  }
}

export const Context = createContext<{
  state: IinitialStateApp;
  dispatch: Dispatch<Iaction>;
}>({
  state: initialStateApp,
  dispatch: () => undefined,
});
