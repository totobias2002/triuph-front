import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { banners } from '../data/banners'
import { vigente } from '../lib'

export default function Carousel() {
  const slides = banners.filter((b) => vigente('', b.hasta))
  const [i, setI] = useState(0)
  const [pausa, setPausa] = useState(false)
  const x0 = useRef(null)
  const n = slides.length
  const ir = (k) => setI((k + n) % n)
  useEffect(() => {
    if (pausa || n < 2) return
    const t = setInterval(() => setI((c) => (c + 1) % n), 6000)
    return () => clearInterval(t)
  }, [pausa, n])
  if (!n) return null
  const onEnd = (e) => {
    if (x0.current == null) return
    const dx = e.changedTouches[0].clientX - x0.current
    if (Math.abs(dx) > 50) ir(i + (dx < 0 ? 1 : -1))
    x0.current = null
  }
  return (
    <section className="hero" onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}
      onTouchStart={(e) => { x0.current = e.touches[0].clientX }} onTouchEnd={onEnd}>
      {slides.map((s, k) => {
        const img = (
          <picture>
            {s.imgMovil && <source media="(max-width: 768px)" srcSet={s.imgMovil} />}
            <img src={s.img} alt={s.alt || s.titulo || ''} className={s.ajuste === 'cover' ? 'cover' : ''} />
          </picture>
        )
        return (
          <div key={s.img} className={(k === i ? 'slide on' : 'slide') + (s.imgMovil ? ' has-m' : '')} aria-hidden={k !== i}>
            {s.ajuste === 'cover' && <div className="bgb" style={{ backgroundImage: `url(${s.img})` }} />}
            {s.link && !s.titulo ? <Link to={s.link} tabIndex={k === i ? 0 : -1}>{img}</Link> : img}
            {s.titulo && <Link to={s.link || '/'} className="hero-t" tabIndex={k === i ? 0 : -1}>{s.titulo}</Link>}
          </div>
        )
      })}
      {n > 1 && <>
        <button className="car-a prev" aria-label="Anterior" onClick={() => ir(i - 1)}>‹</button>
        <button className="car-a next" aria-label="Siguiente" onClick={() => ir(i + 1)}>›</button>
        <div className="dots">{slides.map((s, k) => <button key={s.img} className={k === i ? 'on' : ''} aria-label={'Slide ' + (k + 1)} onClick={() => setI(k)} />)}</div>
      </>}
    </section>
  )
}
