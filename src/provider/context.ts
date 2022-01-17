import { createContext, Dispatch } from "react";
import { Signup, user as currentUser } from "../custom-hooks/Auth/auth";

interface IinitialStateApp {
  user: {
    email: string;
    token: string;
    infoUser?: any;
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
    infoUser: "",
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
      let user = currentUser(action.payload.email);
      console.log(user);
      return {
        user: {
          email: action.payload.email,
          token: action.payload.token,
          infoUser: user,
        },
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
