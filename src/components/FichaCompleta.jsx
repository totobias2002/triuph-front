import { useRef, useState } from 'react'
import { wa } from '../lib'
import { mostrarContacto } from '../data/dealer'
import Counter from './Counter'

// Parte de arriba de la ficha, igual al sitio original: hero con foto + barra, cifras + tira de fotos,
// dos secciones con imagen, foto ancha, y video "aspectos clave".
export default function FichaCompleta({ m, f, hero, botones, titCifras, stats, secs }) {
  const tira = useRef(null)
  const [play, setPlay] = useState(false)
  // Al llegar al final vuelve al principio (y al reves con "anterior")
  const mover = (dir) => {
    const t = tira.current
    if (!t) return
    const fin = t.scrollWidth - t.clientWidth - 4
    if (dir > 0 && t.scrollLeft >= fin) t.scrollTo({ left: 0, behavior: 'smooth' })
    else if (dir < 0 && t.scrollLeft <= 4) t.scrollTo({ left: t.scrollWidth, behavior: 'smooth' })
    else t.scrollBy({ left: dir * t.clientWidth / 3, behavior: 'smooth' })
  }
  const [s1, s2] = secs
  return (
    <>
      <div className="fh-pantalla">
        <section className="fh-hero" style={{ '--bg': `url(${f.hero})`, '--bgm': `url(${f.heroMovil || f.hero})`, '--bgc': f.colorMovil || '#222', '--am': f.aspectoMovil || 0.8, '--px': f.posMovil || '50%' }}>
          <div className="fh-hero-in">
            <h1>{hero[0] || m.name}</h1>
            {hero[1] && <p>{hero[1]}</p>}
          </div>
        </section>
        {mostrarContacto && <div className="fh-bar">
          <a href={wa(`Hola! Quiero agendar un test ride de la ${m.name}`)} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M10 8.5l6 3.5-6 3.5z" /></svg>{botones[0] || 'Test Ride'}
          </a>
          <a href={wa(`Hola! Quiero pedir un presupuesto de la ${m.name}`)} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z" /></svg>{botones[1] || 'Pedir presupuesto'}
          </a>
        </div>}
      </div>

      <div className="fh-pantalla fh-cifras-p">
        {stats.length > 0 && (
          <section className="fh-cifras">
            <h2>{titCifras || `${m.name} en cifras`}</h2>
            <div className="fh-cifras-g">
              {stats.map((s, i) => (
                <div key={i}><b><Counter n={s.n} pre={s.pre} suf={s.suf} /></b><span>{s.label}</span></div>
              ))}
            </div>
          </section>
        )}
        <div className="fh-tira-w">
          <div className="fh-tira" ref={tira}>
            {f.tira.map((src, i) => <img key={i} src={src} alt={`${m.name} ${i + 1}`} loading="lazy" />)}
          </div>
          <button className="fh-fl prev" aria-label="Anterior" onClick={() => mover(-1)}>‹</button>
          <button className="fh-fl next" aria-label="Siguiente" onClick={() => mover(1)}>›</button>
        </div>
      </div>

      {s1 && (
        <section className="fh-bloque">
          <img src={f.izq} alt={m.name} loading="lazy" />
          <div>
            {s1.h && <h2>{s1.h}</h2>}
            {s1.p.map((p, k) => <p key={k}>{p}</p>)}
          </div>
        </section>
      )}

      <div className="fh-ancha" style={{ backgroundImage: `url(${f.ancha})` }} role="img" aria-label={m.name} />

      {s2 && (
        <section className="fh-bloque rev">
          <img src={f.roja} alt={m.name} loading="lazy" />
          <div>
            {s2.h && <h2>{s2.h}</h2>}
            {s2.p.map((p, k) => <p key={k}>{p}</p>)}
          </div>
        </section>
      )}

      {f.video && (
        <section className="fh-video">
          {play ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${f.video.id}?autoplay=1&rel=0`}
              title={`${m.name} aspectos clave`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <button className="fh-play" style={{ backgroundImage: `url(${f.video.img})` }} onClick={() => setPlay(true)} aria-label="Reproducir video">
              <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg></span>
            </button>
          )}
        </section>
      )}
    </>
  )
}
