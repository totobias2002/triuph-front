import { useState } from 'react'
import { Link } from 'react-router-dom'
import { offers } from '../data/offers'
import { models } from '../data/models'
import { vigente, wa, modelPath } from '../lib'
import ContactSection from '../components/ContactSection'

export default function Ofertas() {
  // Al pasar el mouse (o tocar) "Consultar", la moto de esa tarjeta arranca: vibra, prende el faro y larga humo
  const [encendida, setEncendida] = useState('')
  const lista = offers.filter((o) => vigente('', o.hasta))
  return (
    <>
      <section className="ofertas-full" style={{ '--bg': 'url(/img/hero-ofertas.jpg)' }}>
        <h1>Encontrá la Triumph que querés</h1>
        <p className="of-sub">al precio que necesitas, con nuestras ofertas mensuales</p>
        <h2>Listado de motos en oferta</h2>
        {lista.length === 0 && <p className="center muted">Por el momento no hay ofertas vigentes. ¡Consultanos!</p>}
        <div className="ofertas-g">
          {lista.map((o) => {
            const m = models.find((x) => x.slug === o.slug)
            const e = o.efecto
            const prender = () => setEncendida(o.id)
            const apagar = () => setEncendida('')
            return (
              <article key={o.id} className={`ocard${encendida === o.id ? ' encendido' : ''}`}>
                <div className="ocard-img">
                  <div className="moto">
                    <img src={o.imagen} alt={o.modelo} loading="lazy" />
                    {e && (
                      <div className="fx" aria-hidden="true" style={{ '--ar': e.ar, '--fx': `${e.fx}%`, '--fy': `${e.fy}%`, '--sx': `${e.sx}%`, '--sy': `${e.sy}%` }}>
                        <i className="faro" />
                        <i className="humo h1" /><i className="humo h2" /><i className="humo h3" /><i className="humo h4" />
                      </div>
                    )}
                  </div>
                </div>
                <span className="ocard-tag">{o.etiqueta}</span>
                <h3>{o.modelo}</h3>
                <p className="ocard-price">{o.precio}</p>
                {o.hasta && <small className="muted">Válido hasta el {o.hasta.split('-').reverse().join('/')}</small>}
                <div className="row c">
                  <Link to={m ? modelPath(m) : '/'} className="btn red sm">Ver más</Link>
                  <a href={wa(`Hola! Me interesa la oferta de la ${o.modelo}`)} target="_blank" rel="noreferrer" className="btn sm ghost-d"
                    onMouseEnter={prender} onMouseLeave={apagar} onFocus={prender} onBlur={apagar} onTouchStart={prender} onTouchEnd={apagar}>Consultar</a>
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
