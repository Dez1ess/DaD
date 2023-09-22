import BestiaryCard from "../../components/BestiaryComponents/BestiaryCard"
import TopNavBar from "../../components/Navigation/TopNavBar"
import { Link } from "react-router-dom"

export default function Bestiary() {
  const linkFolders = (
    <>  
      <Link to="/" style={{ color: '#000', opacity: '0.4'}}>Основна</Link>
      <span className="vertical-split">|</span>
      <Link to="/Bestiary" style={{ color: '#000', pointerEvents: "none"}}>Бестіарій</Link>
    </>
  )

  return (
    <>
    <TopNavBar folder={linkFolders} />
      <div className="wrapper">
          <BestiaryCard path="/DrakeCompanion"  level="-" title="Дрейк Компаньон" description="Маленький дракон, без світогляду, 1/2 клітки" />
          <BestiaryCard path="/SpiritOfTheElements" level="1" title="Дух Стихії" description="Середній елементаль, без світогляду / 1 клітина" />
          {/* <BestiaryCard path="" level="-" title="Дух Аберації" description="Середня аберація, без світогляду / 1 клітина" />
          <BestiaryCard path="" level="-" title="Дух дикого вогню" description="Маленький елементаль, без світогляду / 1/2 клітини" />
          <BestiaryCard path="" level="-" title="Дух дракона" description="Великий дракон, без світогляду / 2x2 клітини" />
          <BestiaryCard path="" level="0" title="Жаба" description="Крихітний звір, без світогляду / 1/4 клітки" />
          <BestiaryCard path="" level="0" title="Щур" description="Крихітний звір, без світогляду / 1/4 клітки" />
          <BestiaryCard path="" level="1/8" title="Бригганок" description="Крихітна фея, нейтрально-добра / 1/4 клітки" />
          <BestiaryCard path="" level="1/8" title="Гігантський щур" description="Маленький звір, без світогляду / 1/2 клітки" />
          <BestiaryCard path="" level="1/4" title='Волотамп "Воло" Геддарм' description="Середній гуманоїд (людина), хаотично-добрий / 1 клітина" />
          <BestiaryCard path="" level="1/4" title="Гігантський борсук" description="Середній звір, без світогляду / 1 клітина" />
          <BestiaryCard path="" level="1/2" title="Газова спора" description="Велика рослина, без світогляду / 2x2 клітини" />
          <BestiaryCard path="" level="1/2" title="Головорез" description="Середній гуманоїд, без світогляду / 1 клітина" />
          <BestiaryCard path="" level="1" title="Болотник" description="Великий звір, без світогляду / 2x2 клітки" />
          <BestiaryCard path="" level="2" title="Вампірат " description="Середня нежить, законно-зла / 1 клітина" />
          <BestiaryCard path="" level="3" title="Водна аномалія" description="Великий елементаль, нейтральний / 2x2 клітини" />
          <BestiaryCard path="" level="4" title="Гіраллон" description="Велике чудовисько, хаотично-нейтральне / 2x2 клітини" />
          <BestiaryCard path="" level="5" title="Гном маніпулятор із Невермінда" description="Маленький гуманоїд, будь-який світогляд / 1/2 клітини" />
          <BestiaryCard path="" level="6" title="Жрець Осібуса" description="Середній гуманоїд, без світогляду / 1 клітина" />
          <BestiaryCard path="" level="7" title="Душа Дракона" description="Середній гуманоїд (людина), нейтрально-злий / 1 клітина" />
          <BestiaryCard path="" level="8" title="Молодий бронзовий дракон" description="Великий дракон (металевий), законно-добрий / 2x2 клітини" />
          <BestiaryCard path="" level="9" title="Благоткас" description="Величезний велетень (хмарний велетень), нейтрально-злий / 3x3 клітини" />
          <BestiaryCard path="" level="10" title="Кам'яний голем" description="Великий конструкт, без світогляду / 2x2 клітини" />
          <BestiaryCard path="" level="30" title="Тіамат" description="Величезне породження, без світогляду / 4х4 клітини або більше" /> */}
      </div>
    </>
  )
}