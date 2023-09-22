import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

interface NavigationProps {
  handleCloseMenu: () => void;
}

export default function Navigation({ handleCloseMenu }: NavigationProps) {
  const [closedMenu, setClosedMenu] = useState(false);
  const [isBigPopup, setIsBigPopup] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidthValue = () => {
      const widthValue = popupRef.current?.getBoundingClientRect().width;

      if (widthValue) {
        setIsBigPopup(widthValue >= 500);
      }
    };

    updateWidthValue();

    window.addEventListener("resize", updateWidthValue);

    return () => {
      window.removeEventListener("resize", updateWidthValue);
    };
  }, []);

  const handleToggleMenu = () => {
    setClosedMenu((prevClosedMenu) => !prevClosedMenu);
    setTimeout(() => {
      handleCloseMenu();
    }, 400);
  };

  return (
    <>
      <div className="navigation-wrapper" onClick={handleToggleMenu}></div>

      <div
        style={{
          marginLeft: closedMenu ? (isBigPopup ? "-500" : "-245") + "px" : "0"
        }}
        className={"popup-menu"}
        ref={popupRef}
      >
        <div className="navigation">
          <div onClick={handleToggleMenu} className="close-btn">
            <img src="close.svg" alt="close" />
          </div>
          <div className="chapter">
            <div className="chapter-header">
              <img src="character.svg" alt="character" />
              <p>Персонаж</p>
            </div>
            <p className="chapter-link">
              <Link to="/Classes" style={{ color: "#2f2d2dcc" }}>
                Класи
              </Link>
            </p>
            <p className="chapter-link">
              <Link to="/Races" style={{ color: "#2f2d2dcc" }}>
                Раси
              </Link>
            </p>
            <p className="chapter-link">
              <Link to="/Traits" style={{ color: "#2f2d2dcc" }}>
                Риси персонажа
              </Link>
            </p>
          </div>
          <div className="chapter">
            <div className="chapter-header">
              <img src="workshop.svg" alt="workshop" />
              <p>Мастерська</p>
            </div>
            <p className="chapter-link">
              <Link to="/Bestiary" style={{ color: "#2f2d2dcc" }}>
                Бестіарій
              </Link>
            </p>
          </div>
          <div className="chapter">
            <div className="chapter-header">
              <img src="other.svg" alt="other" />
              <p>Інше</p>
            </div>
            <p>Політика конфідеційності</p>
            <p>Умови надання послуг</p>
            <p>Поділитись програмою</p>
          </div>
        </div>
      </div>
    </>
  );
}
