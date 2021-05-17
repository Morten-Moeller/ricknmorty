import './Card.css'

export default function Card({ props }) {
  const { name, gender, image, status, species } = props
  const firstEpisode = 'S01E01'
  const firstEpisodeName = 'Pilot'
  return (
    <section className="Card">
      <button className="Card__bookmark" aria-label="bookmark" />
      <h2 className="Card__heading">
        {name} {gender === 'Male' ? '♂' : '♀'}
      </h2>
      <img className="Card__image" src={image} alt="" />
      <p className="Card__copytext">
        {name} is an {species} and was first seen in {firstEpisodeName} (
        {firstEpisode}). {name} is{' '}
        {status === 'Alive'
          ? 'still alive'
          : status === 'Dead'
          ? 'dead'
          : 'maybe alive'}
      </p>
    </section>
  )
}
