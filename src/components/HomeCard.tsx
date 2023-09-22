import {Link} from 'react-router-dom'
import './HomeCard.scss'

interface title {
  title: string,
  bgColor: string,
  path: string,
}

export default function HomeCard({ title, bgColor, path }: title) {
  return (
    <Link to={path} className="home-card" style={{ background: `${bgColor}` }}>
      <p>{title}</p>
    </Link>
  )
}