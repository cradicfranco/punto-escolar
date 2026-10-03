# Punto Escolar

Sitio estático de artículos escolares con cuatro páginas: `index.html`, `productos.html`, `promociones.html` y `sucursales.html`. Está hecho con HTML, CSS y JavaScript nativo; no tiene framework, servidor de aplicación ni base de datos.

## Ejecutarlo localmente

Desde esta carpeta, inicia un servidor estático:

```bash
python3 -m http.server 3000
```

Abre `http://localhost:3000` en el navegador.

## Dónde editar

- **Colores:** cambia las variables al principio de `styles.css`, dentro de `:root` (`--paper`, `--ink`, `--accent`, etc.).
- **Productos:** agrega o modifica objetos en `data/catalogo.js`. Cada artículo incluye nombre, marca, categoría, detalle, precio en USD e icono. Los precios se formatean en la página desde `app.js`.
- **Promociones:** edita las tarjetas de `promociones.html`; actualiza el descuento, los importes y las condiciones juntos.
- **Sucursales:** sustituye los datos de ejemplo en `sucursales.html` por ubicaciones y contactos verificados.
- **Secciones adicionales:** busca comentarios `ESPACIO EDITABLE` en los HTML para encontrar zonas reservadas y notas para ampliar el catálogo o agregar contenido.
- **Navegación:** los cuatro documentos comparten sus enlaces en el encabezado y el pie; al crear una página nueva, actualízalos también en las demás páginas y en `manus-routes.json`.

El catálogo, las ofertas, los contactos y las direcciones que trae el proyecto son **datos demostrativos**. Reemplázalos por información real antes de publicar el sitio como una tienda activa.
