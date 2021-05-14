import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'

function App() {
  const urlChar = 'https://rickandmortyapi.com/api/character'
  const [chars, setChars] = useState([])

  useEffect(
    () =>
      fetch(urlChar)
        .then(res => res.json())
        .then(data => setChars(() => setChars(data.results))),
    [urlChar]
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
