import { useState } from "react";

import ClassesBottomNavBar from "../../../../components/Navigation/ClassesBottomNavBar";
import Ability from "../../../../components/Ability";

import hits from "./hits.svg";
import assets from "./assets.svg";
import equipment from "./equipment.svg";
import inspiration from "./inspiration.svg";
import spells from "./spells.svg";
import master from "./master.svg";
import song from "./song.svg";
import competence from "./competence.svg";
import buff from "./buff.svg";

import WarlockCreationSpellsUse from "./abilities/WarlockCreationSpellsUse";
import WarlockCreationInspiration from "./abilities/WarlockCreationInspiration";

const abImg = {
  hits,
  assets,
  equipment,
  inspiration,
  spells,
  master,
  song,
  competence,
  buff,
};

const abBg = {
  hits: "radial-gradient(100% 238.84% at 100% 0%, #AEFF88 0%, #E7FFDB 100%)",
  assets: "radial-gradient(100% 238.84% at 100% 0%, #FFC47E 0%, #FFEEDA 100%)",
  equipment:
    "radial-gradient(100% 238.84% at 100% 0%, #88A9FF 0%, #AEC5FF 0.01%, #E8EEFF 100%)",
  inspiration:
    "radial-gradient(100% 238.84% at 100% 0%, #EE88FF 0%, #FCEDFF 100%)",
  spells: "radial-gradient(100% 238.84% at 100% 0%, #FF8888 0%, #FFF4F4 100%)",
  master: "radial-gradient(100% 238.84% at 100% 0%, #7EFFB2 0%, #E8FFF4 100%)",
  song: "radial-gradient(100% 238.84% at 100% 0%, #79FFF7 0%, #E8FFFE 100%)",
  magicInspiration:
    "radial-gradient(100% 238.84% at 100% 0%, #FCFF78 0%, #FFFDEB 100%)",
  competence:
    "radial-gradient(100% 238.84% at 100% 0%, #B491FF 0%, #F7F5FF 100%)",
  buff: "radial-gradient(100% 238.84% at 100% 0%, #7987FF 0%, #FFFFFF 100%)",
};

export default function WarlockCreationAbilities({
  render,
}: {
  render: boolean;
}) {
  const [renderAb, setRenderAb] = useState(true);

  const handleRenderAb = () => {
    setRenderAb(() => !renderAb);
  };

  return render ? (
    <>
      <ClassesBottomNavBar
        path1="/WarlockAbilities?option=7"
        path2="/WarlockDescriptions?option=7"
        path3="/WarlockSpells?option=7"
        path4="/WarlockImgs?option=7"
      />
      <div
        className="classes-wrapper flex"
        style={{ marginBottom: "65px"}}
      >
        <Ability
          children={
            <>
              <WarlockCreationSpellsUse />
            </>
          }
          bg={abBg.spells}
          img={abImg.spells}
          heading="Уміння варвара"
          lvl="1-й рівень"
          abName="Використання заклинань (creation)"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockCreationInspiration />
            </>
          }
          bg={abBg.inspiration}
          img={abImg.inspiration}
          heading="Уміння варвара"
          lvl="1-й рівень"
          abName="Натхнення варвара (к6)"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
      </div>
    </>
  ) : null;
}
