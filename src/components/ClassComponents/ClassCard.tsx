import { Link } from "react-router-dom";
import "./ClassCard.scss";
import { useState } from "react";

interface CardClassProps {
  path: string;
  name: string;
  hits: string;
  ability1: string;
  ability2: string;
  bgImage: string;
  classImage: string;
  heroImage: string;
  link_path2: string;
  link_path3: string;
  link_path4: string;
  link_path5: string;
  link_path6: string;
  link_path7: string;
  link_path8: string;
}

export default function CardClass({
  path,
  name,
  hits,
  ability1,
  ability2,
  bgImage,
  classImage,
  heroImage,
  link_path2,
  link_path3,
  link_path4,
  link_path5,
  link_path6,
  link_path7,
  link_path8,
}: CardClassProps) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(() => !isActive);
  }

  return (
    <div className="card-class" style={{ background: `${bgImage}` }}>
      <Link
        to={path}
        className="blurred-container"
        style={{ filter: isActive ? "blur(2px)" : "blur(0px)" }}
      >
        <div className="class-card-descr">
          <p className="hits-count">
            <span>Кість хітів:</span>
            <br />
            {hits}
          </p>
          <p className="abilities">
            <span>Спасброски</span>
            <br />
            {ability1},<br />
            {ability2}
          </p>
        </div>
        <img className="class-img" src={classImage} alt="class-picture" />
        <img className="hero-img" src={heroImage} alt="hero-img" />
        <p className="card-heading">{name}</p>
      </Link>
      <div className="collegium-btn" onClick={handleClick}>
        <img src="plus-icon.svg" alt="plus" />
      </div>

      <div
        className="collegium-popup"
        style={{
          opacity: isActive ? "1" : "0",
          visibility: isActive ? "visible" : "hidden",
        }}
      >
        <p>Базова Колегія:</p>
        <ul>
          <li>
            <Link to={link_path2}>Доблесті</Link>
          </li>
          <li>
            <Link to={link_path3}>Знань</Link>
          </li>
          <li>
            <Link to={link_path4}>Мечів</Link>
          </li>
          <li>
            <Link to={link_path5}>Чарівності</Link>
          </li>
          <li>
            <Link to={link_path6}>Шепотів</Link>
          </li>
          <li>
            <Link to={link_path7}>Творення</Link>
          </li>
          <li>
            <Link to={link_path8}>Красномовства</Link>
          </li>
        </ul>
        <div className="collegium-close-btn" onClick={handleClick}>
          <img src="plus-icon.svg" alt="cross" />
        </div>
      </div>
    </div>
  );
}
