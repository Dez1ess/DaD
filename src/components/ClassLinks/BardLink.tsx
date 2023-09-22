import "./ClassLink.scss";
import { Link } from "react-router-dom";
import bardLink from '../../pages/Classes/PopupLinksImg/bard-link.svg'

export default function BardLink() {
  return (
    <Link to="" className="popup-class-link">
      <img src={bardLink} alt="bardLink" />
      <span>Бард</span>
    </Link>
  );
}
