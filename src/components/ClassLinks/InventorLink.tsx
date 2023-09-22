import "./ClassLink.scss";
import { Link } from "react-router-dom";
import inventorLink from "../../pages/Classes/PopupLinksImg/inventor-link.svg";

export default function InventorLink() {
  return (
    <Link to="" className="popup-class-link">
      <img src={inventorLink} alt="inventorLink" />
      <span>Винахідник</span>
    </Link>
  );
}
