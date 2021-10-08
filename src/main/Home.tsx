import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DashBoard } from "../component/dashboard/DashBoard";
import { Movies } from "../component/movies/Movies";
import "./home.scss";

export const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname === "/") {
      history.push("/movies");
    }
  });

  return (
    <div className="content-separate">
      <div className="dashboard">
        <DashBoard />
      </div>
      <div className="main-content">
        <Movies />
      </div>
    </div>
  );
};
