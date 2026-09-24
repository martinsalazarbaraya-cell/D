# Invitación al evento

Página de invitación en HTML (`index.html`) con banner y logo, título, ubicación, fecha, foto del lugar, botón RSVP, sección About y formulario de registro de Microsoft Forms incrustado.

## Personalizar

- **Logo:** reemplaza `assets/logo.svg` (o cambia el `src` en el banner).
- **Foto del lugar:** agrega `assets/lugar.jpg`. Mientras no exista, se muestra un placeholder.
- **Textos:** título, lugar, dirección, fecha, hora y About están directo en `index.html`.
- **Colores:** variables `--brand` y `--accent` al inicio del `<style>`.

## Registro (Microsoft Forms)

El formulario de la sección **Registro** es un Microsoft Form incrustado con un `<iframe>`. Las respuestas se ven en Forms → **Respuestas → Abrir en Excel** (o en el Excel enlazado de OneDrive, si el Form se creó desde Excel Online).

- Para cambiar de formulario: en Forms, **Compartir → Insertar**, y reemplaza el `src` del `<iframe>` en `index.html`.
- Para que respondan invitados externos, el Form debe estar configurado como **"Cualquiera puede responder"**.

## Publicar

Cualquier hosting estático sirve: GitHub Pages (Settings → Pages → rama principal), Netlify o Vercel.
