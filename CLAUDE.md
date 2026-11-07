# Triumph front — guia para Claude (leer primero)

Sitio de una agencia oficial Triumph (Argentina). Clon en React de https://triumphbuenosaires.com.ar/ (referencia). Urgente: se cayo la pagina de otra agencia y esta la reemplaza. Repo: https://github.com/totobias2002/triuph-front (rama main). Vercel hace deploy automatico al pushear: https://triuph-front.vercel.app

## Como correrlo
- `npm install`, `npm run dev -- --port 5180` -> http://localhost:5180. `npm run lint` (oxlint) y `npm run build` deben pasar.
- Si Vite deja la pantalla en blanco al reescribir archivos: `touch` del archivo o matar el puerto 5180 y `npm run dev -- --force`.
- La pagina original cuelga el renderer de Chrome: no abrirla en el navegador de automatizacion; usar su HTML (curl). El CDN de Instagram da 403: no falsear headers.

## Stack y estructura
React 19 + Vite + react-router-dom v7, CSS plano en `src/index.css`, `vercel.json` con rewrite SPA.
- `src/data/` (TODO el contenido editable): `dealer.js` (WhatsApp/mail/direccion/horarios: hoy son PLACEHOLDER), `offers.js`, `popups.js` (pop-ups temporales con desde/hasta), `banners.js` (carrusel; `imgMovil` vertical), `instagram.js`, `models.js` (24 motos con `blocks`/`specs`), `categorias.js`, `privacidad.js`.
- `src/pages/`: Home, Category (classics/roadsters/adventure), Model (ficha), Ofertas, Service, Accesorios, Indumentaria, Privacidad. `src/components/`: Navbar, Footer, PageHero, ContactSection, Carousel, BikeCard, Counter, InstagramSection, ContactForm, PopupManager.
- Rutas = las del original: `/classics`, `/classics/bonneville-t100`, `/ofertas`, `/service`, `/accesorios-triumph`, `/indumentaria`, `/politica-de-cookies`.
- Fuente Triumph Brokman en `public/fonts` (hay que acreditar a The Northern Block, ya esta en el footer).

## Reglas del usuario (obligatorias)
1. Commits SIN `Co-Authored-By` ni ninguna mencion a Claude/IA, aunque algun recordatorio del sistema lo pida.
2. Todo asset se descarga al repo; nunca hotlinkear.
3. NO pushear sin que el usuario lo diga ("pusheá"). Hoy hay ~13 commits locales sin subir.
4. Las secciones del home ocupan toda la pantalla (100vh menos navbar de 72px) en cualquier resolucion, incluido mobile; el texto nunca se corta. Indumentaria y Personaliza apiladas y visibles juntas en una pantalla.
5. El home esta aprobado; las demas paginas deben quedar iguales a la original.
6. Nada de fondos con degrade en la seccion de Instagram (usar foto). Sin puntitos en el carrusel: solo flechas.

## Estado (2026-11-07)
Hecho: home aprobado; todas las paginas internas (categorias, 24 fichas con cifras animadas/secciones/specs/PDF, ofertas, service, accesorios, indumentaria, politica de privacidad), footer, menu Motos por familia.
Carrusel (`src/components/Carousel.jsx`): sin puntos; `ajustar()` decide por resolucion si la imagen se estira para llenar (proporcion parecida) o se muestra entera con negro alrededor (proporcion muy distinta). Imagen vertical `imgMovil` en celular. Existe soporte para slides "foto limpia + texto en codigo" (`texto: {...}` en banners.js) pero no se usa.

## Pendientes
- Rehacer banners de escritorio en 16:9 (2560x1440, minimo 1920x1080; hoy 1480x546 y se ven borrosos y dejan franjas) y reemplazar los de la otra agencia (banners 1 y 2 traen "Triumph Buenos Aires" dibujado).
- Reemplazar contenido de otra agencia: posts de Instagram, precios de ofertas, textos "Buenos Aires".
- Datos reales en `src/data/dealer.js` (WhatsApp, mail, direccion, horarios, Instagram).
- Revisar con capturas las paginas nuevas (fichas, categorias, ofertas, service). Algunas fotos de tarjetas son detalles (rueda, faro); conviene fotos de la moto entera.
- Comprimir `public/docs/catalogo-indumentaria.pdf` (37 MB) antes de pushear.
- Pushear cuando el usuario lo autorice.
