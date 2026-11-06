import { models } from '../data/models'
import { categorias } from '../data/categorias'
import PageHero from '../components/PageHero'
import BikeCard from '../components/BikeCard'
import ContactSection from '../components/ContactSection'

export default function Category({ cat }) {
  const c = categorias[cat]
  const lista = c.motos.map((slug) => models.find((m) => m.slug === slug)).filter(Boolean)
  return (
    <>
      <PageHero img={c.hero} titulo={c.titulo} />
      <section className="cat-grid">
        {lista.map((m) => <BikeCard key={m.slug} m={m} />)}
      </section>
      <ContactSection />
    </>
  )
}
