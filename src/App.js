import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Location from './components/Location/Location'
import Episode from './components/Episode/Episode'

function App() {
  const [url, setUrl] = useState({
    char: 'https://rickandmortyapi.com/api/character',
    episode: 'https://rickandmortyapi.com/api/episode',
    location: 'https://rickandmortyapi.com/api/location',
  })

  const [isActive, setIsActive] = useState({
    characters: true,
    episodes: false,
    locations: false,
  })

  const [chars, setChars] = useState([])

  useEffect(
    () =>
      fetch(url.char)
        .then(res => res.json())
        .then(data => setChars(() => setChars([...chars, ...data.results]))),
    [url]
  )

  const [episode, setEpisode] = useState([])

  useEffect(
    () =>
      fetch(url.episode)
        .then(res => res.json())
        .then(data =>
          setEpisode(() => setEpisode([...episode, ...data.results]))
        ),
    []
  )

  const [location, setLocation] = useState([])

  useEffect(
    () =>
      fetch(url.location)
        .then(res => res.json())
        .then(data =>
          setLocation(() => setLocation([...location, ...data.results]))
        ),
    []
  )

  return (
    <div className="App">
      <Header />
      <Navigation isActive={isActive} handleClick={handleClick} />

      {isActive.locations && renderLocations()}
      {isActive.episodes && renderEpisodes()}
      {isActive.characters && renderChars()}
    </div>
  )

  function renderChars() {
    return chars.map(el => Card(el))
  }

  function renderLocations() {
    return location.map(el => Location(el))
  }

  function renderEpisodes() {
    return episode.map(el => Episode(el))
  }

  function handleClick(event) {
    const value = event.target.name.toLowerCase()
    const obj = { characters: false, episodes: false, locations: false }
    obj[value] = true
    setIsActive(obj)
  }
}

export default App
