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

import WarlockDefaultAssets from "./abilities/WarlockDefaultAssets";
import WarlockDefaultHits from "./abilities/WarlockDefaultHits";
import WarlockDefaultBuff from "./abilities/WarlockDefaultBuff";
import WarlockDefaultCompetence from "./abilities/WarlockDefaultCompetence";
import WarlockDefaultSong from "./abilities/WarlockDefaultSong";
import WarlockDefaultEquipment from "./abilities/WarlockDefaultEquipment";
import WarlockDefaultInspiration from "./abilities/WarlockDefaultInspiration";
import WarlockDefaultMagicInspiration from "./abilities/WarlockDefaultMagicInspiration";
import WarlockDefaultMaster from "./abilities/WarlockDefaultMaster";
import WarlockDefaultSpellsUse from "./abilities/WarlockDefaultSpellsUse";

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

export default function WarlockDefaultAbilities({
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
        path1="/WarlockAbilities?option=1"
        path2="/WarlockDescriptions?option=1"
        path3="/WarlockSpells?option=1"
        path4="/WarlockImgs?option=1"
      />
      <div
        className="classes-wrapper flex"
        style={{ marginBottom: "65px"}}
      >
        <Ability
          children={
            <>
              <WarlockDefaultHits />
            </>
          }
          bg={abBg.hits}
          img={abImg.hits}
          heading="Уміння варвара"
          lvl="1-й рівень"
          abName="Хіти"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockDefaultAssets />
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
              <WarlockDefaultEquipment />
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
              <WarlockDefaultInspiration />
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
        <Ability
          children={
            <>
              <WarlockDefaultSpellsUse />
            </>
          }
          bg={abBg.spells}
          img={abImg.spells}
          heading="Уміння варвара"
          lvl="1-й рівень"
          abName="Використання заклинань"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockDefaultMaster />
            </>
          }
          bg={abBg.master}
          img={abImg.master}
          heading="Уміння варвара"
          lvl="2-й рівень"
          abName="Майстер на Всі Руки"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockDefaultSong />
            </>
          }
          bg={abBg.song}
          img={abImg.song}
          heading="Уміння варвара"
          lvl="2-й рівень"
          abName="Пісня відпочинку"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockDefaultMagicInspiration />
            </>
          }
          bg={abBg.magicInspiration}
          heading="Уміння варвара"
          lvl="2-й рівень"
          abName="Чарівне Натхнення (опціонально)"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockDefaultCompetence />
            </>
          }
          bg={abBg.competence}
          img={abImg.competence}
          heading="Уміння варвара"
          lvl="3-й рівень"
          abName="Компетентність"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
        <Ability
          children={
            <>
              <WarlockDefaultBuff />
            </>
          }
          bg={abBg.buff}
          img={abImg.buff}
          heading="Уміння варвара"
          lvl="4-й рівень"
          abName="Збільшення характеристик"
          renderAb={renderAb}
          handleRenderAb={handleRenderAb}
        />
      </div>
    </>
  ) : null;
}
