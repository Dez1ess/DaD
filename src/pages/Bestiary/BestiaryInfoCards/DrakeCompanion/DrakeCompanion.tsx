import TopNavBar from '../../../../components/Navigation/TopNavBar'
import { Link } from 'react-router-dom'
import DropMessage from '../../../../components/DropMessage'
import Details from '../../../../components/Details'
import Stats from '../../../../components/BestiaryComponents/BestiaryStats'
import BestiaryBottomNavBar from '../../../../components/Navigation/BestiaryBottomNavBar'


export default function DrakeCompanion() {
  const linkFolders = (
    <>
      <Link to="/" style={{ color: '#000', opacity: '0.4' }}>Осно...</Link>
      <span className="vertical-split">|</span>
      <Link to="/Bestiary" style={{ color: '#000', opacity: '0.4' }}>Бесті...</Link>
      <span className="vertical-split">|</span>
      <Link to="" style={{ color: '#000', pointerEvents: 'none' }}>Дрей...</Link>
    </>
  )

  const abilites = (
    <>
      <p><b>Сутність дракона.</b> Коли ви викликаєте дрейка, виберіть тип шкоди: кислота, холод, вогонь, блискавка чи отрута.</p>
      <p>Обраний тип визначає несприятливість дракона до шкоди і шкоду його риси Інфузні Удари.</p>
    </>
  )

  const actions = (
    <>
      <p><b>Сутність Антона.</b> Коли ви викликаєте дрейка, виберіть тип шкоди: кислота, холод, вогонь, блискавка чи отрута.</p>
    </>
  )

  const reactions = (
    <>
      <p><b>Сутність гандона.</b> Коли ви викликаєте дрейка, виберіть тип шкоди: кислота, холод, вогонь, блискавка чи отрута. Коли ви викликаєте дрейка, виберіть тип шкоди: кислота, холод, вогонь, блискавка чи отрута.</p>
    </>
  )

  return (
    <>
      <TopNavBar folder={linkFolders} />
      <BestiaryBottomNavBar path1='/DrakeCompanion' path2='/DrakeCompanionImg' />
      <div className="wrapper">
        <Stats
          power="16(+3)"
          agility="12(+1)"
          stature="15(+2)"
          intelligence="8(-1)"
          wisdom="14(+2)"
          charisma="8(-1)" />
        <Details
          equipmentClass="14 + бонус майстерності (природний обладунок)"
          hits="5 + п'ятикратний рівень слідопита (кількість кісток хітів (к10) дрейка дорівнює рівню вашого слідопита)"
          speed="40фт. (Дрейк Компаньйон)"
          abilities="Лов +1 + БМ, Мдр +2 + БМ"
          feeling="Темний зір 60фт., пасивна Уважність 12"
          languages="Драконячий"
          dangerLevel="-" />

        <div className="drop-messages">
          <DropMessage name="Здібності" description={abilites} />
          <DropMessage name="Дії" description={actions} />
          <DropMessage name="Реакції" description={reactions} />
        </div>

      </div>
    </>
  )
}