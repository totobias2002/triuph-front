// BANNERS DEL CARRUSEL DE LA HOME. Agregar/quitar/ordenar slides.
// Banner propio de la agencia (1920x740): poner el archivo en /public/img/ y agregar { img: '/img/archivo.jpg', alt: 'texto', link: '/ofertas' }.
// 'imgMovil' (opcional): version vertical 1080x1920 que se usa en celular (<=768px) a pantalla completa.
// 'hasta' (YYYY-MM-DD, opcional): el slide se oculta solo al vencer.
// OJO: los banners 1 y 2 traen "Triumph Buenos Aires" y su promo dibujados; reemplazar por los de la agencia antes de publicar.
// Slide con foto limpia + texto en codigo: { img, alt, texto: { etiqueta, titulo, sub, boton, link } }
export const banners = [
  { img: '/img/hero-adventure.avif', alt: 'Triumph Tiger', texto: { etiqueta: 'Ofertas de noviembre', titulo: '12 cuotas fijas y sin interés', sub: '50% de anticipo + 12 cuotas. Consultá por financiación en toda la gama.', boton: 'Ver ofertas', link: '/ofertas' } },
  { img: '/img/banner-1.jpg', imgMovil: '/img/banner-1-movil.jpg', ajuste: 'cover', alt: 'Time for Triumph', link: '/ofertas' },
  { img: '/img/banner-2.jpg', imgMovil: '/img/banner-2-movil.jpg', ajuste: 'cover', alt: 'Time for Triumph', link: '/ofertas' },
  { img: '/img/banner-3.jpg', imgMovil: '/img/banner-3-movil.jpg', ajuste: 'cover', alt: 'Tiger Sport 660', link: '/adventure/tiger-sport-660' },
]
