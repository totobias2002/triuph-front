import ContactSection from '../components/ContactSection'

const CATALOGO = '/docs/catalogo-indumentaria.pdf'

// Igual que Service: una sola foto a pantalla completa, titulo arriba y el texto en una card (con el boton para ingresar)
export default function Accesorios() {
  return (
    <>
      <section className="svc-bg" style={{ backgroundImage: 'url(/img/hero-accesorios.jpg)' }}>
        <div className="svc-wrap">
          <h1>Diseñá la Triumph de tus sueños</h1>
          <p className="svc-sub">con la línea completa de accesorios originales</p>
          <div className="svc-card">
            <span className="svc-k">Accesorios originales</span>
            <h2>Encontrá el accesorio que buscás</h2>
            <p>Encontrá todos los <b>accesorios originales Triumph</b> en nuestra tienda oficial de Mercado Libre. Equipá tu moto con la calidad y confianza que solo Triumph puede ofrecerte.</p>
            <p>Ingresá y buscá el accesorio que necesitás para tu moto Triumph.</p>
            <a className="btn red" href={CATALOGO} target="_blank" rel="noreferrer">Ingresá acá</a>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
