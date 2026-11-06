import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'

const CATALOGO = '/docs/catalogo-indumentaria.pdf'
const fotos = (a, b) => [1, 2, 3, 4, 5, 6].slice(a, b).map((n) => `/img/indumentaria-${n}.jpg`)

const Galeria = ({ lista }) => (
  <div className="igal">{lista.map((s) => <img key={s} src={s} alt="Indumentaria oficial Triumph" loading="lazy" />)}</div>
)

export default function Indumentaria() {
  return (
    <>
      <PageHero img="/img/hero-indumentaria.avif" titulo="Indumentaria" sub="Nuestra colección de indumentaria está diseñada por motoristas para motoristas" boton={{ texto: 'Ver más', href: CATALOGO }} />
      <section className="ind">
        <Galeria lista={fotos(0, 3)} />
        <div className="ind-t">
          <h2>Indumentaria oficial</h2>
          <p>Nuestra colección para moto está diseñada por motoristas para motoristas. ¿Por qué? Porque sabemos mejor que nadie lo importante que es contar con la equipación adecuada. Hemos dedicado años a diseñar nuestra colección con homologación CE, perfeccionando el delicado equilibrio entre estilo auténtico, diseño innovador y tecnología punta. El resultado es una colección hecha para montar en moto.</p>
          <a className="btn red" href={CATALOGO} target="_blank" rel="noreferrer">Catálogo</a>
        </div>
        <Galeria lista={fotos(3, 6)} />
        <div className="ind-t">
          <p>Nos hemos ganado la reputación de crear clásicos y nuestra colección de ropa casual no iba a ser menos. Diseñada totalmente por nosotros, la colección incluye prendas modernas fabricadas con maestría y cariño. Encontrarás chaquetas y sudaderas, además de camisetas y polos estampados que aportan ese estilo que te hace destacar entre la multitud.</p>
          <a className="btn red" href={CATALOGO} target="_blank" rel="noreferrer">Catálogo</a>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
