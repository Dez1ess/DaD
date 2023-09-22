import "./ClassLink.scss";
import { Link } from "react-router-dom";
import warlockLink from "../../pages/Classes/PopupLinksImg/warlock-link.svg";

export default function WarlockLink() {
  return (
    <Link to="" className="popup-class-link">
      <img src={warlockLink} alt="warlockLink" />
      <span>Варвар</span>
    </Link>
  );
}
