# Triumph front (React + Vite)

`npm i && npm run dev` · `npm run build` (deploy en Vercel, SPA rewrite en `vercel.json`).

Todo el contenido se edita en `src/data/`:
- `dealer.js` – datos de la agencia (WhatsApp, mail, direccion, endpoint Formspree opcional).
- `offers.js` – OFERTAS / PROMOCIONES (campo `hasta` opcional: se ocultan solas al vencer).
- `popups.js` – POP-UPS temporales con `desde` / `hasta`, imagen, texto y boton. Se muestran una vez por sesion.
- `models.js` – fichas de motos.

Tipografia Triumph Brokman © The Northern Block (licencia en `public/fonts/`; hay que acreditarla, ya figura en el footer).
