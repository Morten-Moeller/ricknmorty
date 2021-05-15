import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Location from './components/Location/Location'
import Episode from './components/Episode/Episode'
import Pagination from './components/Pagination/Pagination'

function App() {
  const [url, setUrl] = useState({
    characters: 'https://rickandmortyapi.com/api/character',
    episodes: 'https://rickandmortyapi.com/api/episode',
    locations: 'https://rickandmortyapi.com/api/location',
  })

  const [isActive, setIsActive] = useState({
    characters: true,
    episodes: false,
    locations: false,
  })

  const [pageChar, setPageChar] = useState({
    count: 671,
    next: 'https://rickandmortyapi.com/api/character?page=2',
    pages: 34,
    prev: null,
  })

  const [chars, setChars] = useState([])

  useEffect(
    () =>
      fetch(url.characters)
        .then(res => res.json())
        .then(data => {
          setChars(() => setChars([...data.results]))
          setPageChar(data.info)
        }),
    [url.characters]
  )

  const [pageEpisode, setPageEpisode] = useState({
    count: 671,
    next: 'https://rickandmortyapi.com/api/episode?page=2',
    pages: 34,
    prev: null,
  })

  const [episode, setEpisode] = useState([])

  useEffect(
    () =>
      fetch(url.episodes)
        .then(res => res.json())
        .then(data =>
          setEpisode(() => {
            setEpisode([...data.results])
            setPageEpisode(data.info)
          })
        ),
    [url.episodes]
  )

  const [pageLocation, setPageLocation] = useState({
    count: 671,
    next: 'https://rickandmortyapi.com/api/location?page=2',
    pages: 34,
    prev: null,
  })

  const [location, setLocation] = useState([])

  useEffect(
    () =>
      fetch(url.locations)
        .then(res => res.json())
        .then(data =>
          setLocation(() => {
            setLocation([...data.results])
            setPageLocation(data.info)
          })
        ),
    [url.locations]
  )

  return (
    <div className="App">
      <Header />
      <Navigation isActive={isActive} handleClick={handleNavClick} />
      <Pagination
        props={pageChar}
        handleClickNext={handleNextPageClick}
        handleClickPrev={handlePrevPageClick}
      />

      {isActive.locations && location && renderLocations()}
      {isActive.episodes && episode && renderEpisodes()}
      {isActive.characters && chars && renderChars()}
    </div>
  )

  function renderChars() {
    return chars.map(el => <Card key={el.id} props={el} />)
  }

  function renderLocations() {
    return location.map(el => Location(el))
  }

  function renderEpisodes() {
    return episode.map(el => Episode(el))
  }

  function handleNavClick(event) {
    const value = event.target.name.toLowerCase()
    const obj = { characters: false, episodes: false, locations: false }
    obj[value] = true
    setIsActive(obj)
  }

  function handleNextPageClick() {
    const target = Object.keys(isActive).find(key => isActive[key] === true)
    const nextPage = {
      characters: pageChar.next,
      episodes: pageEpisode.next,
      locations: pageLocation.next,
    }
    setUrl({ ...url, [target]: nextPage[target] })
  }

  function handlePrevPageClick() {
    const target = Object.keys(isActive).find(key => isActive[key] === true)
    const prevPage = {
      characters: pageChar.prev,
      episodes: pageEpisode.prev,
      locations: pageLocation.prev,
    }
    setUrl({ ...url, [target]: prevPage[target] })
  }
}

export default App
