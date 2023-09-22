import SpellCard from "../../../../components/SpellCard";
import Concentration from "../../../../components/Concentration";
import B_Component from "../../../../components/SpellLetterComponents/B_Component";
import C_Component from "../../../../components/SpellLetterComponents/C_Component";
import M_Component from "../../../../components/SpellLetterComponents/M_Component";
import ClassesBottomNavBar from "../../../../components/Navigation/ClassesBottomNavBar";

import BardLink from "../../../../components/ClassLinks/BardLink";
import MagicianLink from "../../../../components/ClassLinks/MagicianLink";
import WizardLink from "../../../../components/ClassLinks/WizardLink";
import WarlockLink from "../../../../components/ClassLinks/WarlockLink";
import InventorLink from "../../../../components/ClassLinks/InventorLink";

import OriginLink from "../../../../components/ClassLinks/OriginsAndRacesLink/OriginLink";

export default function BardWhispersSpells({ render }: { render: boolean }) {
  return render ? (
    <>
      <ClassesBottomNavBar
        path1="/BardAbilities?option=6"
        path2="/BardDescriptions?option=6"
        path3="/BardSpells?option=6"
        path4="/BardImgs?option=6"
      />
      <div
        className="wrapper classes-wrapper-margin flex-column"
        style={{ marginBottom: "65px" }}
      >
        <SpellCard
          lvl="5"
          spellType="Виклик"
          spellName="Чарівна рука Барда"
          components={
            <>
              <B_Component />
              <C_Component />
            </>
          }
          trigger={false}
          popName="Чарівна рука Барда"
          popLvl="5 рівень"
          popType="Виклик"
          popTime="1 дія"
          popDistance="30 футів"
          popDuration="1 хвилина"
          popComps={
            <>
              <B_Component />
              <C_Component />
            </>
          }
        >
          <p className="popup-subhead">Опис</p>
          <p>
            У точці, обраній вами в межах дистанції, з'являється примарна рука,
            що ширяє. Рука існує, поки заклинання активне, або поки ви не
            відпустите її дією. Рука зникає, якщо опиниться більш ніж за 30
            футів від вас, або якщо ви повторно використовуєте це заклинання.
          </p>
          <p>
            Ви можете дією контролювати руку. Ви можете з її допомогою
            маніпулювати предметами, відчиняти незамкнені двері та контейнери,
            прибирати предмети у відкриті контейнери та діставати їх звідти, або
            виливати вміст флаконів.
          </p>
          <p>
            При кожному використанні руки ви можете перемістити її на 30 футів.
            Рука не може здійснювати атаки, активувати магічні предмети і
            переносити більше 10 фунтів.
          </p>

          <div className="popup-classes-container">
            <p className="popup-subhead">Класи</p>
            <div className="popup-classes">
              <BardLink />
              <MagicianLink />
              <WizardLink />
              <WarlockLink />
              <InventorLink />
            </div>
          </div>

          <div className="popup-origins-container">
            <p className="popup-subhead">Раси та походження</p>
            <div className="popup-origins">
              <OriginLink path="" title="Гіт'янки" />
              <OriginLink path="" title="Гітцераї" />
              <OriginLink path="" title="Тіфлінг (маммон)" />
              <OriginLink path="" title="Тіфлінг (мефістотель)" />
            </div>
          </div>
        </SpellCard>

        <SpellCard
          lvl="5"
          spellType="Зачарування"
          spellName="Дружба Барда"
          concentration={<Concentration />}
          components={
            <>
              <C_Component />
              <M_Component />
            </>
          }
          trigger={false}
          popName="Дружба Барда"
          popLvl="5 рівень"
          popType="Зачарування"
          popTime="1 дія"
          popDistance="На себе"
          popDuration="Концентрація, до 1 хвилини"
          popComps={
            <>
              <C_Component />
              <M_Component />
            </>
          }
        >
          <p className="popup-subhead">Матеріальні компоненти</p>
          <p>
            Невелика кількість гриму, що наноситься на обличчя під час
            накладання цього заклинання
          </p>
          <p className="popup-subhead">Опис</p>
          <p>
            У точці, обраній вами в межах дистанції, з'являється примарна рука,
            що ширяє. Рука існує, поки заклинання активне, або поки ви не
            відпустите її дією. Рука зникає, якщо опиниться більш ніж за 30
            футів від вас, або якщо ви повторно використовуєте це заклинання.
          </p>
          <p>
            Ви можете дією контролювати руку. Ви можете з її допомогою
            маніпулювати предметами, відчиняти незамкнені двері та контейнери,
            прибирати предмети у відкриті контейнери та діставати їх звідти, або
            виливати вміст флаконів.
          </p>
          <p>
            При кожному використанні руки ви можете перемістити її на 30 футів.
            Рука не може здійснювати атаки, активувати магічні предмети і
            переносити більше 10 фунтів.
          </p>
          <div className="popup-classes-container">
            <p className="popup-subhead">Класи</p>
            <div className="popup-classes">
              <BardLink />
              <MagicianLink />
              <WizardLink />
              <WarlockLink />
              <InventorLink />
            </div>
          </div>

          <div className="popup-origins-container">
            <p className="popup-subhead">Раси та походження</p>
            <div className="popup-origins">
              <OriginLink path="" title="Гіт'янки" />
              <OriginLink path="" title="Гітцераї" />
              <OriginLink path="" title="Тіфлінг (маммон)" />
              <OriginLink path="" title="Тіфлінг (мефістотель)" />
            </div>
          </div>
        </SpellCard>

        {/* <SpellCard lvl="0 " spellType="Огородження" spellName="Захист від зброї"
          components={<><B_Component /><C_Component /></>} />
        <SpellCard lvl="0 " spellType="Зачарування" spellName="Злий насміх"
          components={<><B_Component /></>} />
        <SpellCard lvl="0" spellType="Ілюзія" spellName="Мала ілюзія"
          components={<><B_Component /><C_Component /></>} concentration={<Concentraion />} />
        <SpellCard lvl="0" spellType="Втілення" spellName="Тремтіння землі"
          components={<><B_Component /><C_Component /><M_Component /></>} />
        <SpellCard lvl="0" spellType="Зачарування" spellName="Дружба з тваринами"
          components={<><B_Component /><M_Component /></>} />
        <SpellCard lvl="1" spellType="Віщування" spellName="Пошук предмета"
          components={<><B_Component /><C_Component /><M_Component /></>} concentration={<Concentraion />} />
        <SpellCard lvl="1" spellType="Перетворення" spellName="Уповільнення"
          components={<><B_Component /><C_Component /><M_Component /></>} concentration={<Concentraion />} />
        <SpellCard lvl="1" spellType="Огородження" spellName="Непомітність"
          components={<><C_Component /><M_Component /></>} />
        <SpellCard lvl="2" spellType="Ілюзія" spellName="Міраж"
          components={<><M_Component /></>} /> */}
      </div>
    </>
  ) : null;
}
