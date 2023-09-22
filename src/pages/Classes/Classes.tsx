import ClassCard from "../../components/ClassComponents/ClassCard.tsx";
import {
  classColors as colors,
  classImages as img,
  classVectors as vector,
} from "../../assets/ClassImages/classCardImages.tsx";
import { Link } from "react-router-dom";
import TopNavBar from "../../components/Navigation/TopNavBar.tsx";

export default function Classes() {
  const linkFolders = (
    <>
      <Link to="/" style={{ color: "#000", opacity: "0.4" }}>
        Основна
      </Link>
      <span className="vertical-split">|</span>
      <Link to="/Classes" style={{ color: "#000", pointerEvents: "none" }}>
        Класи
      </Link>
    </>
  );

  return (
    <>
      <TopNavBar folder={linkFolders} />
      <div className="wrapper flex">
        <ClassCard
          path="/BardAbilities?option=1"
          name="Бард"
          hits="к8"
          ability1="Спритність"
          ability2="Харизма"
          bgImage={colors.bard}
          classImage={vector.bardVector}
          heroImage={img.bard}
          link_path2="/BardAbilities?option=2"
          link_path3="/BardAbilities?option=3"
          link_path4="/BardAbilities?option=4"
          link_path5="/BardAbilities?option=5"
          link_path6="/BardAbilities?option=6"
          link_path7="/BardAbilities?option=7"
          link_path8="/BardAbilities?option=8"
        />
        <ClassCard
          path="/WarlockAbilities?option=1"
          name="Варвар"
          hits="к8"
          ability1="Сила"
          ability2="Статура"
          bgImage={colors.warlock}
          classImage={vector.warlockVector}
          heroImage={img.warlock}
          link_path2="/WarlockAbilities?option=2"
          link_path3="/WarlockAbilities?option=3"
          link_path4="/WarlockAbilities?option=4"
          link_path5="/WarlockAbilities?option=5"
          link_path6="/WarlockAbilities?option=6"
          link_path7="/WarlockAbilities?option=7"
          link_path8="/WarlockAbilities?option=8"
        />

        <ClassCard
          path=""
          name="Воїн"
          hits="к8"
          ability1="Сила"
          ability2="Статура"
          bgImage={colors.fighter}
          classImage={vector.fighterVector}
          heroImage={img.fighter}
          link_path2=""
          link_path3=""
          link_path4=""
          link_path5=""
          link_path6=""
          link_path7=""
          link_path8=""
        />
        <ClassCard
          path=""
          name="Чарівник"
          hits="к8"
          ability1="Інтелект"
          ability2="Мудрість"
          bgImage={colors.magician}
          classImage={vector.magicianVector}
          heroImage={img.magician}
          link_path2=""
          link_path3=""
          link_path4=""
          link_path5=""
          link_path6=""
          link_path7=""
          link_path8=""
        />
        <ClassCard
          path=""
          name="Друїд"
          hits="к8"
          ability1="Інтелект"
          ability2="Мудрість"
          bgImage={colors.druid}
          classImage={vector.druidVector}
          heroImage={img.druid}
          link_path2=""
          link_path3=""
          link_path4=""
          link_path5=""
          link_path6=""
          link_path7=""
          link_path8=""
        />
        {/* <ClassCard name="Винахідник" hits="к8" ability1="Статура" ability2="Інтелект" bgImage={colors.inventor} classImage={vector.inventorVector} heroImage={img.inventor} />
          <ClassCard name="Чаклун" hits="к8" ability1="Мудрість" ability2="Харизма" bgImage={colors.sorcerer} classImage={vector.sorcererVector} heroImage={img.sorcerer} />
          <ClassCard name="Монах" hits="к8" ability1="Сила" ability2="Спритність" bgImage={colors.monk} classImage={vector.monkVector} heroImage={img.monk} />
          <ClassCard name="Паладін" hits="к8" ability1="Мудрість" ability2="Харизма" bgImage={colors.paladin} classImage={vector.paladinVector} heroImage={img.paladin} />
          <ClassCard name="Розбійник" hits="к8" ability1="Спритність" ability2="Інтелект" bgImage={colors.robber} classImage={vector.robberVector} heroImage={img.robber} />
          <ClassCard name="Рейнджер" hits="к8" ability1="Сила" ability2="Спритність" bgImage={colors.ranger} classImage={vector.rangerVector} heroImage={img.ranger} />
          <ClassCard name="Чародій" hits="к8" ability1="Статура" ability2="Харизма" bgImage={colors.wizard} classImage={vector.wizardVector} heroImage={img.wizard} /> */}
      </div>
    </>
  );
}
