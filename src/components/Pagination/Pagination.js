import './Pagination.css'

export default function Pagination({
  props,
  handleClickNext,
  handleClickPrev,
}) {
  const { pages, next } = props
  const re = /\d+/g
  const page = next.match(re) - 1
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
        {page ? page : pages} / {pages}
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
