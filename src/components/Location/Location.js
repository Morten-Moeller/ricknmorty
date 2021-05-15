import './Location.css'

export default function Location({ name, id, type }) {
  return (
    <section key={id} className="Location">
      <h2 className="Location__heading">{name}</h2>
      <p>{type}</p>
    </section>
  )
}
