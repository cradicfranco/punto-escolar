# Punto Escolar

Sitio estático de artículos escolares con cuatro páginas: `index.html`, `productos.html`, `promociones.html` y `sucursales.html`. Está hecho con HTML, CSS y JavaScript nativo; no tiene frameworks, servidor de aplicación ni base de datos. Su contenido de muestra cubre diez productos, siete promociones, cinco sucursales y un carrusel de siete imágenes.

## Ejecutarlo localmente

Desde esta carpeta, inicia un servidor estático:

```bash
python3 -m http.server 3000
```

Abre `http://localhost:3000` en el navegador.

## Dónde editar

- **Colores:** cambia las variables al principio de `styles.css`, dentro de `:root` (`--paper`, `--ink`, `--accent`, etc.).
- **Productos:** agrega o modifica objetos en `data/catalogo.js`. Cada artículo incluye nombre, marca, categoría, detalle, precio en USD e icono; `app.js` los filtra localmente.
- **Promociones:** edita las tarjetas de `promociones.html`. Conserva siete o más y actualiza juntos el precio, el valor anterior, el porcentaje y las condiciones.
- **Sucursales:** sustituye los cinco datos de ejemplo en `sucursales.html` por ubicaciones, horarios y contactos verificados antes de publicar una tienda real.
- **Carrusel, misión y visión:** edita las siete láminas y textos en `index.html`; sus controles e indicadores accesibles se inicializan en `app.js`.
- **Nuevas secciones:** busca comentarios `ESPACIO EDITABLE` en los HTML para encontrar zonas reservadas para futuras ampliaciones.
- **Navegación:** las cuatro páginas comparten sus enlaces en el encabezado y el pie; al crear otra página, actualízalos también en las demás páginas y en `manus-routes.json`.

Los productos, ofertas, ubicaciones, horarios y contactos que trae el proyecto son **datos demostrativos**. Reemplázalos por información confirmada antes de presentar la web como una tienda activa.
