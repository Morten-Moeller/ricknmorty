import './Navigation.css'

export default function Navigation({ handleClick, navigationActive }) {
  return (
    <nav className="Navigation">
      <button
        onClick={handleClick}
        className={
          navigationActive === 'character'
            ? 'Navigation__button active'
            : 'Navigation__button'
        }
        name="navButtonCharacters"
      >
        Characters
      </button>
      <button
        onClick={handleClick}
        className={
          navigationActive === 'location'
            ? 'Navigation__button active'
            : 'Navigation__button'
        }
        name="navButtonLocations"
      >
        Locations
      </button>
      <button
        onClick={handleClick}
        className={
          navigationActive === 'episode'
            ? 'Navigation__button active'
            : 'Navigation__button'
        }
        name="navButtonEpisodes"
      >
        Episodes
      </button>
      <button
        onClick={handleClick}
        className={
          navigationActive === 'favorit'
            ? 'Navigation__button active'
            : 'Navigation__button'
        }
        name="navButtonFavorits"
      >
        Favorits
      </button>
    </nav>
  )
}
