import Button from '../Button/Button'
import './Navigation.css'

export default function Navigation({ isActive, handleClick, hasBookmarks }) {
  const bookmark = hasBookmarks.length > 0 ? true : false
  console.log(hasBookmarks)
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
      {bookmark && (
        <Button isActive={isActive.bookmarks} handleClick={handleClick}>
          Bookmarks
        </Button>
      )}
    </nav>
  )
}
