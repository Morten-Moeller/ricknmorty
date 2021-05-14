import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [url, setUrl] = useState({
    char: 'https://rickandmortyapi.com/api/character',
    episode: 'https://rickandmortyapi.com/api/episode',
    location: 'https://rickandmortyapi.com/api/location',
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
    [url]
  )

  const [location, setLocation] = useState([])

  useEffect(
    () =>
      fetch(url.location)
        .then(res => res.json())
        .then(data =>
          setLocation(() => setLocation([...location, ...data.results]))
        ),
    [url]
  )

  return (
    <div className="App">
      <Header />
      <Navigation />
      {chars.map(el => Card(el))}
    </div>
  )
}

export default App
