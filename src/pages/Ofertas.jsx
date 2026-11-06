import { Link } from 'react-router-dom'
import { offers } from '../data/offers'
import { vigente, wa } from '../lib'

export default function Ofertas() {
  const lista = offers.filter((o) => vigente('', o.hasta))
  return (
    <>
      <section className="page-head">
        <h1>Encontrá la Triumph que querés</h1>
        <p>al precio que necesitás, con nuestras ofertas mensuales</p>
      </section>
      <section className="sec">
        <h2 className="center">Listado de motos en oferta</h2>
        {lista.length === 0 && <p className="center muted">Por el momento no hay ofertas vigentes. ¡Consultanos!</p>}
        <div className="grid">
          {lista.map((o) => (
            <article key={o.id} className="card offer">
              <div className="card-img"><span className="tag">{o.etiqueta}</span><img src={o.imagen} alt={o.modelo} loading="lazy" /></div>
              <h3>{o.modelo}</h3>
              <p className="price">{o.precio}</p>
              {o.hasta && <small className="muted">Válido hasta el {o.hasta.split('-').reverse().join('/')}</small>}
              <div className="row">
                <Link to={'/moto/' + o.slug} className="btn sm">Ver más</Link>
                <a href={wa(`Hola! Me interesa la oferta de la ${o.modelo}`)} target="_blank" rel="noreferrer" className="btn sm ghost-d">Consultar</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
