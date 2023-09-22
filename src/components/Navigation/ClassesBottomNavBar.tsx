import './ClassesBottomNavBar.scss';
import { Link, useLocation } from 'react-router-dom';

interface ClassesBottomNavBarProps {
  path1: string;
  path2: string;
  path3: string;
  path4: string;
}

export default function ClassesBottomNavBar({ path1, path2, path3, path4 }: ClassesBottomNavBarProps) {
  const currentPath = useLocation().pathname;

  return (
    <div className="classes-bottom-nav">
      <Link to={path1} className={`option ${currentPath === path1.split("?")[0] ? 'active-bar' : ''}`}>
        <img src="specs-bar.svg" alt="specs" />
        <p>Навички</p>
      </Link>
      <Link to={path2} className={`option ${currentPath === path2.split("?")[0] ? 'active-bar' : ''}`}>
        <img src="description.svg" alt="description" />
        <p>Опис</p>
      </Link>
      <Link to={path3} className={`option ${currentPath === path3.split("?")[0] ? 'active-bar' : ''}`}>
        <img src="spells.svg" alt="spells" />
        <p>Заклинання</p>
      </Link>
      <Link to={path4} className={`option ${currentPath === path4.split("?")[0] ? 'active-bar' : ''}`}>
        <img style={{ width: "21px" }} src="photos-bar.svg" alt="photos" />
        <p>Фото</p>
      </Link>
    </div>
  );
}
