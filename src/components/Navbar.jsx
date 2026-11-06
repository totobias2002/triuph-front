import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { models } from '../data/models'
import { modelPath } from '../lib'

// Menu "Motos" agrupado por familia, igual que el sitio de referencia
const familias = [
  ['400 cc', ['tracker-400', 'thruxton-400', 'speed-400', 'scrambler-400-x', 'scrambler-400-x-copy']],
  ['Tiger', ['tiger-900', 'tiger-900-gt-pro', 'tiger-900-alpine-edition', 'tiger-900-desert-edition', 'tiger-1200-rally-pro', 'tiger-1200-gt-pro', 'tiger-1200-rally-explorer', 'tiger-1200-alpine-edition', 'tiger-1200-desert-edition']],
  ['Tiger Sport', ['tiger-sport-660', 'tiger-sport-800']],
  ['Street Triple', ['street-triple-765-rs']],
  ['Speed', ['speed-triple-1200-rr', 'speed-twin-900']],
  ['Trident', ['trident-660']],
  ['Scrambler', ['scrambler-1200-x']],
  ['Bonneville', ['bonneville-t100', 'bonneville-t120', 'bonneville-bobber']],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <div className="nav-in">
        <Link to="/" className="logo" onClick={close}><img src="/img/logo.svg" alt="Triumph" /></Link>
        <button className="burger" aria-label="Menú" onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <nav className={open ? 'menu open' : 'menu'}>
          <NavLink to="/ofertas" className={({ isActive }) => (isActive ? 'hl active' : 'hl')} onClick={close}>Ofertas</NavLink>
          <div className="dd">
            <span className="dd-t">Motos</span>
            <div className="dd-m">
              {familias.map(([titulo, slugs]) => (
                <div key={titulo} className="dd-col">
                  <span className="dd-h">{titulo}</span>
                  {slugs.map((sl) => models.find((m) => m.slug === sl)).filter(Boolean).map((m) => (
                    <Link key={m.slug} to={modelPath(m)} onClick={close}>{m.name}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="dd">
            <span className="dd-t">Postventa</span>
            <div className="dd-m small">
              <div className="dd-col">
                <Link to="/service" onClick={close}>Service</Link>
                <Link to="/accesorios-triumph" onClick={close}>Accesorios</Link>
                <Link to="/indumentaria" onClick={close}>Indumentaria</Link>
              </div>
            </div>
          </div>
          <Link to="/#contacto" onClick={close}>Contacto</Link>
          <Link to="/#contacto" className="btn sm" onClick={close}>Agendá tu Test Ride</Link>
        </nav>
      </div>
    </header>
  )
}
