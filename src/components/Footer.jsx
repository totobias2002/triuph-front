import { Link } from 'react-router-dom'
import { dealer } from '../data/dealer'

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
          {/* Columna "Triumph" con Instagram/Youtube (y direccion/horarios) SACADA del footer, pedido 2026-11-13. Para volverla: datos reales en dealer.js y agregar la columna con dealer.direccion, dealer.horarios, dealer.instagram y dealer.youtube */}
        </div>
        <div className="credits">
          <Link to="/politica-de-cookies">Política de Privacidad</Link>
          <span>©{YEAR} {dealer.nombre} · Triumph es una marca registrada de Triumph Motorcycles Ltd. · Tipografía Triumph Brokman © The Northern Block</span>
        </div>
      </footer>
    </>
  )
}
