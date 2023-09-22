import { ReactNode, useState } from "react";
import "./TopNavBar.scss";
import Navigation from "./Navigation";

interface TopNav {
  folder: ReactNode;
}

export default function TopNavBar({ folder }: TopNav) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(() => !openMenu);
  };

  return (
    <div className="top-nav-bar">
      <img
        onClick={handleToggleMenu}
        src="burger.svg"
        alt="burger"
        className="top-nav-img burger-menu"
      />
      <p className="folder">{folder}</p>
      <div className="search-x-filter">
        <img src="search.svg" alt="search" className="top-nav-img search" />
      </div>
      {openMenu && <Navigation handleCloseMenu={handleToggleMenu} />}
    </div>
  );
}
