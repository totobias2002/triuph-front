// OFERTAS / PROMOCIONES. Agregar, editar o quitar items.
// 'hasta' (YYYY-MM-DD, opcional): pasada esa fecha la oferta se oculta sola.
// 'efecto' (opcional): ar = ancho/alto de la foto; fx,fy = faro y sx,sy = escape, en % de la foto (para el humo al tocar Consultar).
// 'slug' enlaza con la ficha del modelo (models.js).
export const offers = [
  { id: 'tiger-sport-660', slug: 'tiger-sport-660', modelo: 'Tiger Sport 660', precio: '$25.235.000', imagen: '/img/oferta-tiger-sport-660.avif', etiqueta: 'Oferta', hasta: '', efecto: { ar: 1.762, fx: 72, fy: 31, sx: 30, sy: 46 } },
  { id: 'tiger-1200', slug: 'tiger-1200-gt-pro', modelo: 'Tiger 1200', precio: 'USD 32.736', imagen: '/img/oferta-tiger-1200.png', etiqueta: 'Oferta', hasta: '', efecto: { ar: 1.802, fx: 76, fy: 33, sx: 22, sy: 40 } },
  { id: 'scrambler-400-x', slug: 'scrambler-400-x', modelo: 'Scrambler 400 X', precio: '$11.500.000', imagen: '/img/oferta-scrambler-400-x.jpg', etiqueta: 'Oferta', hasta: '', efecto: { ar: 1.778, fx: 71, fy: 30, sx: 19, sy: 56 } },
  { id: 'speed-400', slug: 'speed-400', modelo: 'Speed 400', precio: '$9.990.000', imagen: '/img/oferta-speed-400.jpg', etiqueta: 'Oferta', hasta: '', efecto: { ar: 1.778, fx: 72, fy: 31, sx: 20, sy: 57 } },
]
