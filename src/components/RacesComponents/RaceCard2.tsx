import { useState } from 'react'
import './RaceCard.scss'
import { Link } from 'react-router-dom'

interface race {
  name: string,
  specs1: string,
  specs2: string,
  book1: string,
  book2: string,
  bgColor: string,
  raceImg: string,
  path1: string,
  path2: string,
}

export default function RaceCard2({ name, specs1, specs2, book1, book2, bgColor, raceImg, path1, path2 }: race) {
  const [book, setBook] = useState(true);

  function handleClick() {
    setBook(() => !book)
  }


  return (
    <div className="race-card" style={{ background: `${bgColor}` }}>
      <Link to={book ? path1 : path2} className="race-link-container">
        <img src={raceImg} alt="race-picture" />
        <p className="race-name">{name}</p>
        <div className="race-specs"><span>Характеристики</span><br />
          <p>
            {book ? `${specs1}` : `${specs2}`}
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
          <div onClick={handleClick} className="book2" style={{
            opacity: book ? '0.5' : '1',
            pointerEvents: book ? 'all' : 'none'
          }}>{book2}</div>
        </div>
      </div>
    </div>
  )
}