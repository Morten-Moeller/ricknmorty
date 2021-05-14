import { useEffect, useState } from 'react'
import './Location.css'

export default function Location({ name, id, type, residents }) {
  //   const [residentsData, setResidentsData] = useState([])

  //   useEffect(
  //     () =>
  //       residents.forEach(({ url }) => {
  //         fetch(url)
  //           .then(res => res.json())
  //           .then(data =>
  //             setResidentsData(residentsData => [...residentsData, data])
  //           )
  //       }),
  //     []
  //   )

  return (
    <section key={id} className="Location">
      <h2 className="Location__heading">{name}</h2>
      <p>{type}</p>
      {/* <ul>{renderResident()}</ul> */}
    </section>
  )

  //   function renderResident() {
  //     return residentsData.map(({ name }) => <li>{name}</li>)
  //   }
}

// useEffect(
//     () =>
//       pokemonsRaw.forEach(({ url }) => {
//         fetch(url)
//           .then(res => res.json())
//           .then(data => {
//             /* Use arrow function below to not get
//              * the value from the closure
//              * (which is the same for all in this forEach)
//              */
//             setPokemons(pokemons => [...pokemons, data])
//           })
//       }),
//     [pokemonsRaw]
//   )
