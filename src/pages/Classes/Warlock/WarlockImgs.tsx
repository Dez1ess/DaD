import TopNavBar from "../../../components/Navigation/TopNavBar";
import { Link, useLocation } from "react-router-dom";
import SelectBox from "../../../components/ClassComponents/ClassSelectBox";

import WarlockDefaultImg from "./WarlockDefault/WarlockDefaultImg";
import WarlockValorImg from "./WarlockValor/WarlockValorImg";
import WarlockKnowledgeImg from "./WarlockKnowledge/WarlockKnowledgeImg";
import WarlockSwordsImg from "./WarlockSwords/WarlockSwordsImg";
import WarlockCharmImg from "./WarlockCharm/WarlockCharmImg";
import WarlockWhispersImg from "./WarlockWhispers/WarlockWhispersImg";
import WarlockCreationImg from "./WarlockCreation/WarlockCreationImg";
import WarlockOratoryImg from "./WarlockOratory/WarlockOratoryImg";


export default function WarlockImgs() {
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
          first={WarlockDefaultImg}
          second={WarlockValorImg}
          third={WarlockKnowledgeImg}
          fourth={WarlockSwordsImg}
          fifth={WarlockCharmImg}
          sixth={WarlockWhispersImg}
          seventh={WarlockCreationImg}
          eighth={WarlockOratoryImg}
          character="Варварів"
          initialSelectedOption={selectedOption}
        />
    </>
  );
}
