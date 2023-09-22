import {Link} from 'react-router-dom'
import './TraitsCard.scss'

interface traitCard {
  title: string,
  description: string,
  pageIndex: number,
}


export default function TraitsCard({title, description, pageIndex}: traitCard) {
  return (
    <Link to={`/TraitsCardInfo${pageIndex}`} className="traits-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  )
}