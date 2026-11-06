import { privacidad } from '../data/privacidad'
import { dealer } from '../data/dealer'
import PageHero from '../components/PageHero'

const sub = (t) => t.replaceAll('{{NOMBRE}}', dealer.nombre.toUpperCase()).replaceAll('{{Nombre}}', dealer.nombre)
// En el texto original los subtitulos vienen como parrafos cortos sin punto final
const esSub = (t) => t.length < 90 && !/[.;:]$/.test(t)

export default function Privacidad() {
  const [, ...resto] = privacidad
  return (
    <>
      <PageHero img="/img/contacto.jpg" titulo="Política de Privacidad" />
      <section className="legal">
        {resto.map(([, t], i) => (esSub(t) ? <h2 key={i}>{sub(t)}</h2> : <p key={i}>{sub(t)}</p>))}
      </section>
    </>
  )
}
