import { models } from '../data/models'
import BikeCard from '../components/BikeCard'

export default function Category({ cat }) {
  return (
    <>
      <section className="page-head"><h1>{cat}</h1></section>
      <section className="sec">
        <div className="grid">{models.filter((m) => m.cat === cat).map((m) => <BikeCard key={m.slug} m={m} />)}</div>
      </section>
    </>
  )
}
