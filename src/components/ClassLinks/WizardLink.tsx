import "./ClassLink.scss";
import { Link } from "react-router-dom";
import wizardLink from "../../pages/Classes/PopupLinksImg/wizard-link.svg";

export default function WizardLink() {
  return (
    <Link to="" className="popup-class-link">
      <img src={wizardLink} alt="wizardLink" />
      <span>Чародій</span>
    </Link>
  );
}
