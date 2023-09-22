import './RacesBottomNavBar.scss'
import { Link, useLocation } from 'react-router-dom'

interface RacesBottomNavBar {
  path1_1: string,
  path1_2: string,
  path2: string,
  path3: string,
}

export default function RacesBottomNavBar({path1_1, path1_2, path2, path3}: RacesBottomNavBar) {
  const location = useLocation();

  return (
    <div className="races-bottom-nav">
      <Link to={path1_1} className={`option ${[path1_1, path1_2].includes(location.pathname) ? 'active-bar' : ''}`}>
        <img src="specs-bar.svg" alt="specs" />
        <p>Характеристики</p></Link>
      <Link to={path2} className={`option ${location.pathname === path2 ? 'active-bar' : ''}`} >
        <img src="description.svg" alt="photos" />
        <p>Опис</p></Link>
      <Link to={path3} className={`option ${location.pathname === path3 ? 'active-bar' : ''}`} >
        <img src="photos-bar.svg" alt="photos" />
        <p>Фото</p></Link>
    </div>
  )
}