import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import ContactForm from '../components/ContactForm'

const estilos = [
  ['Classics', '/classics', '/img/home-classics.png'],
  ['Roadsters', '/roadsters', '/img/home-roadsters.png'],
  ['Adventure', '/adventure', '/img/home-adventure.png'],
]

export default function Home() {
  return (
    <>
      <Carousel />

      <section className="sec center estilos-sec">
        <h1>Bienvenido a Triumph</h1>
        <h2 className="sub">Elegí tu estilo</h2>
        <div className="estilos">
          {estilos.map(([n, to, img]) => (
            <Link key={n} to={to} className="estilo"><img src={img} alt={n} /><span>{n}</span></Link>
          ))}
        </div>
      </section>

      <section className="split">
        <div className="split-t dark" style={{ backgroundImage: 'url(/img/indumentaria.jpg)' }}>
          <div className="split-c">
            <h2>Indumentaria</h2>
            <p>Sea cual sea tu destino y las condiciones meteorológicas, las prendas que elijas son un aspecto tan importante como tu moto.</p>
            <p>Conoce nuestro amplio catálogo de chaquetas, pantalones, guantes y calzado.</p>
            <Link to="/indumentaria" className="btn">Ver más</Link>
          </div>
        </div>
        <div className="split-t light" style={{ backgroundImage: 'url(/img/accesorios-custom.jpg)' }}>
          <div className="split-c">
            <h2>Personalizá tu Triumph</h2>
            <p>Personalizá la Triumph de tus sueños con nuestra amplia gama de accesorios originales y comienza tu ruta junto a nosotros, sea cual sea tu destino.</p>
            <Link to="/accesorios" className="btn">Catálogo de accesorios</Link>
          </div>
        </div>
      </section>

      <section className="contacto" id="contacto">
        <div className="narrow">
          <h2>Enviános tu consulta</h2>
          <p className="muted">Despejaremos tu duda a la brevedad.</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
