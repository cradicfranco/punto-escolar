# Plan de implementación — Punto Escolar

## Alcance actualizado según la guía de práctica

Conservar el sitio en español para una tienda de artículos escolares y sus cuatro páginas: principal, productos, promociones y sucursales. Mantener HTML, CSS y JavaScript nativo, sin frameworks ni base de datos. El tema escolar se toma de la asignación comunicada por el equipo.

Completar los requisitos que faltan: carrusel de **al menos siete imágenes** de artículos escolares/promociones en la portada; secciones breves de misión y visión; **al menos siete promociones**; **al menos diez productos** (el catálogo actual ya cumple); y **al menos cinco sucursales**. Los precios, promociones, direcciones, horarios y contactos continuarán identificados como datos demostrativos y editables. No agregar páginas adicionales ni funciones de compra o login que no estén en el alcance confirmado.

## Diseño

- **Movimiento:** editorial contemporáneo inspirado en papelería y cuadernos de clase.
- **Principios:** lectura inmediata; jerarquía amable y organizada; marca/precio visible; edición futura sencilla.
- **Filosofía de color:** fondo de papel cálido y tinta verde oscura para lectura, con naranja lápiz como acento y tonos suaves por categoría. Las variables CSS permiten que el grupo adapte la paleta.
- **Composición:** portada editorial con hero asimétrico, carrusel de gran formato y secciones de misión/visión; rejillas solo donde ayudan a comparar productos, ofertas o sucursales.
- **Motivos distintivos:** símbolo de cuaderno abierto; etiquetas numeradas; pequeñas marcas gráficas inspiradas en papelería.
- **Interacción:** navegación entre cuatro documentos estáticos, filtros locales de productos y controles accesibles anterior/siguiente e indicadores del carrusel.
- **Movimiento:** transición breve entre láminas, sin autoplay obligatorio; respetar `prefers-reduced-motion`.
- **Tipografía:** títulos con Georgia y texto/interfaz con una familia sans-serif del sistema.
- **Esencia de marca:** una papelería escolar práctica para estudiantes y familias que reúne artículos reconocibles por marca; personalidad: clara, cercana y ordenada.
- **Voz:** concreta y útil. Ejemplos: “Todo listo para el próximo capítulo.” y “Encuentra tu marca, compara el precio y sigue aprendiendo.”
- **Logotipo:** símbolo vectorial de cuaderno abierto y punto como trazo de lápiz, junto al nombre Punto Escolar.
- **Color distintivo:** naranja lápiz editable por variable CSS.

## Implementación y estructura

- `index.html`: portada, carrusel de siete imágenes, misión y visión, accesos a las otras páginas.
- `productos.html`: catálogo con diez o más productos, marca, categoría, precio en USD y filtro local.
- `promociones.html`: siete o más ofertas demostrativas con precios en USD.
- `sucursales.html`: cinco o más sucursales de ejemplo con datos editables.
- `styles.css`: paleta como variables, componentes compartidos, carrusel y reglas responsive.
- `app.js`: controles del carrusel, año del pie y filtro del catálogo.
- `data/catalogo.js`: productos de demostración concentrados en un arreglo editable.
- `assets/`: imagen editorial de portada, símbolo de marca e imágenes visuales distintas para el carrusel.
- `manus-routes.json`: manifiesto estático de las cuatro páginas; no se añaden rutas.

No se habilitará backend, base de datos, framework, carrito ni login. Las ubicaciones, inventario y ofertas son contenido de demostración, no información verificada de una empresa real. Se conservará la visibilidad pública del repositorio GitHub.
