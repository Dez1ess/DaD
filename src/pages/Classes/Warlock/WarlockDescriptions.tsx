import TopNavBar from "../../../components/Navigation/TopNavBar";
import { Link, useLocation } from "react-router-dom";
import SelectBox from "../../../components/ClassComponents/ClassSelectBox";

import WarlockDefaultDescription from "./WarlockDefault/WarlockDefaultDescription";
import WarlockValorDescription from "./WarlockValor/WarlockValorDescription";
import WarlockKnowledgeDescription from "./WarlockKnowledge/WarlockKnowledgeDescription";
import WarlockSwordsDescription from "./WarlockSwords/WarlockSwordsDescription";
import WarlockCharmDescription from "./WarlockCharm/WarlockCharmDescription";
import WarlockWhispersDescription from "./WarlockWhispers/WarlockWhispersDescription";
import WarlockCreationDescription from "./WarlockCreation/WarlockCreationDescription";
import WarlockOratoryDescription from "./WarlockOratory/WarlockOratoryDescription";


export default function WarlockDescription() {
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
          first={WarlockDefaultDescription}
          second={WarlockValorDescription}
          third={WarlockKnowledgeDescription}
          fourth={WarlockSwordsDescription}
          fifth={WarlockCharmDescription}
          sixth={WarlockWhispersDescription}
          seventh={WarlockCreationDescription}
          eighth={WarlockOratoryDescription}
          character="Варварів"
          initialSelectedOption={selectedOption}
        />
    </>
  );
}
