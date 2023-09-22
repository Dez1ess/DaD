import "./OriginLink.scss";
import { Link } from "react-router-dom";

type OriginLink = {
  path: string,
  title: string,
}

export default function OriginLink({path, title}: OriginLink) {
  return (
    <Link to={path} className="popup-origin-link">
      <span>{title}</span>
    </Link>
  );
}
