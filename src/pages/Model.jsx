import { useParams, Link } from 'react-router-dom'
import { models } from '../data/models'
import { offers, mostrarPrecios } from '../data/offers'
import { vigente, fotoModelo } from '../lib'
import Counter from '../components/Counter'
import ContactSection from '../components/ContactSection'
import FichaCompleta from '../components/FichaCompleta'
import { fichas } from '../data/fichas'

// Titulos de la tabla de especificaciones: lineas cortas, sin coma/punto ni numeros grandes
const esTitulo = (l) => l.length < 32 && !/\d{2,}/.test(l) && !/[,.]/.test(l)

function agruparSpecs(lines) {
  const grupos = []
  lines.forEach((l, i) => {
    if (esTitulo(l) && (i === 0 || grupos.length === 0 || grupos[grupos.length - 1].vals.length > 0)) grupos.push({ t: l, vals: [] })
    else if (grupos.length) grupos[grupos.length - 1].vals.push(l)
  })
  return grupos.filter((g) => g.vals.length)
}

// Corta los bloques del sitio original en: hero, "en cifras", secciones de contenido
function armar(m) {
  const b = m.blocks || []
  const botones = b.filter((x) => x.t === 'b').map((x) => x.v)
  const iCif = b.findIndex((x) => x.t === 'h' && /cifras/i.test(x.v))
  const hero = b.slice(0, iCif >= 0 ? iCif : 2).filter((x) => x.t === 'h').map((x) => x.v)
  const stats = b.filter((x) => x.t === 'stat')
  const iFinStats = b.reduce((a, x, i) => (x.t === 'stat' ? i : a), iCif)
  const resto = b.slice(iFinStats + 1).filter((x) => x.t !== 'b')
  // secciones = (titulo?, parrafos)
  const secs = []
  resto.forEach((x) => {
    if (x.t === 'h') secs.push({ h: x.v, p: [] })
    else {
      if (!secs.length) secs.push({ h: '', p: [] })
      secs[secs.length - 1].p.push(...x.v)
    }
  })
  return { botones, tit: iCif >= 0 ? b[iCif].v : '', hero, stats, secs: secs.filter((s) => s.h || s.p.length) }
}

export default function Model() {
  const { slug } = useParams()
  const m = models.find((x) => x.slug === slug)
  if (!m) return <section className="phero"><div className="phero-in"><h1>Modelo no encontrado</h1><Link to="/" className="btn red">Volver</Link></div></section>
  const d = armar(m)
  const oferta = offers.find((o) => o.slug === m.slug && vigente('', o.hasta))
  const specs = agruparSpecs(m.specs || [])
  const bg = fotoModelo(m)
  const png = m.images.find((s) => s.endsWith('.png'))
  const galeria = m.images.filter((s) => s !== bg).slice(0, 4)
  // En el sitio original el primer titulo es la etiqueta ("Lanzamiento") o el nombre; el segundo, el titulo o la frase
  const esTag = /^lanzamiento$/i.test(d.hero[0] || '')
  const eyebrow = esTag ? d.hero[0] : ''
  const titulo = esTag ? d.hero[1] : d.hero[0] || m.name
  const frase = esTag ? '' : d.hero[1] || ''
  const ficha = fichas[m.slug]
  return (
    <>
      {ficha && <FichaCompleta m={m} f={ficha} hero={d.hero} botones={d.botones} titCifras={d.tit} stats={d.stats} secs={d.secs} />}
      {!ficha && <section className="mhero" style={{ backgroundImage: `url(${bg})` }}>
        <div className="mhero-in">
          {eyebrow && <span className="mhero-tag">{eyebrow}</span>}
          <h1>{titulo}</h1>
          {frase && <p className="mhero-sub">{frase}</p>}
          {oferta && mostrarPrecios && <p className="mhero-price">Oferta: {oferta.precio}</p>}
          <div className="row">
            <a href="#contacto" className="btn red">{d.botones[0] || 'Test Ride'}</a>
            <a href="#contacto" className="btn ghost">{d.botones[1] || 'Pedir presupuesto'}</a>
          </div>
        </div>
        {png && png !== bg && <img className="mhero-moto" src={png} alt={m.name} />}
      </section>}

      {!ficha && d.stats.length > 0 && (
        <section className="cifras">
          <h2>{d.tit || `${m.name} en cifras`}</h2>
          <div className="cifras-g">
            {d.stats.map((s, i) => (
              <div key={i} className="cifra">
                <b><Counter n={s.n} pre={s.pre} suf={s.suf} /></b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {!ficha && d.secs.map((s, i) => (
        <section key={i} className={'msec ' + (i % 2 ? 'rev' : '')}>
          {galeria[i] && <div className="msec-img"><img src={galeria[i]} alt={m.name} loading="lazy" /></div>}
          <div className="msec-t">
            {s.h && <h2>{s.h}</h2>}
            {s.p.map((p, k) => <p key={k}>{p}</p>)}
          </div>
        </section>
      ))}

      {ficha && (m.specs || []).length > 0 && (
        <section className="fh-specs">
          <h2>Características técnicas</h2>
          <table>
            <tbody>
              {Array.from({ length: Math.ceil(m.specs.length / 2) }, (_, i) => (
                <tr key={i}><th>{m.specs[i * 2]}</th><td>{m.specs[i * 2 + 1]}</td></tr>
              ))}
            </tbody>
          </table>
          {m.pdf && <a className="btn red" href={m.pdf} target="_blank" rel="noreferrer">{d.botones[2] || 'Descargar ficha técnica'}</a>}
        </section>
      )}

      {!ficha && specs.length > 0 && (
        <section className="specs-sec">
          <h2>Características técnicas</h2>
          <div className="specs-g">
            {specs.map((g) => (
              <div key={g.t} className="spec">
                <h3>{g.t}</h3>
                {g.vals.map((v, i) => <p key={i}>{v}</p>)}
              </div>
            ))}
          </div>
          {m.pdf && <a className="btn red" href={m.pdf} target="_blank" rel="noreferrer">{d.botones[2] || 'Descargar ficha técnica'}</a>}
        </section>
      )}

      <ContactSection modelo={m.name} />
    </>
  )
}
