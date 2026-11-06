import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { offers } from '../data/offers'
import { vigente } from '../lib'

// Slides del hero: fotos de modelos. Editar a gusto (o reemplazar por banners propios de la agencia).
const heroes = [
  { img: '/img/tiger-900-alpine-edition-3.png', t: 'Tiger 900 Alpine', to: '/moto/tiger-900-alpine-edition' },
  { img: '/img/speed-twin-900-4.png', t: 'Speed Twin 900', to: '/moto/speed-twin-900' },
  { img: '/img/tracker-400-0.png', t: 'Tracker 400', to: '/moto/tracker-400' },
]
const estilos = [
  ['Classics', '/classics', '/img/home-classics.png'],
  ['Roadsters', '/roadsters', '/img/home-roadsters.png'],
  ['Adventure', '/adventure', '/img/home-adventure.png'],
]

export default function Home() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % heroes.length), 6000); return () => clearInterval(t) }, [])
  const hayOfertas = offers.some((o) => vigente('', o.hasta))
  return (
    <>
      <section className="hero">
        {heroes.map((h, k) => <img key={h.img} src={h.img} alt={h.t} className={k === i ? 'on' : ''} />)}
        <Link to={heroes[i].to} className="hero-t">{heroes[i].t}</Link>
        <div className="hero-in">
          <a href="#contacto" className="btn">Agendá un testride</a>
          {hayOfertas && <Link to="/ofertas" className="btn ghost">Conocé nuestras ofertas</Link>}
        </div>
      </section>

      <section className="sec center">
        <h1>Bienvenido a Triumph</h1>
        <h2 className="sub">Elegí tu estilo</h2>
        <div className="estilos">
          {estilos.map(([n, to, img]) => (
            <Link key={n} to={to} className="estilo"><img src={img} alt={n} /><span>{n}</span></Link>
          ))}
        </div>
      </section>

      <section className="split">
        <div className="split-t dark">
          <h2>Indumentaria</h2>
          <p>Sea cual sea tu destino y las condiciones meteorológicas, las prendas que elijas son un aspecto tan importante como tu moto. Conocé nuestro amplio catálogo de chaquetas, pantalones, guantes y calzado.</p>
          <Link to="/indumentaria" className="btn">Ver más</Link>
        </div>
        <div className="split-t light">
          <h2>Personalizá tu Triumph</h2>
          <p>Personalizá la Triumph de tus sueños con nuestra amplia gama de accesorios originales y comenzá tu ruta junto a nosotros, sea cual sea tu destino.</p>
          <Link to="/accesorios" className="btn">Catálogo de accesorios</Link>
        </div>
      </section>

      <section className="sec" id="contacto">
        <div className="narrow">
          <h2>Enviános tu consulta</h2>
          <p className="muted">Despejaremos tu duda a la brevedad.</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
