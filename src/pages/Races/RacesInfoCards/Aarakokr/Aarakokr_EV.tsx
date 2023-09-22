import '../RaceCard2_info.scss'
import RacesStats from '../../../../components/RacesComponents/RacesStats'
import TopNavBar from '../../../../components/Navigation/TopNavBar'
import { Link } from 'react-router-dom'
import DropMessage from '../../../../components/DropMessage'
import RacesBottomNavBar from '../../../../components/Navigation/RacesBottomNavBar'

export default function Aarakokr_EV() {
  const linkFolders = (
    <>
      <Link to="/" style={{ color: '#000', opacity: '0.4' }}>Осно...</Link>
      <span className="vertical-split">|</span>
      <Link to="/Races" style={{ color: '#000', opacity: '0.4' }}>Раси</Link>
      <span className="vertical-split">|</span>
      <Link to="" style={{ color: '#000', pointerEvents: 'none' }}>Ааракокра</Link>
    </>
  )

  const flight = (
    <>
      <p>Ви можете літати зі швидкістю 50 футів. Для цього ви не повинні носити ні середній, на важкий обладунок</p>
    </>
  )

  const claws = (
    <>
      <p>Ви володієте своєю беззбройною атакою, яка завдає при влучанні рубаючої шкоди 1к4.</p>
    </>
  )

  const langs = (
    <>
      <p>Ви розмовляєте, читаєте і пишете Загальною, Аураном і мовою Ааракокр.</p>
    </>
  )

  const specsBoost = (
    <>
      <p>Значення вашої Спритності збільшується на 2, а значення Мудрості збільшується на 1.</p>
    </>
  )

  const age = (
    <>
      <p>Ааракокри досягають зрілості до 3 років. Зазвичай ааракокри не живуть довше 30 років.</p>
    </>
  )

  const worldview = (
    <>
      <p>Велика частина ааракокр добра, але вони рідко вибирають між Законом і Хаосом. Вожді племені та воїни можуть бути законними, а дослідники та шукачі пригод, найімовірніше, будуть хаотичними</p>
    </>
  )

  const size = (
    <>
      <p>Зріст ааракокр близько 5 футів (1,5 метра). Їхні тіла стрункі та легкі, а вага може бути в діапазоні від 80 до 100 фунтів (від 36 до 45 кілограмів). Ваш розмір - Середній.</p>
    </>
  )

  const speed = (
    <>
      <p>Ваша базова швидкість переміщення - 25 футів.</p>
    </>
  )

  const option2 = (<><RacesStats name="Гуманоїд" addition="+2 і +1 / +1 до трьох" size="Середній" speed="25 футів" sight="Відсутній" />
  </>)


  return (
    <>
      <TopNavBar folder={linkFolders} />
      <RacesBottomNavBar
        path1_1="/Aarakokr_EV"
        path1_2="/Aarakokr_MPMM"
        path2="/Aarakokr_descr"
        path3="/AarakokrImg"
      />
      <div className='wrapper' style={{paddingTop: "45px"}}>
        <div className="fixed-top-small-white-bg"></div>
        <div className='race-books'>
          <Link to="/Aarakokr_EV" className="book active-book">EV</Link>
          <Link to="/Aarakokr_MPMM" className="book">MPMM</Link>
        </div>
        {option2}
        <div className="drop-messages">
          <DropMessage name="Політ" description={flight} />
          <DropMessage name="Кігті" description={claws} />
          <DropMessage name="Мови" description={langs} />
          <DropMessage name="Збільшення характеристик" description={specsBoost} />
          <DropMessage name="Вік" description={age} />
          <DropMessage name="Світогляд" description={worldview} />
          <DropMessage name="Розмір" description={size} />
          <DropMessage name="Швидкість" description={speed} />
        </div>

      </div>
    </>
  )
}