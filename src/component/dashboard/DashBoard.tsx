import { useContext } from "react";
import { _Link as Link } from "../UI/Link";
import { Context } from "../../provider/context";
import "./dashboard.css";

export const DashBoard = () => {
  const { dispatch } = useContext(Context);

  const Logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-container_links">
        <div className="dashboard-container_links-header">
          <h1>Dashboard</h1>
        </div>
        <Link url="/movies" class="dashboard-container_links-link">
          <i className="bi bi-film util-space"></i> Movies
        </Link>
        <Link url="/series" class="dashboard-container_links-link">
          <i className="bi bi-tv util-space"></i> Series
        </Link>
        <Link url="/trending" class="dashboard-container_links-link">
          <i className="bi bi-graph-up util-space"></i> Trending
        </Link>
        <Link url="/genrer" class="dashboard-container_links-link">
          <i className="bi bi-book util-space"></i> Genrer
        </Link>
        <Link url="/popular" class="dashboard-container_links-link">
          <i className="bi bi-person util-space"></i> Person Popular
        </Link>
        <Link url="/providers" class="dashboard-container_links-link">
          <i className="bi bi-truck util-space"></i> Providers
        </Link>
        <Link url="/certifications" class="dashboard-container_links-link">
          <i className="bi bi-patch-check util-space"></i> Certifications
        </Link>
        <Link url="/change" class="dashboard-container_links-link">
          <i className="bi bi-key util-space"></i> Change
        </Link>
      </div>
      <div className="dashboard-container_config">
        <div className="dashboard-container_config-link" >
          <i className="bi bi-wrench util-space"></i>  Config
        </div>
        <div className="dashboard-container_config-link" onClick={Logout}>
          <i className="bi bi-box-arrow-right util-space"></i>  Logout
        </div>
      </div>
    </div>
  );
};
