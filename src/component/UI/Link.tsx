import { Link } from "react-router-dom";

export const _Link = (props: any) => {
  return <Link to={props.url} className={props.class} style={{ textDecoration: "none" }}>{props.children}</Link>;
};
