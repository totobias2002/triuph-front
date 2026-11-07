import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { banners } from '../data/banners'
import { vigente } from '../lib'

export default function Carousel() {
  const slides = banners.filter((b) => vigente('', b.hasta))
  const [i, setI] = useState(0)
  const [pausa, setPausa] = useState(false)
  const x0 = useRef(null)
  const root = useRef(null)
  const n = slides.length
  const ir = (k) => setI((k + n) % n)
  useEffect(() => {
    if (pausa || n < 2) return
    const t = setInterval(() => setI((c) => (c + 1) % n), 6000)
    return () => clearInterval(t)
  }, [pausa, n])
  // Ajusta cada imagen a la seccion: si la proporcion es parecida la estira para llenar (imagen completa,
  // sin franjas); si es muy distinta la muestra entera con negro alrededor (nunca se corta ni se deforma de mas).
  const ajustar = () => {
    const h = root.current
    if (!h) return
    const ar = h.clientWidth / h.clientHeight
    h.querySelectorAll('img.cover').forEach((im) => {
      if (!im.naturalWidth) return
      const r = ar / (im.naturalWidth / im.naturalHeight)
      im.style.objectFit = r > 0.76 && r < 1.32 ? 'fill' : 'contain'
    })
  }
  useEffect(() => {
    ajustar()
    window.addEventListener('resize', ajustar)
    return () => window.removeEventListener('resize', ajustar)
  })
  if (!n) return null
  const onEnd = (e) => {
    if (x0.current == null) return
    const dx = e.changedTouches[0].clientX - x0.current
    if (Math.abs(dx) > 50) ir(i + (dx < 0 ? 1 : -1))
    x0.current = null
  }
  return (
    <section className="hero" ref={root} onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}
      onTouchStart={(e) => { x0.current = e.touches[0].clientX }} onTouchEnd={onEnd}>
      {slides.map((s, k) => {
        if (s.texto) {
          // Slide de foto limpia + texto escrito en codigo (editable en src/data/banners.js)
          const t = s.texto
          return (
            <div key={s.img} className={k === i ? 'slide on tx' : 'slide tx'} aria-hidden={k !== i}>
              <img src={s.img} alt={s.alt || t.titulo || ''} />
              <div className="tx-in">
                {t.etiqueta && <span className="tx-e">{t.etiqueta}</span>}
                <h2>{t.titulo}</h2>
                {t.sub && <p>{t.sub}</p>}
                {t.boton && <Link to={t.link || '/ofertas'} className="btn red" tabIndex={k === i ? 0 : -1}>{t.boton}</Link>}
              </div>
            </div>
          )
        }
        const img = (
          <picture>
            {s.imgMovil && <source media="(max-width: 768px)" srcSet={s.imgMovil} />}
            <img src={s.img} alt={s.alt || s.titulo || ''} className={s.ajuste === 'cover' ? 'cover' : ''} onLoad={ajustar} />
          </picture>
        )
        return (
          <div key={s.img} className={(k === i ? 'slide on' : 'slide') + (s.imgMovil ? ' has-m' : '')} aria-hidden={k !== i}>
            {s.ajuste === 'cover' && <div className="bgb" style={{ backgroundImage: `url(${s.img})`, '--bm': `url(${s.imgMovil || s.img})` }} />}
            {s.link && !s.titulo ? <Link to={s.link} tabIndex={k === i ? 0 : -1}>{img}</Link> : img}
            {s.titulo && <Link to={s.link || '/'} className="hero-t" tabIndex={k === i ? 0 : -1}>{s.titulo}</Link>}
          </div>
        )
      })}
      {n > 1 && <>
        <button className="car-a prev" aria-label="Anterior" onClick={() => ir(i - 1)}>‹</button>
        <button className="car-a next" aria-label="Siguiente" onClick={() => ir(i + 1)}>›</button>
      </>}
    </section>
  )
}
