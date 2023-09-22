import TopNavBar from "../../../components/Navigation/TopNavBar";
import { Link, useLocation } from "react-router-dom";
import SelectBox from "../../../components/ClassComponents/ClassSelectBox";

import BardDefaultAbilities from "./BardDefault/BardDefaultAbilities";
import BardValorAbilities from "./BardValor/BardValorAbilities";
import BardKnowledgeAbilities from "./BardKnowledge/BardKnowledgeAbilities";
import BardSwordsAbilities from "./BardSwords/BardSwordsAbilities";
import BardCharmAbilities from "./BardCharm/BardCharmAbilities";
import BardWhispersAbilities from "./BardWhispers/BardWhispersAbilities";
import BardCreationAbilities from "./BardCreation/BardCreationAbilities";
import BardOratoryAbilities from "./BardOratory/BardOratoryAbilities";

export default function BardAbilities() {
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
        first={BardDefaultAbilities}
        second={BardValorAbilities}
        third={BardKnowledgeAbilities}
        fourth={BardSwordsAbilities}
        fifth={BardCharmAbilities}
        sixth={BardWhispersAbilities}
        seventh={BardCreationAbilities}
        eighth={BardOratoryAbilities}
        character="Бардів"
        initialSelectedOption={selectedOption} 
      />
    </>
  );
}
