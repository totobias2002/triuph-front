// Categorias de motos: titulo, imagen del hero y motos que lista cada una (en ese orden).
export const categorias = {
  classics: { titulo: 'Classics', hero: '/img/hero-classics.avif', motos: ['bonneville-t100', 'bonneville-t120', 'scrambler-1200-x', 'scrambler-400-x'],
    // foto de cada tarjeta (opcional): si falta se usa la foto de la ficha
    fotos: { 'bonneville-t100': '/img/card-bonneville-t100.avif', 'bonneville-t120': '/img/card-bonneville-t120.avif', 'scrambler-1200-x': '/img/card-scrambler-1200-x.avif', 'scrambler-400-x': '/img/card-scrambler-400-x.jpg' } },
  roadsters: { titulo: 'Roadsters', hero: '/img/hero-roadsters.avif', motos: ['speed-400', 'speed-triple-1200-rr', 'street-triple-765-rs', 'trident-660'],
    fotos: { 'speed-400': '/img/card-speed-400.jpg', 'speed-triple-1200-rr': '/img/card-speed-triple-1200-rr.avif', 'street-triple-765-rs': '/img/card-street-triple-765-rs.avif', 'trident-660': '/img/card-trident-660.avif' } },
  adventure: { titulo: 'Adventure', hero: '/img/hero-adventure.avif', motos: ['tiger-1200-gt-pro', 'tiger-1200-rally-explorer', 'tiger-900', 'tiger-sport-660'],
    // igual al original: las dos Tiger 1200 comparten la misma foto
    fotos: { 'tiger-1200-gt-pro': '/img/card-tiger-1200.avif', 'tiger-1200-rally-explorer': '/img/card-tiger-1200.avif', 'tiger-900': '/img/card-tiger-900.avif', 'tiger-sport-660': '/img/card-tiger-sport-660.avif' } },
}
