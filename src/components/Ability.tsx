import "./Ability.scss";
import React, { useState } from "react";
import AbilitityReveal from "./AbilityReveal";

interface Ability {
  bg: string;
  img?: string;
  heading: string;
  lvl: string;
  abName: string;
  children: React.ReactNode;
  renderAb: boolean;
  handleRenderAb: () => void;
}

export default function Ability({
  bg,
  img,
  heading,
  lvl,
  abName,
  children,
  renderAb,
  handleRenderAb
}: Ability) {
  const [revealAbility, setRevealAbility] = useState(false);

  const toggleReveal = () => {
    setRevealAbility(() => !revealAbility);
    handleRenderAb();
    window.scrollTo(0, 0);
  };

  return revealAbility ? (
    <>
      <AbilitityReveal abName={abName} trigger={revealAbility} setTrigger={toggleReveal}>
        {children}
      </AbilitityReveal>
    </>
  ) : (
    <div
      onClick={toggleReveal}
      style={{ background: `${bg}`, display: `${renderAb ? 'block' : 'none'}` }}
      className="ability-card"
    >
      <p>{heading}</p>
      <p>{lvl}</p>
      <p className="ab-name">{abName}</p>
      <img src={img} />
    </div>
  );
}
