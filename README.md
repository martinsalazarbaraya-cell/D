# Invitación al evento

Página de invitación en HTML (`index.html`) con banner y logo, título, ubicación, fecha, foto del lugar, botón RSVP, sección About y formulario de registro que guarda cada respuesta en una planilla.

## Personalizar

- **Logo:** reemplaza `assets/logo.svg` (o cambia el `src` en el banner).
- **Foto del lugar:** agrega `assets/lugar.jpg`. Mientras no exista, se muestra un placeholder.
- **Textos:** título, lugar, dirección, fecha, hora y About están directo en `index.html`.
- **Colores:** variables `--brand` y `--accent` al inicio del `<style>`.

## Conectar el registro a una planilla (Excel)

Un HTML estático no puede escribir un `.xlsx` directamente, así que el formulario envía los datos a un Google Sheet mediante Apps Script. Desde ahí descargas la lista como Excel cuando quieras (Archivo → Descargar → Microsoft Excel).

1. Crea un Google Sheet nuevo.
2. Ve a **Extensiones → Apps Script**, borra lo que hay y pega el contenido de `apps-script/Code.gs`. Guarda.
3. **Implementar → Nueva implementación** → tipo **Aplicación web**.
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
4. Autoriza los permisos y copia la URL que termina en `/exec`.
5. En `index.html`, pega esa URL en `const SCRIPT_URL = "..."`.

Cada registro crea una fila en la hoja **Asistentes** con: fecha de registro, nombre, apellido, email, teléfono, empresa, cargo, asistencia, acompañante, restricciones alimentarias y comentarios.

> Si cambias el código del Apps Script después, tienes que hacer **Implementar → Administrar implementaciones → Editar → Nueva versión** para que tome los cambios.

## Publicar

Cualquier hosting estático sirve: GitHub Pages (Settings → Pages → rama principal), Netlify o Vercel.
