import Button from '../Button/Button'
import './Navigation.css'

export default function Navigation({ isActive, handleClick }) {
  return (
    <nav className="Navigation">
      <Button isActive={isActive.characters} handleClick={handleClick}>
        Characters
      </Button>
      <Button isActive={isActive.episodes} handleClick={handleClick}>
        Episodes
      </Button>
      <Button isActive={isActive.locations} handleClick={handleClick}>
        Locations
      </Button>
      <Button isActive={isActive.bookmarks} handleClick={handleClick}>
        Bookmarks
      </Button>
    </nav>
  )
}
