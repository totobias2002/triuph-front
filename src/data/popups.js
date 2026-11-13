// POP-UPS TEMPORALES. Se muestran solos entre 'desde' y 'hasta' (inclusive), una vez por sesion.
// Para colgar uno nuevo: copiar un bloque, cambiar fechas/imagen/texto. Poner activo:false para pausarlo.
// imagen: poner el archivo en /public/img/ y referenciarlo como '/img/archivo.jpg' (opcional).
export const popups = [
  {
    id: 'bienvenida-nov-2026',
    activo: false, // jefe 2026-11-13: sin promociones ni precios por ahora
    desde: '2026-11-06',
    hasta: '2026-11-30',
    titulo: 'Ofertas de noviembre',
    texto: 'Encontrá la Triumph que querés al precio que necesitás. Consultá por financiación.',
    imagen: '',
    boton: { texto: 'Ver ofertas', href: '/ofertas' },
  },
]
