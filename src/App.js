import { useEffect, useState } from 'react'
import './App.css'
import { loadFromLocal, saveToLocal } from './utils/fromLocal'
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
    bookmarks: false,
  })

  const [bookmarked, setBookmarked] = useState(loadFromLocal('bookmarks') ?? [])

  useEffect(() => saveToLocal('bookmarks', JSON.stringify(bookmarked)), [
    bookmarked,
  ])

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

  const [locationResidentsUrl, setLocationResidentsUrl] = useState([])
  const [residents, setResidents] = useState([])

  useEffect(() => {
    locationResidentsUrl &&
      Promise.all(
        locationResidentsUrl.map(url => fetch(url).then(res => res.json()))
      ).then(data => setResidents(data))
  }, [locationResidentsUrl])

  return (
    <div className="App">
      <Header />
      <Navigation
        hasBookmarks={bookmarked}
        isActive={isActive}
        handleClick={handleNavClick}
      />
      {!isActive.bookmarks && (
        <Pagination
          props={handlePageCount()}
          handleClickNext={handleNextPageClick}
          handleClickPrev={handlePrevPageClick}
        />
      )}
      {isActive.bookmarks && <p>All in one Page</p>}
      <div className="App__container">
        {isActive.locations && location && renderLocations()}
        {isActive.episodes && episode && renderEpisodes()}
        {isActive.characters && chars && renderChars()}
        {isActive.bookmarks && bookmarked && renderBookmarked()}
      </div>
    </div>
  )

  function renderChars() {
    return chars.map(el => (
      <Card
        key={el.id}
        props={el}
        handleBookmark={handleBookmark}
        bookmarked={bookmarked}
      />
    ))
  }

  function renderBookmarked() {
    console.log(bookmarked)
    return bookmarked.map(el => (
      <Card
        key={el.id}
        props={el}
        handleBookmark={handleBookmark}
        bookmarked={bookmarked}
      />
    ))
  }

  function renderLocations() {
    return location.map(el => {
      return Location(el, handleResidentClick, residents)
    })
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

  function handlePageCount() {
    const activeNav = Object.keys(isActive).find(key => isActive[key] === true)
    const pageCounter = {
      characters: pageChar,
      episodes: pageEpisode,
      locations: pageLocation,
    }
    return pageCounter[activeNav]
  }

  function handleBookmark(event) {
    const id = Number(event.target.name)
    const charsIndex = chars.findIndex(el => id === el.id)
    const isBookmarked = bookmarked.some(el => el.id === id)
    console.log(isBookmarked)
    const newValue = !isBookmarked
    console.log(newValue)
    setChars(chars =>
      setChars(
        chars,
        (chars[charsIndex] = { ...chars[charsIndex], isBookmarked: newValue })
      )
    )
    if (newValue) {
      setBookmarked([...bookmarked, chars[charsIndex]])
    } else {
      const indexToDelete = bookmarked.findIndex(el => id === el.id)
      setBookmarked([
        ...bookmarked.slice(0, indexToDelete),
        ...bookmarked.slice(indexToDelete + 1),
      ])
    }
  }

  function handleResidentClick(element) {
    const id = Number(element.target.name)
    const index = location.findIndex(el => id === el.id)
    setLocationResidentsUrl(location[index].residents)
  }
}

export default App
