// Proyectos, en el orden en que se muestran.
// `status: 'archived'` agrega la etiqueta "archivado".
// `links`: { label, href }. Los demos que vivían en Heroku ya no existen; quedan solo los repositorios.

const projects = [
  {
    name: 'Rumbo',
    year: '2026',
    stack: 'Go, Astro, React, TypeScript, Cloudflare Pages',
    description: 'Juego web diario para adivinar localidades argentinas por su plano: cuatro intentos por mapa con distancia, dirección y pistas, y una postal de cada lugar.',
    links: [
      { label: 'jugar', href: 'https://jugarumbo.pages.dev/' },
    ],
  },
  {
    name: 'LoteosAPP',
    year: '2026',
    stack: 'Go, React, TypeScript, Tailwind CSS, PostgreSQL, Supabase, Docker',
    description: 'Sistema de gestión de loteos para inmobiliarias: importa los planos en DXF y administra lotes, reservas, ventas en cuotas y cobranzas.',
    links: [
      { label: 'repositorio', href: 'https://github.com/LoteoApp/LoteosAPP' },
    ],
  },
  {
    name: 'E-commerce',
    year: '2020',
    stack: 'React, Redux',
    description: 'Tienda online de ejemplo con filtros de productos y carrito de compras.',
    links: [
      { label: 'demo', href: 'https://e-commerce-redux.web.app/' },
      { label: 'repositorio', href: 'https://github.com/LeoZorzoli/React-Redux-Ecommerce' },
    ],
  },
  {
    name: 'Restaurant',
    year: '2020',
    stack: 'MongoDB, Express, React, Node',
    description: 'Sitio de un restaurante donde los clientes pueden reservar mesa.',
    links: [
      { label: 'repositorio', href: 'https://github.com/LeoZorzoli/Restaurant' },
    ],
  },
  {
    name: 'Social Network',
    year: '2020',
    stack: 'JavaScript, Python, Django',
    description: 'Red social donde los usuarios publican y leen las publicaciones de otros.',
    links: [
      { label: 'repositorio', href: 'https://github.com/LeoZorzoli/Network' },
    ],
  },
  {
    name: 'ChatApp',
    year: '2020',
    stack: 'JavaScript, Python, Flask, Socket.io',
    description: 'Chat en tiempo real al estilo Slack, con canales donde conversan varios usuarios.',
    links: [
      { label: 'repositorio', href: 'https://github.com/LeoZorzoli/Flack' },
    ],
  },
  {
    name: 'Books',
    year: '2020',
    stack: 'Python, Flask, PostgreSQL',
    description: 'Sitio para buscar libros y dejar reseñas.',
    links: [
      { label: 'repositorio', href: 'https://github.com/LeoZorzoli/Books' },
    ],
  },
]

export default projects
