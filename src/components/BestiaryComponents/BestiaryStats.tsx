import '../BestiaryStats.scss'
import { bestiaryStatsImages as img } from '../../assets/BestiaryStatsImages/bestiaryStatsImages'

interface Stats {
  power: string,
  agility: string,
  stature: string,
  intelligence: string,
  wisdom: string,
  charisma: string,
}

export default function BestiaryStats({ power, agility, stature, intelligence, wisdom, charisma}: Stats) {
  return (
    <div className="stats">
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.power} alt="power" />
          <span>Сила</span>
        </div>
        <div className="stats-value">{power}</div>
      </div>
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.agility} alt="agility" />
          <span>Спритність</span>
        </div>
        <div className="stats-value">{agility}</div>
      </div>
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.stature} alt="stature" />
          <span>Статура</span>
        </div>
        <div className="stats-value">{stature}</div>
      </div>
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.intelligence} alt="intelligence" />
          <span>Інтелект</span>
        </div>
        <div className="stats-value">{intelligence}</div>
      </div>
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.wisdom} alt="wisdom" />
          <span>Мудрість</span>
        </div>
        <div className="stats-value">{wisdom}</div>
      </div>
      <div className="stats-item">
        <div className="stats-description">
          <img src={img.charisma} alt="charisma" />
          <span>Харизма</span>
        </div>
        <div className="stats-value">{charisma}</div>
      </div>
    </div>
  )
}