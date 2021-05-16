import './Episode.css'

export default function Episode({ id, name, episode, air_date }) {
  const splitDate = air_date.split(' ')
  const day = [splitDate[1].replace(',', '.')]
  splitDate.splice(1, 1)
  const dateFormated = day.concat(splitDate).join(' ')
  return (
    <section key={id} className="Episode">
      <h2 className="Episode__heading">{name}</h2>
      <small>{episode}</small>
      <ul className="Episode__list">
        <li>First time on air:</li>
        <li>{dateFormated}</li>
      </ul>
    </section>
  )
}
