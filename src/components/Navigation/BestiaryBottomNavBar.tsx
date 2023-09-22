import './BestiaryBottomNavBar.scss'
import { Link, useLocation } from 'react-router-dom'

interface BestiaryBottomNavBarProps {
  path1: string;
  path2: string;
}

export default function BestiaryBottomNavBar({path1, path2}: BestiaryBottomNavBarProps) {
  const location = useLocation();

  return (
    <div className="bottom-nav">
      <Link to={path1} className={`option ${location.pathname === path1 ? 'active-bar' : ''}`} >
        <img src="specs-bar.svg" alt="specs" />
        <p>Характеристики</p></Link>
      <Link to={path2} className={`option ${location.pathname === path2 ? 'active-bar' : ''}`}>
        <img src="photos-bar.svg" alt="photos" />
        <p>Фото</p></Link>
    </div>
  )
}