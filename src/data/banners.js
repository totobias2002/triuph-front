// BANNERS DEL CARRUSEL DE LA HOME. Agregar/quitar/ordenar slides.
// Banner propio de la agencia (1920x740): poner el archivo en /public/img/ y agregar { img: '/img/archivo.jpg', alt: 'texto', link: '/ofertas' }.
// 'imgMovil' (opcional): version vertical 1080x1920 que se usa en celular (<=768px) a pantalla completa.
// 'hasta' (YYYY-MM-DD, opcional): el slide se oculta solo al vencer.
// OJO: los banners 1 y 2 traen "Triumph Buenos Aires" y su promo dibujados; reemplazar por los de la agencia antes de publicar.
export const banners = [
  { img: '/img/banner-1.jpg', imgMovil: '/img/banner-1-movil.jpg', ajuste: 'cover', alt: 'Time for Triumph', link: '/ofertas' },
  { img: '/img/banner-2.jpg', imgMovil: '/img/banner-2-movil.jpg', ajuste: 'cover', alt: 'Time for Triumph', link: '/ofertas' },
  { img: '/img/banner-3.jpg', ajuste: 'cover', alt: 'Tiger Sport 660', link: '/moto/tiger-sport-660' },
]
