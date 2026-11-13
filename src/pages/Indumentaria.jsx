import { useEffect, useRef } from 'react'
import ContactSection from '../components/ContactSection'

const CATALOGO = '/docs/catalogo-indumentaria.pdf'
const FOTOS = [1, 2, 3, 4, 5, 6].map((n) => `/img/indumentaria-${n}.jpg`)

// Arriba el "book" con las fotos de la coleccion y debajo, igual que Service/Accesorios, la foto a pantalla completa + card con UN solo boton
// Book en carrusel infinito: pasa solo y de a poco, se frena con el mouse encima o al tocarlo, y se puede arrastrar con la manito.
// Las fotos se repiten 5 veces (alcanza para pantallas anchas) y se vuelve al medio sin que se note; quedan escalonadas (una arriba, una abajo).
function Book() {
  const ref = useRef(null)
  const pausa = useRef(false)
  const arrastre = useRef(null)
  const n = FOTOS.length
  useEffect(() => {
    const t = ref.current
    if (!t) return undefined
    const reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ancho = () => (t.children[0] ? t.children[0].offsetWidth + parseFloat(getComputedStyle(t).columnGap || 0) : 0)
    let pos = 0
    let ultimo = 0
    let previo = performance.now()
    let raf = 0
    const centrar = () => { const w = ancho(); if (w) { pos = n * w * 1.5; t.scrollLeft = pos; ultimo = t.scrollLeft } }
    const paso = (ahora) => {
      raf = requestAnimationFrame(paso)
      const w = ancho()
      const dt = Math.min(ahora - previo, 64) / 1000
      previo = ahora
      if (!w) return
      const bloque = n * w
      if (Math.abs(t.scrollLeft - ultimo) > 1.5) pos = t.scrollLeft
      else if (!pausa.current && !document.hidden && !reducido) pos += 40 * dt
      if (pos < bloque) pos += bloque
      else if (pos >= bloque * 2) pos -= bloque
      if (Math.abs(pos - t.scrollLeft) >= 0.5 || !pausa.current) t.scrollLeft = pos
      ultimo = t.scrollLeft
    }
    centrar()
    raf = requestAnimationFrame(paso)
    window.addEventListener('resize', centrar)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', centrar) }
  }, [n])
  const inicio = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    arrastre.current = { x: e.clientX }
    e.currentTarget.setPointerCapture(e.pointerId)
    e.currentTarget.classList.add('arrastrando')
  }
  const mover = (e) => {
    const a = arrastre.current
    if (!a) return
    e.currentTarget.scrollLeft -= e.clientX - a.x
    a.x = e.clientX
  }
  const fin = (e) => {
    if (!arrastre.current) return
    arrastre.current = null
    e.currentTarget.classList.remove('arrastrando')
  }
  return (
    <div className="book-g" ref={ref} onMouseEnter={() => { pausa.current = true }} onMouseLeave={() => { pausa.current = false }}
      onPointerDown={(e) => { pausa.current = true; inicio(e) }} onPointerUp={(e) => { pausa.current = false; fin(e) }} onPointerCancel={fin} onPointerMove={mover}>
      {[...FOTOS, ...FOTOS, ...FOTOS, ...FOTOS, ...FOTOS].map((src, i) => (
        <figure key={i} className="book-f"><img src={src} alt="Indumentaria oficial Triumph" loading="eager" draggable="false" /></figure>
      ))}
    </div>
  )
}

export default function Indumentaria() {
  return (
    <>
      <section className="book">
        <Book />
      </section>
      <section className="svc-bg" style={{ backgroundImage: 'url(/img/hero-indumentaria.avif)' }}>
        <div className="svc-wrap">
          <h1>Indumentaria</h1>
          <p className="svc-sub">Nuestra colección de indumentaria está diseñada por motoristas para motoristas</p>
          <div className="svc-card">
            <span className="svc-k">Colección oficial</span>
            <h2>Indumentaria oficial</h2>
            <p>Nuestra colección para moto está diseñada por motoristas para motoristas. ¿Por qué? Porque sabemos mejor que nadie lo importante que es contar con la equipación adecuada. Hemos dedicado años a diseñar nuestra colección con homologación CE, perfeccionando el delicado equilibrio entre estilo auténtico, diseño innovador y tecnología punta. El resultado es una colección hecha para montar en moto.</p>
            <a className="btn red" href={CATALOGO} target="_blank" rel="noreferrer">Ver catálogo</a>
          </div>
        </div>
      </section>
      <section className="book-cierre">
  <p className="book-t">Nos hemos ganado la reputación de crear clásicos y nuestra colección de ropa casual no iba a ser menos. Diseñada totalmente por nosotros, la colección incluye prendas modernas fabricadas con maestría y cariño. Encontrarás chaquetas y sudaderas, además de camisetas y polos estampados que aportan ese estilo que te hace destacar entre la multitud.</p>
      </section>
      <ContactSection />
    </>
  )
}
