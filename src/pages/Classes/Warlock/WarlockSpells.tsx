import TopNavBar from "../../../components/Navigation/TopNavBar";
import { Link, useLocation } from "react-router-dom";
import SelectBox from "../../../components/ClassComponents/ClassSelectBox";

import WarlockDefaultSpells from "./WarlockDefault/WarlockDefaultSpells";
import WarlockValorSpells from "./WarlockValor/WarlockValorSpells";
import WarlockKnowledgeSpells from "./WarlockKnowledge/WarlockKnowledgeSpells";
import WarlockSwordsSpells from "./WarlockSwords/WarlockSwordsSpells";
import WarlockCharmSpells from "./WarlockCharm/WarlockCharmSpells";
import WarlockWhispersSpells from "./WarlockWhispers/WarlockWhispersSpells";
import WarlockCreationSpells from "./WarlockCreation/WarlockCreationSpells";
import WarlockOratorySpells from "./WarlockOratory/WarlockOratorySpells";



export default function WarlockSpells() {
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
        Варвар
      </Link>
    </>
  );

  return (
    <>
    <div className="fixed-top-small-white-bg"></div>
      <TopNavBar folder={linkFolders} />
      <SelectBox
        first={WarlockDefaultSpells}
        second={WarlockValorSpells}
        third={WarlockKnowledgeSpells}
        fourth={WarlockSwordsSpells}
        fifth={WarlockCharmSpells}
        sixth={WarlockWhispersSpells}
        seventh={WarlockCreationSpells}
        eighth={WarlockOratorySpells}
        character="Варварів"
        initialSelectedOption={selectedOption}
      />
    </>
  );
}
