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

import WarlockSwordsAssets from "./abilities/WarlockSwordsAssets";
import WarlockSwordsHits from "./abilities/WarlockSwordsHits";
import WarlockSwordsEquipment from "./abilities/WarlockSwordsEquipment";
import WarlockSwordsInspiration from "./abilities/WarlockSwordsInspiration";

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

export default function WarlockSwordsAbilities({
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
        path1="/WarlockAbilities?option=4"
        path2="/WarlockDescriptions?option=4"
        path3="/WarlockSpells?option=4"
        path4="/WarlockImgs?option=4"
      />
      <div
        className="classes-wrapper flex"
        style={{ marginBottom: "65px"}}
      >
        <Ability
          children={
            <>
              <WarlockSwordsHits />
            </>
          }
          bg={abBg.hits}
          img={abImg.hits}
          heading="Уміння варвара"
          lvl="1-й рівень"
          abName="Хіти (swords)"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockSwordsAssets />
            </>
          }
          bg={abBg.assets}
          img={abImg.assets}
          heading="Уміння варвара"
          lvl="1-й рівень"
          abName="Володіння"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockSwordsEquipment />
            </>
          }
          bg={abBg.equipment}
          img={abImg.equipment}
          heading="Уміння варвара"
          lvl="1-й рівень"
          abName="Спорядження"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockSwordsInspiration />
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
