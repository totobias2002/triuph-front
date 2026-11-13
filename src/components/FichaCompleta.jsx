import { useRef, useState, useEffect } from 'react'
import { wa } from '../lib'
import { mostrarContacto } from '../data/dealer'
import Counter from './Counter'

// Moto que "arranca": con el mouse encima vibra, prende el faro y larga humo; en celular, al tocarla (dura unos segundos).
// e = { ar: ancho/alto de la foto, fx/fy: faro, sx/sy: escape (en % de la foto), dir: -1 si mira a la izquierda, fit: true = la caja toma la proporcion de la foto (para fotos con fondo propio) }
function Arranque({ src, alt, e }) {
  const [on, setOn] = useState(false)
  const timer = useRef(0)
  useEffect(() => () => clearTimeout(timer.current), [])
  const prender = (ev) => { if (ev.pointerType === 'mouse') setOn(true) }
  const apagar = (ev) => { if (ev.pointerType === 'mouse') setOn(false) }
  const tocar = (ev) => {
    if (ev.pointerType === 'mouse') return
    setOn(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setOn(false), 3000)
  }
  return (
    <div className={`moto fh-moto arranque${on ? ' encendido' : ''}`} style={e.fit ? { aspectRatio: e.ar } : undefined} onPointerEnter={prender} onPointerLeave={apagar} onPointerDown={tocar}>
      <img src={src} alt={alt} loading="lazy" />
      <div className="fx" aria-hidden="true" style={{ '--ar': e.ar, '--fx': `${e.fx}%`, '--fy': `${e.fy}%`, '--sx': `${e.sx}%`, '--sy': `${e.sy}%`, '--dir': e.dir || 1 }}>
        <i className="faro" />
        <i className="humo h1" /><i className="humo h2" /><i className="humo h3" /><i className="humo h4" />
      </div>
    </div>
  )
}

// Parte de arriba de la ficha, igual al sitio original: hero con foto + barra, cifras + tira de fotos,
// dos secciones con imagen, foto ancha, y video "aspectos clave".
export default function FichaCompleta({ m, f, hero, botones, titCifras, stats, secs }) {
  const tira = useRef(null)
  const [play, setPlay] = useState(false)
  const sinTira = !(f.tira && f.tira.length > 0)
  // Carrusel infinito que avanza de a poco y sin parar; frena con el mouse encima o al tocarlo y sigue al soltar.
  // Las fotos se repiten 3 veces y se vuelve al medio sin que se note. Sin flechas: en celular se desliza con el dedo.
  const n = sinTira ? 0 : f.tira.length
  const pausa = useRef(false)
  useEffect(() => {
    const t = tira.current
    if (!t || n < 2) return undefined
    const reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ancho = () => (t.children[0] ? t.children[0].offsetWidth : 0)
    let pos = 0
    let ultimo = 0
    let previo = 0
    let raf = 0
    const centrar = () => { const w = ancho(); if (w) { pos = n * w; t.scrollLeft = pos; ultimo = t.scrollLeft } }
    const paso = (ahora) => {
      raf = requestAnimationFrame(paso)
      const w = ancho()
      const dt = Math.min(ahora - previo, 64) / 1000
      previo = ahora
      if (!w) return
      const bloque = n * w
      // si el usuario movio la tira (dedo o rueda), seguir desde donde la dejo
      if (Math.abs(t.scrollLeft - ultimo) > 1.5) pos = t.scrollLeft
      else if (!pausa.current && !document.hidden && !reducido) pos += 45 * dt
      if (pos < bloque * 0.5) pos += bloque
      else if (pos >= bloque * 2) pos -= bloque
      if (Math.abs(pos - t.scrollLeft) >= 0.5 || !pausa.current) t.scrollLeft = pos
      ultimo = t.scrollLeft
    }
    centrar()
    previo = performance.now()
    raf = requestAnimationFrame(paso)
    window.addEventListener('resize', centrar)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', centrar) }
  }, [n])
  // Arrastrar con el mouse (la manito): agarrar la tira y moverla; en celular se desliza con el dedo (nativo)
  const arrastre = useRef(null)
  const arrastrarInicio = (ev) => {
    if (ev.pointerType !== 'mouse' || ev.button !== 0) return
    arrastre.current = { x: ev.clientX, id: ev.pointerId }
    ev.currentTarget.setPointerCapture(ev.pointerId)
    ev.currentTarget.classList.add('arrastrando')
  }
  const arrastrarMover = (ev) => {
    const a = arrastre.current
    if (!a) return
    ev.currentTarget.scrollLeft -= ev.clientX - a.x
    a.x = ev.clientX
  }
  const arrastrarFin = (ev) => {
    if (!arrastre.current) return
    arrastre.current = null
    ev.currentTarget.classList.remove('arrastrando')
  }
  const [s1, s2] = secs
  return (
    <div className={sinTira ? 'fh-compacto' : undefined}>
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

      <div className={sinTira ? 'fh-pantalla fh-cifras-p sin-tira' : 'fh-pantalla fh-cifras-p'}>
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
        {n > 0 && (
          <div className="fh-tira-w" onMouseEnter={() => { pausa.current = true }} onMouseLeave={() => { pausa.current = false }} onPointerDown={() => { pausa.current = true }} onPointerUp={() => { pausa.current = false }}>
            <div className="fh-tira" ref={tira} onPointerDown={arrastrarInicio} onPointerMove={arrastrarMover} onPointerUp={arrastrarFin} onPointerCancel={arrastrarFin}>
              {(n > 1 ? [...f.tira, ...f.tira, ...f.tira] : f.tira).map((src, i) => <img key={i} src={src} alt={`${m.name} ${(i % n) + 1}`} loading="eager" draggable="false" />)}
            </div>
          </div>
        )}
      </div>

      {s1 && (
        <section className="fh-bloque">
          {f.efectoIzq ? <Arranque src={f.izq} alt={m.name} e={f.efectoIzq} /> : <img src={f.izq} alt={m.name} loading="lazy" />}
          <div>
            {s1.h && <h2>{s1.h}</h2>}
            {s1.p.map((p, k) => <p key={k}>{p}</p>)}
          </div>
        </section>
      )}

      <div className="fh-ancha" style={{ backgroundImage: `url(${f.ancha})` }} role="img" aria-label={m.name} />

      {s2 && (
        <section className="fh-bloque rev">
          {f.efecto ? <Arranque src={f.roja} alt={m.name} e={f.efecto} /> : <img src={f.roja} alt={m.name} loading="lazy" />}
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
    </div>
  )
}
