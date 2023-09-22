import './BestiaryCard.scss'
import { Link } from 'react-router-dom'

interface bestiary {
  level: string,
  title: string,
  description: string,
  path: string,
}

export default function BestiaryCard({level, title, description, path }: bestiary) {
  return (
    <Link to={path} className="bestiary-card traits-card">
      <div className="spell-level">
        <p>{level}</p>
      </div>
      <div className="bestiary-card-info">
        <h3>{title}</h3>
        <p>{description}</p>  
      </div>
    </Link>
  )
}