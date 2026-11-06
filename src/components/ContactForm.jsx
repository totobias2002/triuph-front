import { useState } from 'react'
import { models } from '../data/models'
import { dealer } from '../data/dealer'
import { wa } from '../lib'

export default function ContactForm({ modelo = '' }) {
  const [enviado, setEnviado] = useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    if (dealer.formEndpoint) {
      try {
        await fetch(dealer.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
        setEnviado(true); return
      } catch { /* cae a WhatsApp */ }
    }
    window.open(wa(`Hola! Soy ${d.nombre} ${d.apellido}. Producto: ${d.producto || '-'}. Tel: ${d.telefono}. Email: ${d.email}. ${d.localidad || ''} ${d.provincia || ''}. ${d.comentario || ''}`), '_blank')
    setEnviado(true)
  }
  if (enviado) return <p className="ok">¡Gracias! Te contactaremos a la brevedad.</p>
  return (
    <form className="form" onSubmit={onSubmit}>
      <input name="nombre" placeholder="Nombre" required />
      <input name="apellido" placeholder="Apellido" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="telefono" placeholder="Teléfono" required />
      <input name="localidad" placeholder="Localidad" />
      <input name="provincia" placeholder="Provincia" />
      <select name="producto" defaultValue={modelo}>
        <option value="">Elegir modelo de interés</option>
        {models.map((m) => <option key={m.slug}>{m.name}</option>)}
      </select>
      <textarea name="comentario" placeholder="Comentario" rows="3" />
      <button className="btn" type="submit">Enviar mensaje</button>
    </form>
  )
}
