import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const urlChar = 'https://rickandmortyapi.com/api/character'
  const [chars, setChars] = useState([])

  useEffect(
    () =>
      fetch(urlChar)
        .then(res => res.json())
        .then(data => setChars(() => setChars([...chars, data]))),
    [urlChar]
  )

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
