import './Location.css'

export default function Location(
  { name, id, type, residents },
  handleClick,
  residentsObj
) {
  const residentsIds = residents.map(url => {
    const re = /\d+/g
    return url.match(re)
  })

  const thisResidents = residentsObj.map(obj =>
    residentsIds.filter(el => obj.id === Number(el))
  )
  const isThisResidents =
    typeof thisResidents[0] !== 'undefined' && thisResidents[0].length > 0
      ? true
      : false

  return (
    <section key={id} className="Location">
      <h2 className="Location__heading">{name}</h2>
      {!isThisResidents && (
        <button className="Location__button" name={id} onClick={handleClick}>
          Show Residents
        </button>
      )}
      <ul className="Location__list">
        {isThisResidents &&
          residentsObj.map(char => <li key={char.id}>{char.name}</li>)}
      </ul>
    </section>
  )
}
