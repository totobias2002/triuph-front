import { Link } from 'react-router-dom'

export default function BikeCard({ m }) {
  return (
    <Link to={'/moto/' + m.slug} className="card">
      <div className="card-img"><img src={m.images[0]} alt={m.name} loading="lazy" /></div>
      <span className="card-c">{m.cat}</span>
      <h3>{m.name}</h3>
    </Link>
  )
}
