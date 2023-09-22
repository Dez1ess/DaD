import { useState } from 'react'
import './RaceCard.scss'
import { Link } from 'react-router-dom'

interface race {
  name: string,
  specs1: string,
  book1: string,
  bgColor: string,
  raceImg: string,
  path: string,
}

export default function RaceCard1({ name, specs1, book1, bgColor, raceImg, path }: race) {
  const [book, setBook] = useState(true);

  function handleClick() {
    setBook(() => !book)
  }

  return (
    <div className="race-card" style={{ background: `${bgColor}` }}>
      <Link to={path} className="race-link-container">
        <img src={raceImg} alt="race-picture" />
        <p className="race-name">{name}</p>
        <div className="race-specs"><span>Характеристики</span><br />
          <p>
            {specs1}
          </p>
        </div>
      </Link>
      <div className="books">
        <p><span>Книги:</span></p>
        <div className="books-container">
          <div onClick={handleClick} className="book1" style={{
            opacity: book ? '1' : '0.5',
            pointerEvents: book ? 'none' : 'all'
          }}>{book1}</div>
        </div>
      </div>
    </div>
  )
}