import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {
  const initialUrlCharacter = 'https://rickandmortyapi.com/api/character'
  const [characterPages, setCharacterPages] = useState([])

  const initialUrlLocation = 'https://rickandmortyapi.com/api/location'
  const [locationPages, setLocationPages] = useState([])

  const initialUrlEpisode = 'https://rickandmortyapi.com/api/episode'
  const [episodePages, setEpisodePages] = useState([])

  useEffect(() => {
    fetchPages(initialUrlCharacter, setCharacterPages, characterPages)
    fetchPages(initialUrlLocation, setLocationPages, locationPages)
    fetchPages(initialUrlEpisode, setEpisodePages, episodePages)
  }, [])

  return (
    <div className="App">
      <Header />
      <section className="App__cardcontainer">
        {characterPages[0]?.results.map(character => (
          <Card key={character.id} props={character} />
        ))}
      </section>
    </div>
  )
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
