import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { models } from '../data/models'

const cats = ['Classics', 'Roadsters', 'Adventure']

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
              {cats.map((c) => (
                <div key={c} className="dd-col">
                  <Link to={'/' + c.toLowerCase()} className="dd-h" onClick={close}>{c}</Link>
                  {models.filter((m) => m.cat === c).map((m) => (
                    <Link key={m.slug} to={'/moto/' + m.slug} onClick={close}>{m.name}</Link>
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
                <Link to="/accesorios" onClick={close}>Accesorios</Link>
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
