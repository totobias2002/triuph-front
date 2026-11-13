import ContactForm from './ContactForm'
import { mostrarContacto } from '../data/dealer'

// "Enviános tu consulta" con la foto de fondo, al final de cada pagina
export default function ContactSection({ modelo = '', id = 'contacto' }) {
  if (!mostrarContacto) return null
  return (
    <section className="contacto" id={id}>
      <div className="narrow">
        <h2>Enviános tu consulta</h2>
        <p className="muted">Despejaremos tu duda a la brevedad.</p>
        <ContactForm modelo={modelo} />
      </div>
    </section>
  )
}
