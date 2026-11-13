// Datos de la concesionaria. COMPLETAR con los datos reales de la agencia.
// INTERRUPTORES (pedido del jefe 2026-11-13): hasta tener datos reales, no se muestra nada de esto.
// mostrarContacto: WhatsApp (boton flotante, test ride, presupuesto, turno), formulario de contacto, direccion y horarios.
// mostrarOfertas: pagina /ofertas y su link en el menu. (Los precios se manejan aparte con mostrarPrecios en offers.js)
export const mostrarContacto = false
export const mostrarOfertas = false

export const dealer = {
  nombre: 'Triumph',
  whatsapp: '5491100000000', // numero con codigo de pais, sin + ni espacios
  email: 'info@ejemplo.com.ar',
  direccion: 'Completar direccion',
  horarios: ['Lun a Vie de 9 a 19hs', 'Sáb de 10 a 18hs'],
  telefono: '',
  instagram: 'https://www.instagram.com/triumphargentina/',
  youtube: 'https://www.youtube.com/@OfficialTriumph',
  formEndpoint: '', // URL de Formspree (https://formspree.io/f/xxxx). Si esta vacio, el formulario abre WhatsApp.
}
