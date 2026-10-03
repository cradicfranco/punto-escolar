# Plan de implementación — Punto Escolar

## Alcance aprobado

Sitio en español para una tienda de artículos escolares con cuatro páginas: principal, productos, promociones y sucursales. Los precios se expresan en dólares estadounidenses y cada artículo identifica su marca. La implementación usa HTML y CSS, sin Angular, React, Vue ni otros frameworks, sin base de datos, y deja estructura y zonas claramente comentadas para continuar editando. La navegación será consistente y el diseño adaptable a móvil y escritorio.

## Diseño

- **Movimiento:** editorial contemporáneo inspirado en papelería y cuadernos de clase.
- **Principios:** lectura inmediata; jerarquía amable y organizada; información de marca/precio visible; edición futura sencilla.
- **Filosofía de color:** fondo de papel cálido y tinta azul para comodidad visual, con naranja lápiz para llamadas a la acción y verde suave de apoyo. Se expondrán como variables CSS al inicio de `styles.css` para que el grupo pueda cambiarlas con facilidad; es una propuesta de implementación, no una elección de color atribuida al usuario.
- **Paradigma de composición:** portada editorial con hero asimétrico; secciones con rótulos marginales y rejillas de catálogo solo donde ayuden a comparar productos.
- **Motivos distintivos:** sello de marca inspirado en un cuaderno abierto; etiquetas de categoría numeradas; pequeños acentos punteados como papel de notas.
- **Interacción:** navegación simple entre cuatro documentos estáticos, botones con estados visibles y filtro local de productos en JavaScript sin almacenamiento ni servicio remoto.
- **Animación:** transiciones breves en enlaces y tarjetas; evitar movimiento decorativo persistente y respetar `prefers-reduced-motion`.
- **Tipografía:** títulos con Georgia y texto/interfaz con una familia sans-serif del sistema para mantener carga rápida y robustez.
- **Esencia de marca:** una papelería escolar práctica para estudiantes y familias que reúne artículos reconocibles por marca; personalidad: clara, cercana y ordenada.
- **Voz:** concreta y útil. Ejemplos: “Todo listo para el próximo capítulo.” y “Encuentra tu marca, compara el precio y sigue aprendiendo.”
- **Logotipo:** marca tipográfica “Punto Escolar” con un símbolo vectorial sencillo de cuaderno abierto y un punto como trazo de lápiz.
- **Color de marca distintivo:** naranja lápiz editable por variable CSS.

## Implementación y estructura

- `index.html`: portada, propuesta de la tienda, destacados y accesos a las demás páginas.
- `productos.html`: catálogo de muestra con precio USD, marca, categoría y filtro en el navegador.
- `promociones.html`: ofertas demostrativas, fechas/texto editables y enlace al catálogo.
- `sucursales.html`: ubicaciones de ejemplo con dirección, horarios y contacto editables.
- `styles.css`: paleta como variables, estilos compartidos, estados accesibles y reglas responsive.
- `app.js`: menú móvil, año del pie, filtro sencillo; datos de productos separados y sin persistencia.
- `data/catalogo.js`: productos de demostración concentrados en un arreglo editable.
- `assets/`: imagen editorial para la portada y recursos propios del sitio.
- `manus-routes.json`: manifiesto de las cuatro páginas, servido como JSON estático.
- `TODO.md`: criterios completos aprobados y estado de implementación.

No habrá backend, dependencias, frameworks, servicios de compra ni base de datos. Las ubicaciones, precios, inventario y promociones se presentarán como contenido editable de demostración, no como información verificada de una empresa real.