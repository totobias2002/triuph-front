import { models } from '../data/models'
import { categorias } from '../data/categorias'
import BikeCard from '../components/BikeCard'
import ContactSection from '../components/ContactSection'

export default function Category({ cat }) {
  const c = categorias[cat]
  const lista = c.motos.map((slug) => models.find((m) => m.slug === slug)).filter(Boolean)
  return (
    <>
      <section className="cat-full" style={{ '--bg': `url(${c.hero})` }}>
        <h1>{c.titulo}</h1>
        <div className="cat-cards">
          {lista.map((m) => <BikeCard key={m.slug} m={m} foto={c.fotos?.[m.slug]} />)}
        </div>
      </section>
      <ContactSection />
    </>
  )
}
