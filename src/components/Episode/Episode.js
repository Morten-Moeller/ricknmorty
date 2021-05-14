import './Episode.css'

export default function Episode({ id, name }) {
  return (
    <section key={id} className="Episode">
      <h2 className="Episode__heading">{name}</h2>
    </section>
  )
}
