import HomeCard from "../../components/HomeCard.tsx"
import { homeColors } from "../../assets/ClassImages/classCardImages.tsx"
import TopNavBar from "../../components/Navigation/TopNavBar.tsx"
import { Link } from "react-router-dom"

export default function Home() {
  const linkFolders = (
    <>  
      <Link to="/" style={{ color: '#000'}} className="logo-link">D&D</Link>
    </>
  )


  return (
    <>
      <TopNavBar folder={linkFolders} />
      <div className='home-wrapper'>
        <div className="home">
          <h2>Персонаж</h2>
          <div className="home-flex">
            <HomeCard path="/Classes" title="Класи" bgColor={homeColors.classes} />
            <HomeCard path="/Races" title="Раси" bgColor={homeColors.races} />
            <HomeCard path="/Traits" title="Риси персонажа" bgColor={homeColors.features} />
          </div>
          <h2>Мастерська</h2>
          <HomeCard path="/Bestiary" title="Бестіарій" bgColor={homeColors.bestiary} />
        </div>
      </div>
    </>
  )
}