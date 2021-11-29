import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DashBoard } from "../component/dashboard/DashBoard";
import { Footer } from "../component/footer/Footer";
import { Routers } from "../component/route/Route";
import "./main.css";

export const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname === "/") {
      history.push("/movies");
    }
  }, [history]);

  return (
    <div className="content-separate">
      <div className="dashboard">
        <DashBoard />
      </div>
      <div className="main-content">
        <Routers />
      </div>
      <div className="footer" >
        <Footer />
      </div>
    </div>
  );
};
