import './Card.css'

export default function Card({ props, isActive, handleBookmark }) {
  const { name, location, image, id, isBookmarked } = props
  return (
    <section className="Card">
      <button
        name={id}
        onClick={handleBookmark}
        className={
          isBookmarked
            ? 'Card__bookmark Card__bookmark--active'
            : 'Card__bookmark'
        }
        aria-label="Bookmark"
      ></button>
      <h2 className="Card__heading">{name}</h2>
      <img className="Card__image" src={image} alt="" />
      <p className="Card__copy-text">📍{location.name}</p>
    </section>
  )
}
