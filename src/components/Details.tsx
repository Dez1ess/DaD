import './Details.scss'

interface Details {
  equipmentClass: string,
  hits: string,
  speed: string,
  abilities: string,
  feeling: string,
  languages: string,
  dangerLevel: string,
}

export default function Details({equipmentClass, hits, speed, abilities, feeling, languages, dangerLevel}: Details) {
  return (
    <div className="details">
      <p><b>Клас обладунку</b>: {equipmentClass}</p>
      <p><b>Хіти</b>: {hits}</p>
      <p><b>Швидкість</b>: {speed}</p>
      <p><b>Спаски</b>: {abilities}</p>
      <p><b>Почуття</b>: {feeling}</p>
      <p><b>Мови</b>: {languages}</p>
      <p><b>Рівень небезпеки</b>: {dangerLevel}</p>
    </div>
  )
}
