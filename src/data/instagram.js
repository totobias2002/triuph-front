// SECCION "SEGUINOS EN INSTAGRAM". Poner la cuenta de la agencia y sus ultimos posts.
// Cada post: { img: '/img/archivo.jpg' (guardar la foto en /public/img/, mejor vertical), link: URL del post, alt: 'texto' }
// OJO: hoy son los 4 posts de la pagina de referencia (traen "Buenos Aires" y su promo dibujados);
// reemplazar por los de la agencia antes de publicar.
// Interruptor: false = se oculta la seccion "Seguinos en Instagram" del home. Poner true cuando haya posts de la agencia.
export const mostrarInstagram = false

export const instagram = {
  usuario: '@triumphargentina',
  url: 'https://www.instagram.com/triumphargentina/',
  posts: [
    { img: '/img/insta-1.jpg', link: 'https://www.instagram.com/p/DZm5Kp0jg9s/', alt: 'Tiger 1200, detalle del tanque' },
    // Sacado (jefe 2026-11-13): "Promo: financiá hasta el 80%" -> { img: '/img/insta-2.jpg', link: 'https://www.instagram.com/p/DZfztCRoBp_/', alt: 'Promo' },
    { img: '/img/insta-3.jpg', link: 'https://www.instagram.com/p/DZVWYMtoSGz/', alt: 'Tiger Sport en el salón' },
    { img: '/img/insta-4.jpg', link: 'https://www.instagram.com/p/DZN7mw3D7mp/', alt: 'Desayuno y test ride' },
  ],
}
