import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { models } from '../data/models'
import { modelPath } from '../lib'
import { mostrarOfertas } from '../data/dealer'

// Menu "Motos": 3 secciones (las mismas categorias del sitio) y dentro cada familia con sus modelos
const secciones = [
  { cat: 'Classics', to: '/classics', grupos: [
    ['Bonneville', ['bonneville-t100', 'bonneville-t120', 'bonneville-bobber']],
    ['Scrambler', ['scrambler-1200-x', 'scrambler-400-x', 'scrambler-400-x-copy']],
  ] },
  { cat: 'Roadsters', to: '/roadsters', grupos: [
    ['400 cc', ['tracker-400', 'thruxton-400', 'speed-400']],
    ['Speed', ['speed-twin-900', 'speed-triple-1200-rr']],
    ['Street Triple', ['street-triple-765-rs']],
    ['Trident', ['trident-660']],
  ] },
  { cat: 'Adventure', to: '/adventure', grupos: [
    ['Tiger 900', ['tiger-900', 'tiger-900-gt-pro', 'tiger-900-alpine-edition', 'tiger-900-desert-edition']],
    ['Tiger 1200', ['tiger-1200-rally-pro', 'tiger-1200-gt-pro', 'tiger-1200-rally-explorer', 'tiger-1200-alpine-edition', 'tiger-1200-desert-edition']],
    ['Tiger Sport', ['tiger-sport-660', 'tiger-sport-800']],
  ] },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  // Donde estoy parado: resalta la seccion (Motos / Postventa) y la moto o categoria actual
  const { pathname } = useLocation()
  const enMotos = secciones.some((s) => pathname === s.to || pathname.startsWith(s.to + '/'))
  const enPost = ['/service', '/accesorios-triumph', '/indumentaria'].some((r) => pathname.startsWith(r))
  const cur = (to) => (pathname === to ? 'aqui' : undefined)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <div className="nav-in">
        <Link to="/" className="logo" onClick={close}><img src="/img/logo.svg" alt="Triumph" /></Link>
        <button className="burger" aria-label="Menú" onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <nav className={open ? 'menu open' : 'menu'}>
          {mostrarOfertas && <NavLink to="/ofertas" className={({ isActive }) => (isActive ? 'hl active oferta-nav' : 'hl oferta-nav')} onClick={close}>Ofertas</NavLink>}
          <div className="dd dd-wide">
            <span className={enMotos ? 'dd-t aqui' : 'dd-t'}>Motos</span>
            <div className="dd-m mega">
              {secciones.map((sec) => (
                <section key={sec.cat} className="dd-sec">
                  <Link to={sec.to} className={pathname === sec.to || pathname.startsWith(sec.to + '/') ? 'dd-cat aqui' : 'dd-cat'} onClick={close}>{sec.cat}<span aria-hidden="true">Ver todas →</span></Link>
                  <div className="dd-groups">
                    {sec.grupos.map(([titulo, slugs]) => (
                      <div key={titulo} className="dd-col">
                        <span className="dd-h">{titulo}</span>
                        {slugs.map((sl) => models.find((m) => m.slug === sl)).filter(Boolean).map((m) => (
                          <Link key={m.slug} to={modelPath(m)} className={cur(modelPath(m))} onClick={close}>{m.name}</Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
          <div className="dd">
            <span className={enPost ? 'dd-t aqui' : 'dd-t'}>Postventa</span>
            <div className="dd-m small">
              <div className="dd-col">
                <Link to="/service" className={cur('/service')} onClick={close}>Service</Link>
                <Link to="/accesorios-triumph" className={cur('/accesorios-triumph')} onClick={close}>Accesorios</Link>
                <Link to="/indumentaria" className={cur('/indumentaria')} onClick={close}>Indumentaria</Link>
              </div>
            </div>
          </div>
          {/* "Contacto" y "Agendá tu Test Ride" SACADOS del menu (pedido 2026-11-13): llevaban al formulario, que esta oculto */}
        </nav>
      </div>
    </header>
  )
}
