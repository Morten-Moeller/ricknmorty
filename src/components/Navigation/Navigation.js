import { useState } from 'react'
import Button from '../Button/Button'
import './Navigation.css'

export default function Navigation() {
  const [isActive, setIsActive] = useState({
    characters: true,
    episodes: false,
    locations: false,
  })

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
    </nav>
  )

  function handleClick(event) {
    const value = event.target.name.toLowerCase()
    const obj = { characters: false, episodes: false, locations: false }
    obj[value] = true
    setIsActive(obj)
  }
}
