import TopNavBar from "../../../components/Navigation/TopNavBar";
import { Link, useLocation } from "react-router-dom";
import SelectBox from "../../../components/ClassComponents/ClassSelectBox";

import BardDefaultDescription from "./BardDefault/BardDefaultDescription";
import BardValorDescription from "./BardValor/BardValorDescription";
import BardKnowledgeDescription from "./BardKnowledge/BardKnowledgeDescription";
import BardSwordsDescription from "./BardSwords/BardSwordsDescription";
import BardCharmDescription from "./BardCharm/BardCharmDescription";
import BardWhispersDescription from "./BardWhispers/BardWhispersDescription";
import BardCreationDescription from "./BardCreation/BardCreationDescription";
import BardOratoryDescription from "./BardOratory/BardOratoryDescription";


export default function BardDescription() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedOption = parseInt(searchParams.get("option") || "1");

  const linkFolders = (
    <>
      <Link to="/" style={{ color: "#000", opacity: "0.4" }}>
        Осно...
      </Link>
      <span className="vertical-split">|</span>
      <Link to="/Classes" style={{ color: "#000", opacity: "0.4" }}>
        Класи
      </Link>
      <span className="vertical-split">|</span>
      <Link to="" style={{ color: "#000", pointerEvents: 'none' }}>
        Бард
      </Link>
    </>
  );

  return (
    <>
    <div className="fixed-top-small-white-bg"></div>
      <TopNavBar folder={linkFolders} />
        <SelectBox
          first={BardDefaultDescription}
          second={BardValorDescription}
          third={BardKnowledgeDescription}
          fourth={BardSwordsDescription}
          fifth={BardCharmDescription}
          sixth={BardWhispersDescription}
          seventh={BardCreationDescription}
          eighth={BardOratoryDescription}
          character="Бардів"
          initialSelectedOption={selectedOption}
        />
    </>
  );
}
