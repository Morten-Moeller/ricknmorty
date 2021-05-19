import './Pagination.css'

export default function Pagination({
  page,
  totalPages,
  onClick,
  navigationActive,
}) {
  const localTotalPages = totalPages[navigationActive]
  return (
    <div className="Pagination">
      <button onClick={handleClick} name="paginationMinus">
        {' '}
        –{' '}
      </button>
      <span>
        {page[navigationActive]}/{localTotalPages}
      </span>
      <button onClick={handleClick} name="paginationPlus">
        {' '}
        +{' '}
      </button>
    </div>
  )

  function handleClick(event) {
    const value = event.target.name === 'paginationPlus' ? 1 : -1
    onClick(navigationActive, value, localTotalPages)
  }
}
