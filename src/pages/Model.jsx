import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { models } from '../data/models'
import { offers } from '../data/offers'
import { vigente, wa } from '../lib'
import ContactForm from '../components/ContactForm'

// Los titulos de spec son lineas cortas sin punto; el resto, valores.
const esTitulo = (l) => l.length < 32 && !/\d{2,}/.test(l) && !/[,.]/.test(l)

export default function Model() {
  const { slug } = useParams()
  const m = models.find((x) => x.slug === slug)
  const [img, setImg] = useState(0)
  if (!m) return <section className="page-head"><h1>Modelo no encontrado</h1><Link to="/" className="btn">Volver</Link></section>
  const oferta = offers.find((o) => o.slug === m.slug && vigente('', o.hasta))
  return (
    <>
      <section className="model-hero">
        <div className="mh-img"><img src={m.images[img] || m.images[0]} alt={m.name} /></div>
        <div className="mh-t">
          <span className="card-c">{m.cat}</span>
          <h1>{m.name}</h1>
          {oferta && <p className="price">Oferta: {oferta.precio}</p>}
          <p>{m.intro[0]}</p>
          <div className="row">
            <a href="#presupuesto" className="btn">Pedir presupuesto</a>
            <a href="#presupuesto" className="btn ghost-d">Test ride</a>
            <a href={wa(`Hola! Quiero info de la ${m.name}`)} target="_blank" rel="noreferrer" className="btn ghost-d">WhatsApp</a>
          </div>
          {m.images.length > 1 && (
            <div className="thumbs">{m.images.map((s, k) => <button key={s} className={k === img ? 'on' : ''} onClick={() => setImg(k)}><img src={s} alt="" /></button>)}</div>
          )}
        </div>
      </section>

      {m.intro.length > 1 && (
        <section className="sec narrow center">{m.intro.slice(1).map((t) => <p key={t}>{t}</p>)}</section>
      )}

      {m.specs.length > 0 && (
        <section className="sec dark-sec">
          <div className="narrow">
            <h2>Características técnicas</h2>
            <dl className="specs">
              {m.specs.map((l, i, arr) => esTitulo(l, i, arr) ? <dt key={i}>{l}</dt> : <dd key={i}>{l}</dd>)}
            </dl>
            {m.pdf && <a className="btn" href={m.pdf} target="_blank" rel="noreferrer">Descargar ficha técnica</a>}
          </div>
        </section>
      )}

      <section className="sec" id="presupuesto">
        <div className="narrow">
          <h2>Pedí tu presupuesto o test ride</h2>
          <ContactForm modelo={m.name} />
        </div>
      </section>
    </>
  )
}
