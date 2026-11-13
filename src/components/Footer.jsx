import { Link } from 'react-router-dom'
import { dealer, mostrarContacto } from '../data/dealer'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <>
      {/* Boton flotante de WhatsApp: SACADO de todo el sitio (pedido 2026-11-13). Para volver a ponerlo, restaurar el <a className="wapp"> con wa() de '../lib' */}
      <footer className="foot">
        <div className="foot-in">
          <div className="foot-brand">
            <img src="/img/logo.svg" alt="Triumph" className="foot-logo" />
          </div>
          <div>
            <h4>Motocicletas</h4>
            <Link to="/classics">Classics</Link><Link to="/roadsters">Roadsters</Link><Link to="/adventure">Adventure</Link>
          </div>
          <div>
            <h4>Postventa</h4>
            <Link to="/service">Service</Link><Link to="/accesorios-triumph">Accesorios</Link><Link to="/indumentaria">Indumentaria</Link>
          </div>
          <div>
            <h4>{dealer.nombre}</h4>
            {mostrarContacto && <>
              <span className="foot-k">Dirección:</span>
              <span>{dealer.direccion}</span>
              <span className="foot-k">Horarios:</span>
              {dealer.horarios.map((h) => <span key={h}>{h}</span>)}
            </>}
            <a href={dealer.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={dealer.youtube} target="_blank" rel="noreferrer">Youtube</a>
          </div>
        </div>
        <div className="credits">
          <Link to="/politica-de-cookies">Política de Privacidad</Link>
          <span>©{YEAR} {dealer.nombre} · Triumph es una marca registrada de Triumph Motorcycles Ltd. · Tipografía Triumph Brokman © The Northern Block</span>
        </div>
      </footer>
    </>
  )
}
