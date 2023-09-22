import { ReactNode, useState } from "react";
import "./SpellCard.scss";
import Popup from "./Popup";

interface SpellCard {
  lvl: string;
  spellType: string;
  spellName: string;
  concentration?: ReactNode;
  components: ReactNode;
  trigger: boolean;
  children: ReactNode;
  popName: string;
  popLvl: string;
  popType: string;
  popTime: string;
  popDistance: string;
  popDuration: string;
  popComps: React.ReactNode;
}

export default function SpellCard({
  lvl,
  spellType,
  spellName,
  concentration,
  components,
  trigger,
  children,
  popName,
  popLvl,
  popType,
  popTime,
  popDistance,
  popDuration,
  popComps,
}: SpellCard) {
  const [popup, showPopup] = useState(false);

  const togglePopup = () => {
    showPopup(() => !trigger);
  };

  return (
    <>
      <Popup
        trigger={popup}
        setTrigger={showPopup}
        popName={popName}
        popLvl={popLvl}
        popType={popType}
        popTime={popTime}
        popDistance={popDistance}
        popDuration={popDuration}
        popComps={popComps}
      >
        {children}
      </Popup>
      <div onClick={togglePopup} className="spell-card">
        <div className="lvl">
          <p>{lvl}</p>
        </div>
        <div className="spell-card-info">
          <div className="spell-card-name">
            <div className="add-container">
              <p>{spellType}</p>
              <div className="show-concentration">{concentration}</div>
            </div>
            <p>{spellName}</p>
          </div>
          <div className="spell-card-components">
            <p>Компоненти</p>
            <div className="card-components">{components}</div>
          </div>
        </div>
      </div>
    </>
  );
}
