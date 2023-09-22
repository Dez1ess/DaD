import TraitsCard from "../../components/TraitsComponents/TraitsCard";
import TopNavBar from "../../components/Navigation/TopNavBar";
import { Link } from "react-router-dom";

export default function Traits() {
  const linkFolders = (
    <>  
      <Link to="/" style={{ color: '#000', opacity: '0.4'}}>Основна</Link>
      <span className="vertical-split">|</span>
      <Link to="/Traits" style={{ color: '#000', pointerEvents: "none"}}>Риси</Link>
    </>
  )

  return (
    <>
    <TopNavBar folder={linkFolders} />
      <div className="wrapper">
          <TraitsCard pageIndex={1} title="Агент порядку" description='4-й рівень, риса "Спадкоємець Зовнішніх Планів (Законний Зовнішній План)"' />
          <TraitsCard pageIndex={2} title="Агресія орків" description="Орк" />
          {/* <TraitsCard pageIndex={3} title='Адепт червоних ряс' description='4 рівень, Риса Присвячений у Вище' />
          <TraitsCard pageIndex={4} title='Адепт метамагії UA' description='Здатність накладати хоча б одне заклинання або Магія Договору' />
          <TraitsCard pageIndex={5} title='Адепт метамагії' description='Здатність накладати хоча б одне заклинання або Магія Договору' />
          <TraitsCard pageIndex={6} title='Адепт різьбяра рун' description='4 рівень, риса Учень рунорізчика' />
          <TraitsCard pageIndex={7} title='Адепт таїнств' description='Здатність накладати хоча б одне заклинання або Магія Договору' />
          <TraitsCard pageIndex={8} title='Пильний' description='Вимог немає' />
          <TraitsCard pageIndex={9} title='Борець' description='Сила 13 або вище' />
          <TraitsCard pageIndex={10} title='Другий шанс' description='Напіврослик' /> */}
      </div>
    </>
  );
}
