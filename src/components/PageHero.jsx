// Cabecera de pagina: imagen de fondo oscura + titulo centrado (como el sitio de referencia)
export default function PageHero({ img, titulo, sub, boton, grande }) {
  return (
    <section className={grande ? 'phero phero-xl' : 'phero'} style={img ? { backgroundImage: `url(${img})` } : undefined}>
      <div className="phero-in">
        <h1>{titulo}</h1>
        {sub && <p>{sub}</p>}
        {boton && <a className="btn red" href={boton.href} {...(boton.href.startsWith('http') || boton.href.endsWith('.pdf') ? { target: '_blank', rel: 'noreferrer' } : {})}>{boton.texto}</a>}
      </div>
    </section>
  )
}
