import '../BestiaryStats.scss'
import { racesStatsImages as img } from '../../assets/RacesStatsImages/RacesStatsImages'

interface Stats {
  name: string,
  addition: string,
  size: string,
  speed: string,
  sight: string,
}

export default function RacesStats({ name, addition, size, speed, sight}: Stats) {
  return (
    <div className="stats">
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.name} alt="type" />
          <span>Тип</span>
        </div>
        <div className="stats-value">{name}</div>
      </div>
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.addition} alt="Доповнення" />
          <span>Доповнення</span>
        </div>
        <div className="stats-value">{addition}</div>
      </div>
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.size} alt="Розмір" />
          <span>Розмір</span>
        </div>
        <div className="stats-value">{size}</div>
      </div>
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.speed} alt="Швидкість" />
          <span>Швидкість</span>
        </div>
        <div className="stats-value">{speed}</div>
      </div>
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.sight} alt="Зір в темноті" />
          <span>Зір в темноті</span>
        </div>
        <div className="stats-value">{sight}</div>
      </div>
    </div>
  )
}