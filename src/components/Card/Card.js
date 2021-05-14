import './Card.css'

export default function Card({ name, id, location, image, gender }) {
  return (
    <section key={id} className="Card">
      <h2 className="Card__heading">{name}</h2>
      <img className="Card__image" src={image} alt="" />
      <p className="Card__copy-text">{location.name}</p>
    </section>
  )
}
