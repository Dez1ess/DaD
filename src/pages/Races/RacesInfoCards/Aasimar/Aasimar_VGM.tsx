import "../RaceCard2_info.scss";
import RacesStats from "../../../../components/RacesComponents/RacesStats";
import TopNavBar from "../../../../components/Navigation/TopNavBar";
import { Link } from "react-router-dom";
import DropMessage from "../../../../components/DropMessage";
import RacesBottomNavBar from "../../../../components/Navigation/RacesBottomNavBar";
import RacesSelectBox from "../../../../components/RacesComponents/RacesSelectBox";

export default function Aasimar_VGM() {
  const linkFolders = (
    <>
      <Link to="/" style={{ color: "#000", opacity: "0.4" }}>
        Осно...
      </Link>
      <span className="vertical-split">|</span>
      <Link to="/Races" style={{ color: "#000", opacity: "0.4" }}>
        Раси
      </Link>
      <span className="vertical-split">|</span>
      <Link to="" style={{ color: "#000", pointerEvents: "none" }}>
        Аасимар
      </Link>
    </>
  );

  const langs = (
    <>
      <p>Ви можете розмовляти, читати і писати Загальною і Небесною мовами.</p>
    </>
  );

  const age = (
    <>
      <p>
        Аасімари дорослішають як і люди, але вони можуть прожити до 160 років.
      </p>
    </>
  );

  const worldview = (
    <>
      <p>
        Наповнені небесною силою, аасімари здебільшого добрі. Але ізгої
        найчастіше нейтральні або навіть злі.
      </p>
    </>
  );

  const size = (
    <>
      <p>У аасимарів такі ж зріст і вага, як і в людей.</p>
    </>
  );

  const speed = (
    <>
      <p>Ваша базова швидкість ходьби 30 футів.</p>
    </>
  );

  const sight = (
    <>
      <p>
        Благословенний світлим духом, ваш зір може легко проникати крізь
        темряву. На відстані 60 футів ви за тьмяного освітлення можете бачити
        так, ніби це яскраве освітлення, і в темряві так, ніби це тьмяне
        освітлення. У темряві ви не можете розрізняти кольори, тільки відтінки
        сірого.
      </p>
    </>
  );

  const pressure = (
    <>
      <p>У Вас є опір некротичній шкоді та шкоді випромінюванням.</p>
    </>
  );

  const doctor = (
    <>
      <p>
        В якості дії ви можете торкнутися істоти і відновити їй кількість хітів,
        що дорівнює Вашому рівню. Ви не зможете знову скористатися цією
        здатністю поки не закінчите тривалий відпочинок.
      </p>
    </>
  );

  const missioner = (
    <>
      <p>Вам відома змова світло</p>
    </>
  );

  const boost = (
    <>
      <p>Значення вашої Харизми збільшується на 2.</p>
    </>
  );

  const aasimar_default_vgm = (
    <>
      <RacesStats
        name="Гуманоїд"
        addition="Хар +2"
        size="Середній"
        speed="Гуманоїд 30 футів"
        sight="60 футів"
      />
    </>
  );

  const aasimar_defender_vgm = (
    <>
      <RacesStats
        name="Захисник"
        addition="Зах +2"
        size="Середній"
        speed="Захисник 30 футів"
        sight="60 футів"
      />
    </>
  );

  const aasimar_punisher_vgm = (
    <>
      <RacesStats
        name="Каратель"
        addition="Кар +2"
        size="Середній"
        speed="Каратель 30 футів"
        sight="60 футів"
      />
    </>
  );

  const aasimar_fallen_vgm = (
    <>
      <RacesStats
        name="Павший"
        addition="Пав +2"
        size="Середній"
        speed="Павший 30 футів"
        sight="60 футів"
      />
    </>
  );

  const Aasimar_Default = (
    <>
      {aasimar_default_vgm}
      <div className="drop-messages">
        <DropMessage name="Зір в темноті" description={sight} />
        <DropMessage name="Небесний опір" description={pressure} />
        <DropMessage name="Зцілювальні руки" description={doctor} />
        <DropMessage name="Той, що несе світло" description={missioner} />
        <DropMessage name="Мови" description={langs} />
        <DropMessage name="Збільшення характеристик" description={boost} />
        <DropMessage name="Вік" description={age} />
        <DropMessage name="Світогляд" description={worldview} />
        <DropMessage name="Розмір" description={size} />
        <DropMessage name="Швидкість" description={speed} />
      </div>
    </>
  );

  const Aasimar_Defender = (
    <>
      {aasimar_defender_vgm}
      <div className="drop-messages">
        <DropMessage name="Зір в темноті" description={sight} />
        <DropMessage name="Небесний опір" description={pressure} />
        <DropMessage name="Зцілювальні руки" description={doctor} />
        <DropMessage name="Той, що несе світло" description={missioner} />
        <DropMessage name="Мови" description={langs} />
        <DropMessage name="Збільшення характеристик" description={boost} />
        <DropMessage name="Вік" description={age} />
        <DropMessage name="Світогляд" description={worldview} />
        <DropMessage name="Розмір" description={size} />
        <DropMessage name="Швидкість" description={speed} />
      </div>
    </>
  );

  const Aasimar_Punisher = (
    <>
      {aasimar_punisher_vgm}
      <div className="drop-messages">
        <DropMessage name="Зір в темноті" description={sight} />
        <DropMessage name="Небесний опір" description={pressure} />
        <DropMessage name="Зцілювальні руки" description={doctor} />
        <DropMessage name="Той, що несе світло" description={missioner} />
        <DropMessage name="Мови" description={langs} />
        <DropMessage name="Збільшення характеристик" description={boost} />
        <DropMessage name="Вік" description={age} />
        <DropMessage name="Світогляд" description={worldview} />
        <DropMessage name="Розмір" description={size} />
        <DropMessage name="Швидкість" description={speed} />
      </div>
    </>
  );

  const Aasimar_Fallen = (
    <>
      {aasimar_fallen_vgm}
      <div className="drop-messages">
        <DropMessage name="Зір в темноті" description={sight} />
        <DropMessage name="Небесний опір" description={pressure} />
        <DropMessage name="Зцілювальні руки" description={doctor} />
        <DropMessage name="Той, що несе світло" description={missioner} />
        <DropMessage name="Мови" description={langs} />
        <DropMessage name="Збільшення характеристик" description={boost} />
        <DropMessage name="Вік" description={age} />
        <DropMessage name="Світогляд" description={worldview} />
        <DropMessage name="Розмір" description={size} />
        <DropMessage name="Швидкість" description={speed} />
      </div>
    </>
  );

  return (
    <>
      <TopNavBar folder={linkFolders} />
      <RacesBottomNavBar
        path1_1="/Aasimar_VGM"
        path1_2="/Aasimar_MPMM"
        path2="/Aasimar_descr"
        path3="/AasimarImg"
      />
      <div className="wrapper" style={{paddingTop: "90px"}}>
        <div className="fixed-top-big-white-bg"></div>
        <div
          className="race-books"
        >
          <Link to="/Aasimar_VGM"  className="book active-book">VGM</Link>
          <Link to="/Aasimar_MPMM" className="book">MPMM</Link>
        </div>
        <RacesSelectBox
          options={[
            {label: "Аасимар Базовий", value: Aasimar_Default},
            {label: "Аасимар Захисник", value: Aasimar_Defender},
            {label: "Аасимар Каратель", value: Aasimar_Punisher},
            {label: "Аасимар Павший", value: Aasimar_Fallen},
          ]}
          character="Аасимарів"
        />
      </div>
    </>
  );
}
