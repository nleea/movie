import { useReducer } from "react";
import { reducer, Context, initialStateApp } from "../provider/context";
import { Layout } from "../component/Layout/Layout";
import { Footer } from "../component/footer/Footer";
import "./main.css";

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialStateApp);

  return (
    <Context.Provider value={{ state, dispatch }} >
      <div className="content-separate">
        <Layout />
        <div className="footer" >
          <Footer />
        </div>
      </div>
    </Context.Provider>
  );
};
