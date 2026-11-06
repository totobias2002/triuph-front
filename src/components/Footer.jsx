import { Link } from 'react-router-dom'
import { dealer } from '../data/dealer'
import { wa } from '../lib'

export default function Footer() {
  return (
    <>
      <a className="wapp" href={wa('Hola! Quiero hacer una consulta')} target="_blank" rel="noreferrer">Nuestro WhatsApp</a>
      <footer className="foot">
        <div className="foot-in">
          <img src="/img/logo.svg" alt="Triumph" className="foot-logo" />
          <div>
            <h4>Motos</h4>
            <Link to="/classics">Classics</Link><Link to="/roadsters">Roadsters</Link><Link to="/adventure">Adventure</Link><Link to="/ofertas">Ofertas</Link>
          </div>
          <div>
            <h4>Postventa</h4>
            <Link to="/service">Service</Link><Link to="/accesorios">Accesorios</Link><Link to="/indumentaria">Indumentaria</Link>
          </div>
          <div>
            <h4>Contacto</h4>
            <span>{dealer.direccion}</span>
            <a href={'mailto:' + dealer.email}>{dealer.email}</a>
            <a href={dealer.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <p className="credits">© {new Date().getFullYear()} {dealer.nombre}. Triumph es una marca registrada de Triumph Motorcycles Ltd. · Tipografía Triumph Brokman © The Northern Block</p>
      </footer>
    </>
  )
}
