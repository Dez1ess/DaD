import RaceCard1 from "../../components/RacesComponents/RaceCard1"
import RaceCard2 from "../../components/RacesComponents/RaceCard2"
import { raceImages as img, bgImages as bg } from "../../assets/RaceImages/raceImages"
import TopNavBar from "../../components/Navigation/TopNavBar"
import { Link } from "react-router-dom"


export default function Races() {
  const linkFolders = (
    <>  
      <Link to="/" style={{ color: '#000', opacity: '0.4'}}>Основна</Link>
      <span className="vertical-split">|</span>
      <Link to="/Races" style={{ color: '#000', pointerEvents: "none"}}>Раси</Link>
    </>
  )

  return (
    <>
    <TopNavBar folder={linkFolders} />
      <div className="races-wrapper">
        <div className="flex">
          <RaceCard2 path1="/Aarakokr_EV" path2="/Aarakokr_MPMM" name="Ааракокра" specs1="Спр +2, Мдр +1" specs2="+2 i +1/ +1 до трьох" book1="EV" book2="MPMM" bgColor={bg.aarakokr} raceImg={img.aarakokr} />
          <RaceCard2 path1="/Aasimar_VGM" path2="/Aasimar_MPMM" name="Аасимар" specs1="Хар +2" specs2="+2 i +1/ +1 до трьох" book1="VGM" book2="MPMM" bgColor={bg.aasimar} raceImg={img.aasimar} />
          <RaceCard1 path="/AutoDwarf_AAG" name="Автогном" specs1="+2 i +1/ +1 до трьох" book1="AAG" bgColor={bg.autognome} raceImg={img.autognome} />
        </div>
      </div>
    </>
  )
}