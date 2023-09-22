import '../RaceCard2_info.scss'
import RacesStats from '../../../../components/RacesComponents/RacesStats'
import TopNavBar from '../../../../components/Navigation/TopNavBar'
import { Link } from 'react-router-dom'
import DropMessage from '../../../../components/DropMessage'
import RacesBottomNavBar from '../../../../components/Navigation/RacesBottomNavBar'

export default function AutoDwarf_AAG() {
  const linkFolders = (
    <>
      <Link to="/" style={{ color: '#000', opacity: '0.4' }}>Осно...</Link>
      <span className="vertical-split">|</span>
      <Link to="/Races" style={{ color: '#000', opacity: '0.4' }}>Раси</Link>
      <span className="vertical-split">|</span>
      <Link to="" style={{ color: '#000', pointerEvents: 'none' }}>Автогном</Link>
    </>
  )

  // const flight = (
  //   <>
  //     <p>Ви можете літати зі швидкістю 50 футів. Для цього ви не повинні носити ні середній, на важкий обладунок</p>
  //   </>
  // )

  // const claws = (
  //   <>
  //     <p>Ви володієте своєю беззбройною атакою, яка завдає при влучанні рубаючої шкоди 1к4.</p>
  //   </>
  // )

  // const langs = (
  //   <>
  //     <p>Ви розмовляєте, читаєте і пишете Загальною, Аураном і мовою Ааракокр.</p>
  //   </>
  // )

  // const specsBoost = (
  //   <>
  //     <p>Значення вашої Спритності збільшується на 2, а значення Мудрості збільшується на 1.</p>
  //   </>
  // )

  const age = (
    <>
      <p>Автогноми досягають зрілості з моменту народження (вони гноми).</p>
    </>
  )

  // const worldview = (
  //   <>
  //     <p>Велика частина ааракокр добра, але вони рідко вибирають між Законом і Хаосом. Вожді племені та воїни можуть бути законними, а дослідники та шукачі пригод, найімовірніше, будуть хаотичними</p>
  //   </>
  // )

  const size = (
    <>
      <p>Зріст автогномів близько 50см. Ваш розмір: мікроскопічний</p>
    </>
  )

  const speed = (
    <>
      <p>Ваша базова швидкість переміщення - 5 футів.</p>
    </>
  )

  return (
    <>
      <TopNavBar folder={linkFolders} />
      <RacesBottomNavBar
        path1_1="/AutoDwarf_AAG"
        path1_2="/AutoDwarf_AAG"
        path2="/AutoDwarf_descr"
        path3="/AutoDwarfImg"
      />
      <div className='wrapper' style={{paddingTop: "40px"}}>
      <div className="fixed-top-small-white-bg"></div>
        <div className='race-books'>
          <div className='book active-book'>AAG</div>
        </div>
        <RacesStats name="Гномоїд" addition="Лов +2, Крут +10" size="Маленький" speed="5 футів" sight="Присутній" />
        <div className="drop-messages">
          {/* <DropMessage name="Політ" description={flight} />
          <DropMessage name="Кігті" description={claws} />
          <DropMessage name="Мови" description={langs} />
          <DropMessage name="Збільшення характеристик" description={specsBoost} /> */}
          <DropMessage name="Розмір" description={size} />
          <DropMessage name="Вік" description={age} />
          <DropMessage name="Швидкість" description={speed} />
          {/* <DropMessage name="Світогляд" description={worldview} /> */}
        </div>

      </div>
    </>
  )
}