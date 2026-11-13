// FICHAS "COMPLETAS" (diseño igual al sitio original). Si una moto esta aca, su pagina usa este diseño;
// si no, usa el diseño simple de siempre (Model.jsx). Para agregar otra moto: copiar este bloque y cambiar las fotos
// (poner los archivos en /public/img/). 'efecto' = faro y humo de la moto de la 2da seccion. 'video' = id de YouTube (se carga recien al tocar play).
export const fichas = {
  'bonneville-t100': {
    hero: '/img/card-bonneville-t100.avif',
    heroMovil: '/img/t100-izq.avif', // en celular: foto vertical con la moto y la persona completas
    colorMovil: '#c9b79c', // color que rellena debajo de la foto en celular
    tira: ['/img/t100-tira-1.avif', '/img/t100-tira-2.avif', '/img/t100-tira-3.avif', '/img/t100-tira-4.avif', '/img/t100-tira-5.avif', '/img/t100-tira-6.avif'],
    izq: '/img/t100-izq.avif',
    ancha: '/img/t100-ancha.avif',
    roja: '/img/t100-roja.avif',
    efecto: { ar: 1.847, fx: 68, fy: 35, sx: 18.5, sy: 71 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
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
    efecto: { ar: 1.889, fx: 70, fy: 32, sx: 23, sy: 72 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
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
    efecto: { ar: 1.777, fx: 65.5, fy: 46.5, sx: 32, sy: 78.5 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
  },
  'scrambler-1200-x': {
    hero: '/img/s1200x-hero.avif',
    heroMovil: '/img/s1200x-hero.avif', // misma foto que la original, entera (sin recortar)
    colorMovil: '#1a1a1a',
    aspectoMovil: 1.15,
    posMovil: '55%',
    tira: ['/img/s1200x-tira-1.avif', '/img/s1200x-tira-2.avif', '/img/s1200x-tira-3.avif', '/img/s1200x-tira-4.avif', '/img/s1200x-tira-5.avif', '/img/s1200x-tira-6.avif'],
    izq: '/img/s1200x-izq.avif',
    ancha: '/img/s1200x-ancha.avif',
    roja: '/img/s1200x-roja.png',
    efecto: { ar: 2.12, fx: 68.8, fy: 28.7, sx: 21, sy: 48 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
    video: { id: '4sk0C4_ZULY', img: '/img/s1200x-video.avif' },
  },
  'scrambler-400-x': {
    hero: '/img/s400x-hero.jpg',
    heroMovil: '/img/s400x-hero.jpg', // misma foto que la original, entera (sin recortar)
    colorMovil: '#1a1a1a',
    aspectoMovil: 1.15,
    posMovil: '55%',
    tira: ['/img/s400x-tira-1.jpg', '/img/s400x-tira-2.jpg', '/img/s400x-tira-3.jpg', '/img/s400x-tira-4.jpg', '/img/s400x-tira-5.jpg', '/img/s400x-tira-6.jpg'],
    izq: '/img/s400x-izq.avif',
    ancha: '/img/s400x-ancha.avif',
    roja: '/img/s400x-roja.avif',
    efecto: { ar: 1.778, fx: 66, fy: 43, sx: 29, sy: 63 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
    video: { id: 'MVOCZdx9bsE', img: '/img/s400x-video.avif' },
  },
  'scrambler-400-x-copy': {
    // Scrambler 400 XC: en el original no tiene tira de fotos ni video
    hero: '/img/s400xc-hero.jpg',
    heroMovil: '/img/s400xc-hero.jpg',
    colorMovil: '#1a1a1a',
    aspectoMovil: 1.15,
    posMovil: '55%',
    tira: [],
    izq: '/img/s400xc-hero.jpg',
    ancha: '/img/s400xc-ancha.jpg',
    roja: '/img/s400xc-roja.png',
    efecto: { ar: 1.778, fx: 33.5, fy: 43.6, sx: 62, sy: 62, dir: -1 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
  },
  'tracker-400': {
    // La portada es la foto que ya tenia nuestra pagina (pedido del usuario), no la del original
    hero: '/img/tracker-400-1.jpg',
    heroMovil: '/img/tracker-400-1.jpg',
    colorMovil: '#1a1a1a',
    aspectoMovil: 1.15,
    posMovil: '50%',
    tira: ['/img/tr400-tira-1.png', '/img/tr400-tira-2.jpg', '/img/tr400-tira-3.jpg'],
    izq: '/img/tracker-400-2.jpg',
    ancha: '/img/tr400-ancha.jpg',
    roja: '/img/tr400-roja.png',
    efecto: { ar: 1.778, fx: 65.5, fy: 46.5, sx: 30, sy: 65 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
  },
  'thruxton-400': {
    // Igual que la Tracker 400: portada y foto de la seccion 1 = fotos que ya tenia nuestra pagina (pedido del usuario)
    hero: '/img/thruxton-400-1.jpg',
    heroMovil: '/img/thruxton-400-1.jpg',
    colorMovil: '#1a1a1a',
    aspectoMovil: 1.15,
    posMovil: '50%',
    tira: ['/img/th400-tira-1.png', '/img/th400-tira-2.jpg', '/img/th400-tira-3.jpg'],
    izq: '/img/thruxton-400-2.jpg',
    ancha: '/img/th400-ancha.jpg',
    roja: '/img/th400-roja.png',
    efecto: { ar: 1.778, fx: 67, fy: 45, sx: 29.5, sy: 67 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
  },
  'speed-400': {
    // Las fotos que ya tenia nuestra pagina son de estudio con fondo blanco (el texto de la portada no se leeria): portada = la del original
    hero: '/img/sp400-hero.jpg',
    heroMovil: '/img/sp400-hero.jpg',
    colorMovil: '#2b2622',
    aspectoMovil: 1.15,
    posMovil: '70%',
    tira: ['/img/sp400-tira-1.avif', '/img/sp400-tira-2.avif', '/img/sp400-tira-3.avif', '/img/sp400-tira-4.avif', '/img/sp400-tira-5.jpg', '/img/sp400-tira-6.jpg'],
    izq: '/img/sp400-izq.avif',
    ancha: '/img/sp400-ancha.avif',
    roja: '/img/sp400-roja.png',
    video: { id: 'RO1iYtZkIS4', img: '/img/sp400-video.avif' },
    efecto: { ar: 1.761, fx: 72, fy: 28, sx: 19.5, sy: 57 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
  },
  'speed-twin-900': {
    // La foto de estudio que tenia nuestra pagina tiene fondo gris (el texto de la portada no se leeria): portada = la del original
    hero: '/img/st900-hero.jpg',
    heroMovil: '/img/st900-hero.jpg',
    colorMovil: '#c9a883',
    aspectoMovil: 1.15,
    posMovil: '60%',
    tira: ['/img/st900-tira-1.jpg', '/img/st900-tira-2.jpg', '/img/st900-tira-3.jpg'],
    izq: '/img/st900-izq.jpg',
    ancha: '/img/st900-ancha.jpg',
    roja: '/img/st900-roja.png',
    efecto: { ar: 1.778, fx: 67, fy: 43.6, sx: 27, sy: 69.4 }, // arranque al pasar el mouse / tocar la moto: ar = ancho/alto de la foto, fx/fy = faro y sx/sy = escape (en % de la foto), dir:-1 si mira a la izquierda
  },
  'speed-triple-1200-rr': {
    // Las fotos que tenia nuestra pagina son detalles de estudio con fondo blanco (el texto de la portada no se leeria): portada = la del original
    hero: '/img/st12-hero.avif',
    heroMovil: '/img/st12-hero.avif',
    colorMovil: '#3a322c',
    aspectoMovil: 1.15,
    posMovil: '72%',
    tira: ['/img/st12-tira-1.avif', '/img/st12-tira-2.avif', '/img/st12-tira-3.avif', '/img/st12-tira-4.avif', '/img/st12-tira-5.avif', '/img/st12-tira-6.avif'],
    izq: '/img/st12-izq.avif',
    // en esta moto la foto de la moto entera esta en la 1ra seccion (la 2da es un detalle del motor): el arranque va en la 1ra
    efectoIzq: { ar: 1.778, fx: 71, fy: 43.6, sx: 28.5, sy: 61 },
    ancha: '/img/st12-ancha.avif',
    roja: '/img/st12-roja.avif',
    video: { id: 'DmPPgMjUD1o', img: '/img/st12-video.avif' },
  },
  'street-triple-765-rs': {
    // Las fotos que tenia nuestra pagina son de estudio con fondo blanco (el texto de la portada no se leeria): portada = la del original
    hero: '/img/s765-hero.avif',
    heroMovil: '/img/s765-hero.avif',
    colorMovil: '#625a50',
    aspectoMovil: 1.15,
    posMovil: '55%',
    tira: ['/img/s765-tira-1.avif', '/img/s765-tira-2.avif', '/img/s765-tira-3.avif', '/img/s765-tira-4.avif', '/img/s765-tira-5.avif', '/img/s765-tira-6.avif'],
    izq: '/img/s765-tira-5.avif', // en el original la foto de la 1ra seccion es la misma que la 5ta de la tira
    // la moto entera esta en la 1ra seccion (la 2da es una foto de piloto): el arranque va en la 1ra
    efectoIzq: { ar: 1.778, fx: 66.5, fy: 31, sx: 27.5, sy: 63 },
    ancha: '/img/s765-ancha.avif',
    roja: '/img/s765-roja.avif',
    video: { id: 'Or0UK8cG6p4', img: '/img/s765-video.avif' },
  },
  'trident-660': {
    // Las fotos que tenia nuestra pagina son detalles claros de estudio (el texto de la portada no se leeria): portada = la del original
    hero: '/img/tr660-hero.avif',
    heroMovil: '/img/tr660-hero.avif',
    colorMovil: '#1f2a36',
    aspectoMovil: 1.15,
    posMovil: '45%',
    tira: ['/img/tr660-tira-1.avif', '/img/tr660-tira-2.avif', '/img/tr660-tira-3.avif', '/img/tr660-tira-4.avif', '/img/tr660-tira-5.avif', '/img/tr660-tira-6.avif'],
    izq: '/img/tr660-izq.avif', // moto amarilla sobre fondo negro (asi es en el original)
    // la moto entera esta en la 1ra seccion (la 2da es un detalle del motor): el arranque va en la 1ra
    efectoIzq: { ar: 1.778, fx: 65.5, fy: 46.6, sx: 39, sy: 76.5, fit: true },
    ancha: '/img/tr660-ancha.avif',
    roja: '/img/tr660-roja.avif',
    video: { id: 'OSHV7Su-aNo', img: '/img/tr660-video.avif' },
  },
  'tiger-900': {
    // Portada = la foto que ya tenia nuestra pagina (pedido del usuario; la del original es otra, en public/img no se bajo).
    // Casi todas las fotos ya estaban en /img (tiger-900-0..4): eran las mismas del original.
    hero: '/img/tiger-900-4.jpg',
    heroMovil: '/img/tiger-900-4.jpg',
    colorMovil: '#6b5a48',
    aspectoMovil: 1,
    posMovil: '50%',
    tira: ['/img/tiger-900-0.jpg', '/img/tiger-900-1.jpg', '/img/tiger-900-2.jpg'],
    izq: '/img/tiger-900-3.png', // moto de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.777, fx: 69, fy: 41, sx: 21, sy: 44 },
    ancha: '/img/t900-ancha.jpg',
    roja: '/img/tiger-900-4.jpg',
    video: { id: '8x9rtiLVFQU', img: '/img/t900-video.avif' },
  },
  'tiger-900-gt-pro': {
    // La foto que tenia nuestra pagina de portada es un detalle de rueda con fondo blanco (el texto no se leeria): portada = la del original.
    // La mayoria de las fotos ya estaban en /img (tiger-900-gt-pro-0..4): eran las mismas del original. En el original no hay video.
    hero: '/img/gt9-hero.jpg',
    heroMovil: '/img/gt9-hero.jpg',
    colorMovil: '#5a4a3f',
    aspectoMovil: 1,
    posMovil: '50%',
    tira: ['/img/tiger-900-gt-pro-0.avif', '/img/tiger-900-gt-pro-1.avif', '/img/tiger-900-gt-pro-2.avif', '/img/tiger-900-gt-pro-3.png', '/img/tiger-900-gt-pro-4.jpg', '/img/gt9-tira-6.jpg'],
    izq: '/img/tiger-900-gt-pro-3.png', // moto de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.778, fx: 69, fy: 41.8, sx: 21.5, sy: 47 },
    ancha: '/img/gt9-ancha.jpg',
    roja: '/img/gt9-roja.jpg',
  },
  'tiger-900-alpine-edition': {
    // La foto que tenia nuestra pagina de portada es la moto recortada sin fondo (no sirve de portada): portada = la del original.
    // Las fotos del original son PNG de 1,2 a 2 MB: aca van pasadas a JPG (al9-*). La moto de perfil sin fondo ya estaba en /img. Sin video en el original.
    hero: '/img/al9-hero.jpg',
    heroMovil: '/img/al9-hero.jpg',
    colorMovil: '#3b3a35',
    aspectoMovil: 1.5,
    posMovil: '45%',
    tira: ['/img/al9-tira-1.jpg', '/img/al9-tira-2.jpg', '/img/al9-tira-3.jpg'],
    izq: '/img/tiger-900-alpine-edition-3.png', // moto de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.778, fx: 69, fy: 41.8, sx: 21.5, sy: 51 },
    ancha: '/img/al9-ancha.jpg',
    roja: '/img/al9-roja.jpg',
  },
  'tiger-900-desert-edition': {
    // Igual que la Alpine: la portada de nuestra pagina era la moto recortada sin fondo -> portada = la del original.
    // Fotos del original en JPG (de9-*); la moto de perfil sin fondo ya estaba en /img. Sin video en el original.
    hero: '/img/de9-hero.jpg',
    heroMovil: '/img/de9-hero.jpg',
    colorMovil: '#4a3a30',
    aspectoMovil: 1.5,
    posMovil: '45%',
    tira: ['/img/de9-tira-1.jpg', '/img/de9-tira-2.jpg', '/img/de9-tira-3.jpg'],
    izq: '/img/tiger-900-desert-edition-3.png', // moto de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.778, fx: 68.5, fy: 41.8, sx: 21.5, sy: 50 },
    ancha: '/img/de9-ancha.jpg',
    roja: '/img/de9-roja.jpg',
  },
  'tiger-1200-rally-pro': {
    // La foto de portada que tenia nuestra pagina es una vista de arriba con fondo blanco (el texto no se leeria): portada = la del original.
    // Casi todas las fotos ya estaban en /img (tiger-1200-rally-pro-0..4): eran las mismas del original.
    hero: '/img/t12rp-hero.jpg',
    heroMovil: '/img/t12rp-hero.jpg',
    colorMovil: '#4a3a30',
    aspectoMovil: 1.5,
    posMovil: '35%',
    tira: ['/img/tiger-1200-rally-pro-0.jpg', '/img/tiger-1200-rally-pro-1.jpg', '/img/tiger-1200-rally-pro-2.jpg'],
    izq: '/img/tiger-1200-rally-pro-3.png', // moto de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.778, fx: 70.5, fy: 33.8, sx: 23.5, sy: 45 },
    ancha: '/img/t12rp-ancha.avif',
    roja: '/img/tiger-1200-rally-pro-4.avif',
    video: { id: 'WO5L1hapnp8', img: '/img/t12rp-video.avif' },
  },
  'tiger-1200-gt-pro': {
    // La foto de portada que tenia nuestra pagina es un estudio con fondo blanco (el texto no se leeria): portada = la del original.
    // Casi todas las fotos ya estaban en /img (tiger-1200-gt-pro-0..4); la foto ancha, la 2da seccion y el video son los mismos de la Rally Pro.
    hero: '/img/card-tiger-1200.avif',
    heroMovil: '/img/card-tiger-1200.avif',
    colorMovil: '#4a4136',
    aspectoMovil: 1.5,
    posMovil: '40%',
    tira: ['/img/tiger-1200-gt-pro-0.avif', '/img/tiger-1200-gt-pro-1.avif', '/img/tiger-1200-gt-pro-2.avif', '/img/tiger-1200-gt-pro-3.avif', '/img/tiger-1200-gt-pro-4.avif', '/img/g12-tira-6.avif'],
    izq: '/img/g12-izq.avif', // moto blanca de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.749, fx: 71.5, fy: 38.9, sx: 24.5, sy: 45 },
    ancha: '/img/t12rp-ancha.avif',
    roja: '/img/tiger-1200-rally-pro-4.avif',
    video: { id: 'WO5L1hapnp8', img: '/img/t12rp-video.avif' },
  },
  'tiger-1200-rally-explorer': {
    // La foto de portada que tenia nuestra pagina es un detalle de estudio con fondo blanco (el texto no se leeria): portada = la del original
    // (la misma de las otras Tiger 1200). Las 5 primeras fotos de la tira ya estaban en /img (tiger-1200-rally-explorer-0..4).
    hero: '/img/card-tiger-1200.avif',
    heroMovil: '/img/card-tiger-1200.avif',
    colorMovil: '#4a4136',
    aspectoMovil: 1.5,
    posMovil: '40%',
    tira: ['/img/tiger-1200-rally-explorer-0.avif', '/img/tiger-1200-rally-explorer-1.avif', '/img/tiger-1200-rally-explorer-2.avif', '/img/tiger-1200-rally-explorer-3.avif', '/img/tiger-1200-rally-explorer-4.avif', '/img/re12-tira-6.avif'],
    izq: '/img/re12-izq.avif', // moto blanca de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.749, fx: 71.5, fy: 35.9, sx: 23.5, sy: 44.7 },
    ancha: '/img/re12-ancha.avif',
    roja: '/img/re12-roja.avif',
    video: { id: 'YUVZYMfVDqk', img: '/img/re12-video.avif' },
  },
  'tiger-1200-alpine-edition': {
    // Igual que el original: sin carrusel de fotos ni video. Portada = la del original (la de nuestra pagina era la moto recortada sin fondo).
    // Fotos en JPG (a12-*); la moto de perfil sin fondo ya estaba en /img.
    hero: '/img/a12-hero.jpg',
    heroMovil: '/img/a12-hero.jpg',
    colorMovil: '#3f3c3a',
    aspectoMovil: 1.5,
    posMovil: '35%',
    tira: [],
    izq: '/img/tiger-1200-alpine-edition-0.png', // moto de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.778, fx: 71, fy: 35.8, sx: 22.5, sy: 46 },
    ancha: '/img/a12-ancha.jpg',
    roja: '/img/a12-roja.jpg',
  },
  'tiger-1200-desert-edition': {
    // Igual que la Alpine 1200: sin carrusel ni video en el original. Portada = la del original (la de nuestra pagina era la moto recortada).
    hero: '/img/d12-hero.jpg',
    heroMovil: '/img/d12-hero.jpg',
    colorMovil: '#3a2f27',
    aspectoMovil: 1.5,
    posMovil: '30%',
    tira: [],
    izq: '/img/tiger-1200-desert-edition-0.png', // moto de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.778, fx: 71, fy: 35.8, sx: 22.5, sy: 46 },
    ancha: '/img/d12-ancha.jpg',
    roja: '/img/d12-roja.jpg',
  },
  'tiger-sport-660': {
    // Portada = la del original (card-tiger-sport-660, la de la tarjeta de Adventure); la de nuestra pagina era un detalle de estudio blanco.
    // Las 5 primeras fotos de la tira ya estaban en /img (tiger-sport-660-0..4).
    hero: '/img/card-tiger-sport-660.avif',
    heroMovil: '/img/card-tiger-sport-660.avif',
    colorMovil: '#2a2d33',
    aspectoMovil: 1.6,
    posMovil: '45%',
    tira: ['/img/tiger-sport-660-0.avif', '/img/tiger-sport-660-1.avif', '/img/tiger-sport-660-2.avif', '/img/tiger-sport-660-3.avif', '/img/tiger-sport-660-4.avif', '/img/ts6-tira-6.avif'],
    izq: '/img/ts6-izq.avif', // moto negra de perfil con fondo blanco: aca va el arranque
    efectoIzq: { ar: 1.762, fx: 73.5, fy: 33, sx: 38, sy: 74, fit: true },
    ancha: '/img/ts6-ancha.avif',
    roja: '/img/ts6-roja.avif',
    video: { id: 'RFkTaaoL1H4', img: '/img/ts6-video.avif' },
  },
  'tiger-sport-800': {
    // Portada = la del original (la de nuestra pagina era un detalle de estudio blanco). Las 5 fotos de abajo ya estaban en /img (tiger-sport-800-0..4).
    // Portada y foto ancha en JPG (s8-*). En el original no hay video.
    hero: '/img/s8-hero.jpg',
    heroMovil: '/img/s8-hero.jpg',
    colorMovil: '#3a3a3a',
    aspectoMovil: 1.4,
    posMovil: '50%',
    tira: ['/img/tiger-sport-800-0.png', '/img/tiger-sport-800-1.png', '/img/tiger-sport-800-2.png'],
    izq: '/img/tiger-sport-800-3.png', // moto negra de perfil sin fondo: aca va el arranque
    efectoIzq: { ar: 1.778, fx: 71, fy: 41.5, sx: 33, sy: 70 },
    ancha: '/img/s8-ancha.jpg',
    roja: '/img/s8-roja.jpg',
  },
}
