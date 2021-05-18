import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import loading from './images/loading.png'

function App() {
  const [page, setPage] = useState({
    character: 0,
    location: 0,
    episode: 0,
  })

  const [navigationActive, setNavigationActive] = useState('character')

  const initialUrlCharacter = 'https://rickandmortyapi.com/api/character'
  const [characterPages, setCharacterPages] = useState([])

  const initialUrlLocation = 'https://rickandmortyapi.com/api/location'
  const [locationPages, setLocationPages] = useState([])

  const initialUrlEpisode = 'https://rickandmortyapi.com/api/episode'
  const [episodePages, setEpisodePages] = useState([])

  useEffect(() => {
    fetchCharacterPages(initialUrlCharacter, setCharacterPages)
  }, [])

  useEffect(() => {
    if (characterPages.length && locationPages.length + episodePages.length) {
      fetchPages(initialUrlLocation, setLocationPages, locationPages)
      fetchPages(initialUrlEpisode, setEpisodePages, episodePages)
    }
  }, [characterPages, locationPages, episodePages])

  return (
    <div className="App">
      <Header />
      <Navigation
        navigationActive={navigationActive}
        handleClick={handleNavigationClick}
      />
      <section className="App__cardcontainer">
        {!characterPages[0] && (
          <img className="App__loading" src={loading} alt="Loading..." />
        )}
        {characterPages[page.character]?.results.map(character => (
          <Card key={character.id} props={character} />
        ))}
      </section>
    </div>
  )

  function handleNavigationClick(event) {
    const buttonName = event.target.name

    switch (buttonName) {
      case 'navButtonCharacters':
        setNavigationActive('character')
        break
      case 'navButtonEpisodes':
        setNavigationActive('episode')
        break
      case 'navButtonLocations':
        setNavigationActive('location')
        break
      case 'navButtonFavorits':
        setNavigationActive('favorit')
        break
      default:
        break
    }
  }
}

function fetchCharacterPages(initialUrl, setCharacterPages) {
  fetch(initialUrl)
    .then(res => res.json())
    .then(firstPage => {
      setCharacterPages([firstPage])

      const promises = Array(firstPage.info.pages - 1)
        .fill()
        .map((_, index) =>
          fetch(initialUrl + '?page=' + (index + 2)).then(res => res.json())
        )
      Promise.all(promises).then(otherPages =>
        setCharacterPages(characterPages => [...characterPages, ...otherPages])
      )
    })
    .catch(error => console.log(error))
}

function fetchPages(initialUrl, setState, state) {
  fetch(initialUrl)
    .then(res => res.json())
    .then(firstPage => {
      const promises = Array(firstPage.info.pages)
        .fill()
        .map((_, index) =>
          fetch(initialUrl + '?page=' + (index + 1)).then(res => res.json())
        )
      Promise.all(promises).then(otherPages =>
        setState([...state, ...otherPages])
      )
    })
    .catch(error => console.log(error))
}

export default App
