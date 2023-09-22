import TopNavBar from "../../../components/Navigation/TopNavBar";
import { Link, useLocation } from "react-router-dom";
import SelectBox from "../../../components/ClassComponents/ClassSelectBox";

import WarlockDefaultAbilities from "./WarlockDefault/WarlockDefaultAbilities";
import WarlockValorAbilities from "./WarlockValor/WarlockValorAbilities";
import WarlockKnowledgeAbilities from "./WarlockKnowledge/WarlockKnowledgeAbilities";
import WarlockSwordsAbilities from "./WarlockSwords/WarlockSwordsAbilities";
import WarlockCharmAbilities from "./WarlockCharm/WarlockCharmAbilities";
import WarlockWhispersAbilities from "./WarlockWhispers/WarlockWhispersAbilities";
import WarlockCreationAbilities from "./WarlockCreation/WarlockCreationAbilities";
import WarlockOratoryAbilities from "./WarlockOratory/WarlockOratoryAbilities";

export default function WarlockAbilities() {
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
      <Link to="" style={{ color: "#000", pointerEvents: "none" }}>
        Варвар
      </Link>
    </>
  );

  return (
    <>
      <div className="fixed-top-small-white-bg"></div>
      <TopNavBar folder={linkFolders} />
      <SelectBox
        first={WarlockDefaultAbilities}
        second={WarlockValorAbilities}
        third={WarlockKnowledgeAbilities}
        fourth={WarlockSwordsAbilities}
        fifth={WarlockCharmAbilities}
        sixth={WarlockWhispersAbilities}
        seventh={WarlockCreationAbilities}
        eighth={WarlockOratoryAbilities}
        character="Варварів"
        initialSelectedOption={selectedOption}
      />
    </>
  );
}
