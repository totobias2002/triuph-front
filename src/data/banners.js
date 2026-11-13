// BANNERS DEL CARRUSEL DE LA HOME. Agregar/quitar/ordenar slides.
// Banner propio de la agencia (1920x740): poner el archivo en /public/img/ y agregar { img: '/img/archivo.jpg', alt: 'texto', link: '/classics' }.
// 'imgMovil' (opcional): version vertical 1080x1920 que se usa en celular (<=768px) a pantalla completa.
// 'hasta' (YYYY-MM-DD, opcional): el slide se oculta solo al vencer.
export const banners = [
  // Banners 1 y 2 rehechos el 2026-11-13 (sin promo, sin cuotas, sin "Buenos Aires"). Los viejos quedaron en el escritorio (banners-para-cambiar).
  { img: '/img/banner-1.jpg', imgMovil: '/img/banner-1-movil.jpg', ajuste: 'cover', alt: 'Thruxton 400 y Tracker 400', link: '/roadsters' },
  { img: '/img/banner-2.jpg', imgMovil: '/img/banner-2-movil.jpg', ajuste: 'cover', alt: 'Speed 400, Scrambler 400 X y Scrambler 400 XC', link: '/classics' },
  { img: '/img/banner-3.jpg', imgMovil: '/img/banner-3-movil.jpg', ajuste: 'cover', alt: 'Tiger Sport 660', link: '/adventure/tiger-sport-660' },
]
