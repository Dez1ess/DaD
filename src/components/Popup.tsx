import React from "react";
import "./Popup.scss";
import spellTime from "../assets/PopupImg/spell-time.svg";
import spellDuration from "../assets/PopupImg/spell-duration.svg";
import spellDistance from "../assets/PopupImg/spell-distance.svg";
import spellComponents from "../assets/PopupImg/spell-components.svg";

interface Popup {
  trigger: boolean;
  setTrigger: (stan: boolean) => void;
  children: React.ReactNode;
  popName: string;
  popLvl: string;
  popType: string;
  popTime: string;
  popDistance: string;
  popDuration: string;
  popComps: React.ReactNode;
}

export default function Popup({
  trigger,
  setTrigger,
  children,
  popName,
  popLvl,
  popType,
  popTime,
  popDistance,
  popDuration,
  popComps,
}: Popup) {
  return trigger ? (
    <div className="popup-container">
      <div className="popup-inner">
        <div className="popup-info">
          <div onClick={() => setTrigger(!trigger)} className="close-popup">
            <img src="close-spell.svg" alt="close" />
          </div>
          <p className="popup-name">{popName}</p>
          <div className="popup-spell-anchors">
            <div className="popup-spell-anchor">{popLvl}</div>
            <div className="popup-spell-anchor">{popType}</div>
          </div>
        </div>
        <div className="popup-features">
          <p className="popup-features-heading">Основні характеристики</p>
          <div className="popup-features-table">
            <div className="popup-feature">
              <div className="popup-feature-name">
                <img src={spellTime} alt="time" />
                <p>Час накладання:</p>
              </div>
              <div className="popup-feature-value">{popTime}</div>
            </div>
            <div className="popup-feature">
              <div className="popup-feature-name">
                <img src={spellDistance} alt="distance" />
                <p>Дистанція:</p>
              </div>
              <div className="popup-feature-value">{popDistance}</div>
            </div>
            <div className="popup-feature">
              <div className="popup-feature-name">
                <img src={spellDuration} alt="duration" />
                <p>Тривалість:</p>
              </div>
              <div className="popup-feature-value">{popDuration}</div>
            </div>
            <div className="popup-feature">
              <div className="popup-feature-name">
                <img src={spellComponents} alt="components" />
                <p>Компоненти:</p>
              </div>
              <div className="popup-feature-value">{popComps}</div>
            </div>
          </div>
        </div>
        <div className="popup-description">{children}</div>
      </div>
    </div>
  ) : null;
}
