import { dealer } from './data/dealer'
export const wa = (msg = '') => `https://wa.me/${dealer.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`
const hoy = () => new Date().toISOString().slice(0, 10)
export const vigente = (desde, hasta) => (!desde || hoy() >= desde) && (!hasta || hoy() <= hasta)
// URL de una moto, igual a la del sitio original: /classics/bonneville-t100
export const modelPath = (m) => `/${m.cat.toLowerCase()}/${m.slug}`
// Foto "de ambiente" de la moto (prefiere jpg/avif sobre el PNG recortado)
export const fotoModelo = (m) => m.images.find((s) => !s.endsWith('.png')) || m.images[0]
