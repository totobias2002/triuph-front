import { Link } from 'react-router-dom'
import { modelPath, fotoModelo } from '../lib'

// Tarjeta de moto: foto de fondo oscurecida, nombre centrado y linea roja (como el sitio de referencia)
export default function BikeCard({ m, foto }) {
  return (
    <Link to={modelPath(m)} className="bcard" style={{ backgroundImage: `url(${foto || fotoModelo(m)})` }}>
      <span className="bcard-t">
        <h3>{m.name}</h3>
        <i />
      </span>
    </Link>
  )
}
