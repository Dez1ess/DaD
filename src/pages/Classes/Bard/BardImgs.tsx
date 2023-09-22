import TopNavBar from "../../../components/Navigation/TopNavBar";
import { Link, useLocation } from "react-router-dom";
import SelectBox from "../../../components/ClassComponents/ClassSelectBox";

import BardDefaultImg from "./BardDefault/BardDefaultImg";
import BardValorImg from "./BardValor/BardValorImg";
import BardKnowledgeImg from "./BardKnowledge/BardKnowledgeImg";
import BardSwordsImg from "./BardSwords/BardSwordsImg";
import BardCharmImg from "./BardCharm/BardCharmImg";
import BardWhispersImg from "./BardWhispers/BardWhispersImg";
import BardCreationImg from "./BardCreation/BardCreationImg";
import BardOratoryImg from "./BardOratory/BardOratoryImg";


export default function BardImgs() {
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
          first={BardDefaultImg}
          second={BardValorImg}
          third={BardKnowledgeImg}
          fourth={BardSwordsImg}
          fifth={BardCharmImg}
          sixth={BardWhispersImg}
          seventh={BardCreationImg}
          eighth={BardOratoryImg}
          character="Бардів"
          initialSelectedOption={selectedOption}
        />
    </>
  );
}
