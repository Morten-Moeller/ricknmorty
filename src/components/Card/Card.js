import './Card.css'

export default function Card({ props, handleBookmark, bookmarked }) {
  const { name, location, image, id } = props
  const isMarked = bookmarked.find(bookmark => bookmark.name === name)
  const isBookmarked = isMarked ? true : false
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
