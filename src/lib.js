import { dealer } from './data/dealer'
export const wa = (msg = '') => `https://wa.me/${dealer.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`
const hoy = () => new Date().toISOString().slice(0, 10)
export const vigente = (desde, hasta) => (!desde || hoy() >= desde) && (!hasta || hoy() <= hasta)
