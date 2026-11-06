import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'

const CATALOGO = '/docs/catalogo-indumentaria.pdf'

export default function Accesorios() {
  return (
    <>
      <PageHero img="/img/hero-accesorios.jpg" titulo="Diseñá la Triumph de tus sueños" sub="con la línea completa de accesorios originales" boton={{ texto: 'Catálogo de accesorios', href: CATALOGO }} />
      <section className="svc">
        <div className="svc-img"><img src="/img/accesorios-ml.avif" alt="Accesorios originales" loading="lazy" /></div>
        <div className="svc-t">
          <h2>Encontrá el accesorio que buscás</h2>
          <p>Encontrá todos los <b>accesorios originales Triumph</b> en nuestra tienda oficial de Mercado Libre. Equipá tu moto con la calidad y confianza que solo Triumph puede ofrecerte.</p>
          <p>Ingresá y buscá el accesorio que necesitás para tu moto Triumph.</p>
          <a className="btn red" href={CATALOGO} target="_blank" rel="noreferrer">Ingresá acá</a>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
