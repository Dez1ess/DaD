import TopNavBar from "../../../components/Navigation/TopNavBar";
import { Link, useLocation } from "react-router-dom";
import SelectBox from "../../../components/ClassComponents/ClassSelectBox";

import BardDefaultSpells from "./BardDefault/BardDefaultSpells";
import BardValorSpells from "./BardValor/BardValorSpells";
import BardKnowledgeSpells from "./BardKnowledge/BardKnowledgeSpells";
import BardSwordsSpells from "./BardSwords/BardSwordsSpells";
import BardCharmSpells from "./BardCharm/BardCharmSpells";
import BardWhispersSpells from "./BardWhispers/BardWhispersSpells";
import BardCreationSpells from "./BardCreation/BardCreationSpells";
import BardOratorySpells from "./BardOratory/BardOratorySpells";



export default function BardSpells() {
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
        first={BardDefaultSpells}
        second={BardValorSpells}
        third={BardKnowledgeSpells}
        fourth={BardSwordsSpells}
        fifth={BardCharmSpells}
        sixth={BardWhispersSpells}
        seventh={BardCreationSpells}
        eighth={BardOratorySpells}
        character="Бардів"
        initialSelectedOption={selectedOption}
      />
    </>
  );
}
