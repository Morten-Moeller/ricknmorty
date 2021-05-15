import './Card.css'

export default function Card({ props }) {
  const { name, location, image } = props
  return (
    <section className="Card">
      <h2 className="Card__heading">{name}</h2>
      <img className="Card__image" src={image} alt="" />
      <p className="Card__copy-text">{location.name}</p>
    </section>
  )
}
