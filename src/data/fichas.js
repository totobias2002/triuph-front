// FICHAS "COMPLETAS" (diseño igual al sitio original). Si una moto esta aca, su pagina usa este diseño;
// si no, usa el diseño simple de siempre (Model.jsx). Para agregar otra moto: copiar este bloque y cambiar las fotos
// (poner los archivos en /public/img/). 'video' = id de YouTube (se carga recien al tocar play).
export const fichas = {
  'bonneville-t100': {
    hero: '/img/card-bonneville-t100.avif',
    heroMovil: '/img/t100-izq.avif', // en celular: foto vertical con la moto y la persona completas
    colorMovil: '#c9b79c', // color que rellena debajo de la foto en celular
    tira: ['/img/t100-tira-1.avif', '/img/t100-tira-2.avif', '/img/t100-tira-3.avif', '/img/t100-tira-4.avif', '/img/t100-tira-5.avif', '/img/t100-tira-6.avif'],
    izq: '/img/t100-izq.avif',
    ancha: '/img/t100-ancha.avif',
    roja: '/img/t100-roja.avif',
    video: { id: '4lZfrILyjIk', img: '/img/t100-video.avif' },
  },
  'bonneville-t120': {
    hero: '/img/card-bonneville-t120-hero.avif',
    heroMovil: '/img/card-bonneville-t120-hero.avif', // misma foto que la original, entera (sin recortar)
    colorMovil: '#2b2622',
    aspectoMovil: 1.15, // proporcion del recorte de la foto en celular
    posMovil: '58%',
    tira: ['/img/t120-tira-1.avif', '/img/t120-tira-2.avif', '/img/t120-tira-3.avif', '/img/t120-tira-4.avif', '/img/t120-tira-5.avif', '/img/t120-tira-6.avif'],
    izq: '/img/t120-izq.avif',
    ancha: '/img/t120-ancha.avif',
    roja: '/img/t120-roja.avif',
    video: { id: '2tyWHhawf5E', img: '/img/t120-video.avif' },
  },
  'bonneville-bobber': {
    hero: '/img/bobber-hero.jpg',
    heroMovil: '/img/bobber-hero.jpg',
    colorMovil: '#1a1a1a',
    aspectoMovil: 1.15,
    posMovil: '50%',
    // la original usa las mismas fotos de la tira que la T120; no tiene video
    tira: ['/img/t120-tira-1.avif', '/img/t120-tira-2.avif', '/img/t120-tira-3.avif', '/img/t120-tira-4.avif', '/img/t120-tira-5.avif', '/img/t120-tira-6.avif'],
    izq: '/img/bobber-izq.jpg',
    ancha: '/img/bobber-ancha.jpg',
    roja: '/img/bobber-roja.jpg',
  },
}
