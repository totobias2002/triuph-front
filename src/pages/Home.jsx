import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import ContactForm from '../components/ContactForm'
import { offers } from '../data/offers'
import { vigente } from '../lib'

const estilos = [
  ['Classics', '/classics', '/img/home-classics.png'],
  ['Roadsters', '/roadsters', '/img/home-roadsters.png'],
  ['Adventure', '/adventure', '/img/home-adventure.png'],
]

export default function Home() {
  const hayOfertas = offers.some((o) => vigente('', o.hasta))
  return (
    <>
      <Carousel>
        <a href="#contacto" className="btn">Agendá un testride</a>
        {hayOfertas && <Link to="/ofertas" className="btn ghost">Conocé nuestras ofertas</Link>}
      </Carousel>

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
