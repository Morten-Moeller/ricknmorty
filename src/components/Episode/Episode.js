import './Episode.css'
import rmTop from '../../images/rm_top.png'
import rmBottom from '../../images/rm_bottom.png'
import { useEffect, useState } from 'react'

export default function Episode({ props, characterPages }) {
  const [thisCharacters, setThisCharacters] = useState([])

  useEffect(() => {
    handleCharacters()
  }, [])

  const { name, episode, air_date, characters } = props

  return (
    <section className="Episode">
      <img src={rmBottom} alt="" />
      <h2 className="Episode__heading">
        {name} <small>({episode})</small>
      </h2>
      <p>
        This Episode was firs seen on {air_date}. In this Episode you find the
        following characters:
      </p>
      <ul className="Episode__list">
        {thisCharacters?.map(char => (
          <li>{char.name}</li>
        ))}
      </ul>

      <img src={rmTop} alt="" />
    </section>
  )

  function handleCharacters() {
    const residentsIds = characters.map(url => {
      const re = /\d+/g
      return url.match(re)
    })
    const allCharacters = characterPages?.map(char => char.results).flat()
    console.log(allCharacters[0].id)
    console.log(
      residentsIds
        .map(idResidents =>
          allCharacters.filter(obj => obj.id === Number(idResidents))
        )
        .flat()
    )

    setThisCharacters(
      residentsIds
        .map(idResidents =>
          allCharacters.filter(obj => obj.id === Number(idResidents))
        )
        .flat()
    )
  }
}
