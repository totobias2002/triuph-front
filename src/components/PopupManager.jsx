import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { popups } from '../data/popups'
import { vigente } from '../lib'

const KEY = 'tph-popups-vistos'
const vistos = () => { try { return JSON.parse(sessionStorage.getItem(KEY) || '[]') } catch { return [] } }
const marcar = (id) => { try { sessionStorage.setItem(KEY, JSON.stringify([...vistos(), id])) } catch { /* sin storage */ } }

export default function PopupManager() {
  const [cola, setCola] = useState([])
  useEffect(() => {
    const v = vistos()
    const t = setTimeout(() => setCola(popups.filter((p) => p.activo && vigente(p.desde, p.hasta) && !v.includes(p.id))), 800)
    return () => clearTimeout(t)
  }, [])
  const p = cola[0]
  const cerrar = () => { marcar(p.id); setCola((c) => c.slice(1)) }
  useEffect(() => {
    if (!p) return
    const k = (e) => e.key === 'Escape' && cerrar()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  })
  if (!p) return null
  const esInterno = p.boton?.href?.startsWith('/')
  return (
    <div className="pop-bg" onClick={cerrar} role="dialog" aria-modal="true" aria-label={p.titulo}>
      <div className="pop" onClick={(e) => e.stopPropagation()}>
        <button className="pop-x" onClick={cerrar} aria-label="Cerrar">×</button>
        {p.imagen && <img src={p.imagen} alt={p.titulo} />}
        <div className="pop-b">
          <h3>{p.titulo}</h3>
          {p.texto && <p>{p.texto}</p>}
          {p.boton && (esInterno
            ? <Link className="btn" to={p.boton.href} onClick={cerrar}>{p.boton.texto}</Link>
            : <a className="btn" href={p.boton.href} target="_blank" rel="noreferrer" onClick={cerrar}>{p.boton.texto}</a>)}
        </div>
      </div>
    </div>
  )
}
