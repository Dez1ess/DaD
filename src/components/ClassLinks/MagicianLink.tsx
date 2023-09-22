import "./ClassLink.scss";
import { Link } from "react-router-dom";
import magicianLink from "../../pages/Classes/PopupLinksImg/magician-link.svg";

export default function MagicianLink() {
  return (
    <Link to="" className="popup-class-link">
      <img src={magicianLink} alt="magicianLink" />
      <span>Чарівник</span>
    </Link>
  );
}
