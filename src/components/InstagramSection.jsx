import { instagram } from '../data/instagram'

const Icono = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r=".9" fill="currentColor" stroke="none" />
  </svg>
)

export default function InstagramSection() {
  return (
    <section className="insta">
      <div className="insta-in">
        <h2>Seguinos en Instagram</h2>
        <a className="insta-user" href={instagram.url} target="_blank" rel="noreferrer">{instagram.usuario}</a>
        <div className="insta-grid">
          {instagram.posts.map((p) => (
            <a key={p.img} href={p.link || instagram.url} target="_blank" rel="noreferrer" className="insta-post" aria-label={p.alt}>
              <img src={p.img} alt={p.alt} loading="lazy" />
              <span className="insta-ov"><Icono /></span>
            </a>
          ))}
        </div>
        <a className="btn" href={instagram.url} target="_blank" rel="noreferrer">Seguinos</a>
      </div>
    </section>
  )
}
