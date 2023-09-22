import { useState } from "react";

import ClassesBottomNavBar from "../../../../components/Navigation/ClassesBottomNavBar";
import Ability from "../../../../components/Ability";

import hits from "./hits.png";
import assets from "./assets.png";
import equipment from "./equipment.png";
import inspiration from "./inspiration.png";
import spells from "./spells.png";
import master from "./master.png";
import song from "./song.png";
import competence from "./competence.png";
import buff from "./buff.png";

import BardValorAssets from "./abilities/BardValorAssets";
import BardValorBuff from "./abilities/BardValorBuff";
import BardValorInspiration from "./abilities/BardValorInspiration";
import BardValorSong from "./abilities/BardValorSong";

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

export default function BardValorAbilities({ render }: { render: boolean }) {
  const [renderAb, setRenderAb] = useState(true);

  const handleRenderAb = () => {
    setRenderAb(() => !renderAb);
  };

  return render ? (
    <>
      <ClassesBottomNavBar
        path1="/BardAbilities?option=2"
        path2="/BardDescriptions?option=2"
        path3="/BardSpells?option=2"
        path4="/BardImgs?option=2"
      />
      <div
        className="classes-wrapper flex"
        style={{ marginBottom: "65px"}}
      >
        <Ability
          children={<><BardValorAssets /></>}
          bg={abBg.assets}
          img={abImg.assets}
          heading="Уміння барда"
          lvl="1-й рівень"
          abName="Володіння (valor)"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={<><BardValorInspiration /></>}
          bg={abBg.inspiration}
          img={abImg.inspiration}
          heading="Уміння барда"
          lvl="1-й рівень"
          abName="Натхнення Барда (к6)"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={<><BardValorSong /></>}
          bg={abBg.song}
          img={abImg.song}
          heading="Уміння барда"
          lvl="2-й рівень"
          abName="Пісня відпочинку"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={<><BardValorBuff /></>}
          bg={abBg.buff}
          img={abImg.buff}
          heading="Уміння барда"
          lvl="4-й рівень"
          abName="Збільшення характеристик"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
      </div>
    </>
  ) : null;
}
