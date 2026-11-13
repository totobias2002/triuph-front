import { wa } from '../lib'
import { mostrarContacto } from '../data/dealer'
import ContactSection from '../components/ContactSection'

export default function Service() {
  return (
    <>
      <section className="svc-bg" id="turno" style={{ backgroundImage: 'url(/img/taller.jpg)' }}>
        <div className="svc-wrap">
          <h1>Service y Repuestos</h1>
          <p className="svc-sub">Para mantener tu moto en perfecto estado</p>
        <div className="svc-card">
          <span className="svc-k">Taller oficial</span>
          <h2>Reservá tu turno</h2>
          <p>Cuidar tu moto es cuidar tu camino. En nuestro concesionario contamos con un taller oficial equipado con la última tecnología, repuestos originales y un equipo de técnicos especializados listos para garantizar el mejor rendimiento de tu moto.</p>
          <ul>
            <li>Mantené vigente tu garantía</li>
            <li>Extendé la vida útil de tu moto</li>
            <li>Seguridad y confianza en cada viaje</li>
          </ul>
          <p>Agendá tu turno y realizá el service oficial en nuestro concesionario. Dale a tu moto la atención que se merece.</p>
          {mostrarContacto && <a className="btn red" href={wa('Hola! Quiero reservar un turno de service')} target="_blank" rel="noreferrer">Reservá tu turno</a>}
        </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
