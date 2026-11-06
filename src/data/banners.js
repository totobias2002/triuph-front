// BANNERS DEL CARRUSEL DE LA HOME. Agregar/quitar/ordenar slides.
// Para un banner propio de la agencia (imagen completa 1920x740): poner el archivo en /public/img/
// y usar { img: '/img/mi-banner.jpg', ajuste: 'cover', alt: 'texto' } (sin titulo).
// ajuste 'contain' = moto recortada sobre fondo oscuro con titulo.
// 'hasta' (YYYY-MM-DD, opcional): el slide se oculta solo al vencer.
export const banners = [
  // Banners copiados del sitio de referencia. OJO: traen el texto "Triumph Buenos Aires" y su promo (24 cuotas) dibujados en la imagen; reemplazar por los de la agencia antes de publicar.
  { img: '/img/banner-1.jpg', ajuste: 'cover', alt: 'Time for Triumph', link: '/ofertas' },
  { img: '/img/banner-2.jpg', ajuste: 'cover', alt: 'Time for Triumph', link: '/ofertas' },
  { img: '/img/tiger-900-alpine-edition-3.png', ajuste: 'contain', titulo: 'Tiger 900 Alpine', link: '/moto/tiger-900-alpine-edition' },
  { img: '/img/speed-twin-900-4.png', ajuste: 'contain', titulo: 'Speed Twin 900', link: '/moto/speed-twin-900' },
  { img: '/img/tracker-400-0.png', ajuste: 'contain', titulo: 'Tracker 400', link: '/moto/tracker-400' },
]
