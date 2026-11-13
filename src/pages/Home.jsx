import { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import InstagramSection from '../components/InstagramSection'
import { mostrarInstagram } from '../data/instagram'
import ContactSection from '../components/ContactSection'

// Posicion (en % de la imagen) del faro (fx, fy) y del escape (sx, sy) de cada moto
const estilos = [
  ['Classics', '/classics', '/img/home-classics.png', { fx: 73, fy: 29, sx: 15, sy: 76 }],
  ['Roadsters', '/roadsters', '/img/home-roadsters.png', { fx: 75, fy: 35, sx: 26, sy: 72 }],
  ['Adventure', '/adventure', '/img/home-adventure.png', { fx: 74, fy: 22, sx: 19, sy: 40 }],
]

export default function Home() {
  // Al pasar por el titulo (o tocarlo en celular) las motos "arrancan"
  const [encendido, setEncendido] = useState(false)

  return (
    <>
      <Carousel />

      <section className="sec center estilos-sec">
        <h1
          className="arranque"
          onMouseEnter={() => setEncendido(true)}
          onMouseLeave={() => setEncendido(false)}
          onClick={() => setEncendido((v) => !v)}
        >
          Bienvenido a Triumph
        </h1>
        <h2 className="sub">Elegí tu estilo</h2>
        <div className={`estilos${encendido ? ' encendido' : ''}`}>
          {estilos.map(([n, to, img, p]) => (
            <Link key={n} to={to} className="estilo">
              <div className="moto">
                <img src={img} alt={n} />
                <div className="fx" aria-hidden="true" style={{ '--fx': `${p.fx}%`, '--fy': `${p.fy}%`, '--sx': `${p.sx}%`, '--sy': `${p.sy}%` }}>
                  <i className="faro" />
                  <i className="humo h1" /><i className="humo h2" /><i className="humo h3" /><i className="humo h4" />
                </div>
              </div>
              <span>{n}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="split">
        <div className="split-t dark" style={{ backgroundImage: 'url(/img/indumentaria.jpg)' }}>
          <div className="split-c">
            <h2>Indumentaria</h2>
            <p className="not-m">Sea cual sea tu destino y las condiciones meteorológicas, las prendas que elijas son un aspecto tan importante como tu moto.</p>
            <p className="not-m">Conoce nuestro amplio catálogo de chaquetas, pantalones, guantes y calzado.</p>
            <p className="only-m">Chaquetas, pantalones, guantes y calzado para cada viaje.</p>
            <Link to="/indumentaria" className="btn">Ver más</Link>
          </div>
        </div>
        <div className="split-t light" style={{ backgroundImage: 'url(/img/accesorios-custom.jpg)' }}>
          <div className="split-c">
            <h2>Personalizá tu Triumph</h2>
            <p className="not-m">Personalizá la Triumph de tus sueños con nuestra amplia gama de accesorios originales y comienza tu ruta junto a nosotros, sea cual sea tu destino.</p>
            <p className="only-m">Accesorios originales para armar tu Triumph a tu gusto.</p>
            <Link to="/accesorios-triumph" className="btn">Catálogo de accesorios</Link>
          </div>
        </div>
      </section>

      {mostrarInstagram && <InstagramSection />}

      <ContactSection />
    </>
  )
}
