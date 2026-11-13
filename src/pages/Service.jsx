import { wa } from '../lib'
import { mostrarContacto } from '../data/dealer'
import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'

export default function Service() {
  return (
    <>
      <PageHero img="/img/hero-service.avif" titulo="Service y Repuestos" sub="Para mantener tu moto en perfecto estado" boton={{ texto: 'Ver más', href: '#turno' }} />
      <section className="svc" id="turno">
        <div className="svc-img"><img src="/img/taller.jpg" alt="Taller oficial" loading="lazy" /></div>
        <div className="svc-t">
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
      </section>
      <ContactSection />
    </>
  )
}
