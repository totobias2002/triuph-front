import { Link } from 'react-router-dom'
import { offers } from '../data/offers'
import { models } from '../data/models'
import { vigente, wa, modelPath } from '../lib'
import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'

export default function Ofertas() {
  const lista = offers.filter((o) => vigente('', o.hasta))
  return (
    <>
      <PageHero img="/img/hero-ofertas.jpg" titulo="Encontrá la Triumph que querés" sub="al precio que necesitas, con nuestras ofertas mensuales" />
      <section className="ofertas-sec">
        <h2>Listado de motos en oferta</h2>
        {lista.length === 0 && <p className="center muted">Por el momento no hay ofertas vigentes. ¡Consultanos!</p>}
        <div className="ofertas-g">
          {lista.map((o) => {
            const m = models.find((x) => x.slug === o.slug)
            return (
              <article key={o.id} className="ocard">
                <div className="ocard-img"><img src={o.imagen} alt={o.modelo} loading="lazy" /></div>
                <span className="ocard-tag">{o.etiqueta}</span>
                <h3>{o.modelo}</h3>
                <p className="ocard-price">{o.precio}</p>
                {o.hasta && <small className="muted">Válido hasta el {o.hasta.split('-').reverse().join('/')}</small>}
                <div className="row c">
                  <Link to={m ? modelPath(m) : '/'} className="btn red sm">Ver más</Link>
                  <a href={wa(`Hola! Me interesa la oferta de la ${o.modelo}`)} target="_blank" rel="noreferrer" className="btn sm ghost-d">Consultar</a>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <ContactSection />
    </>
  )
}
