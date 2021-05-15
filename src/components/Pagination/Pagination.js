import './Pagination.css'

export default function Pagination({
  props,
  handleClickNext,
  handleClickPrev,
}) {
  console.log(props)
  const { pages, next } = props
  const re = /\d+/g
  const page = next ? next.match(re) - 1 : pages
  return (
    <section className="Pagination">
      <button
        onClick={handleClickPrev}
        className="Pagination__button"
        name="prev"
      >
        {' '}
        &lt;{' '}
      </button>
      <span className="Paginataion__span">
        {page} / {pages}
      </span>
      <button
        onClick={handleClickNext}
        className="Pagination__button"
        name="next"
      >
        {' '}
        &gt;{' '}
      </button>
    </section>
  )
}
