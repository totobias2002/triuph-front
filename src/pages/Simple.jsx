import ContactForm from '../components/ContactForm'
import { wa } from '../lib'

const contenido = {
  service: { t: 'Service oficial', p: 'Mantené tu Triumph en perfecto estado con nuestro servicio técnico oficial, repuestos originales y mecánicos capacitados por la marca.', msg: 'Hola! Quiero sacar un turno de service' },
  accesorios: { t: 'Personalizá tu Triumph', p: 'Personalizá la Triumph de tus sueños con nuestra amplia gama de accesorios originales.', msg: 'Hola! Quiero consultar por accesorios' },
  indumentaria: { t: 'Indumentaria', p: 'Sea cual sea tu destino y las condiciones meteorológicas, las prendas que elijas son tan importantes como tu moto. Chaquetas, pantalones, guantes y calzado.', msg: 'Hola! Quiero consultar por indumentaria' },
}

export default function Simple({ tipo }) {
  const c = contenido[tipo]
  return (
    <>
      <section className="page-head"><h1>{c.t}</h1><p>{c.p}</p></section>
      <section className="sec center">
        <a className="btn" href={wa(c.msg)} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
      </section>
      <section className="sec"><div className="narrow"><h2>O dejanos tu consulta</h2><ContactForm /></div></section>
    </>
  )
}
