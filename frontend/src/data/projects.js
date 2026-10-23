// Proyectos, en el orden en que se muestran.
// `status: 'archived'` agrega la etiqueta "archivado".
// `description` va en `{ es, en }`; si falta `en`, se muestra el español.
// `links`: { type, href }, con `type` = repo | demo | play (el texto del link se traduce solo).
// Los demos que vivían en Heroku ya no existen; quedan solo los repositorios.

const projects = [
  {
    name: 'Rumbo',
    year: '2026',
    stack: 'Go, Astro, React, TypeScript, Cloudflare Pages',
    description: {
      es: 'Juego web diario para adivinar localidades argentinas por su plano: cuatro intentos por mapa con distancia, dirección y pistas, y una postal de cada lugar.',
      en: 'Daily web game where you guess Argentine towns from their street map: four tries per map with distance, direction and hints, plus a postcard of each place.',
    },
    links: [
      { type: 'play', href: 'https://jugarumbo.pages.dev/' },
    ],
  },
  {
    name: 'LoteosAPP',
    year: '2026',
    stack: 'Go, React, TypeScript, Tailwind CSS, PostgreSQL, Supabase, Docker',
    description: {
      es: 'Sistema de gestión de loteos para inmobiliarias: importa los planos en DXF y administra lotes, reservas, ventas en cuotas y cobranzas.',
      en: 'Land-lot management system for real estate agencies: imports DXF site plans and manages lots, reservations, installment sales and collections.',
    },
    links: [
      { type: 'repo', href: 'https://github.com/LoteoApp/LoteosAPP' },
    ],
  },
  {
    name: 'E-commerce',
    year: '2020',
    stack: 'React, Redux',
    description: {
      es: 'Tienda online de ejemplo con filtros de productos y carrito de compras.',
      en: 'Sample online store with product filters and a shopping cart.',
    },
    links: [
      { type: 'demo', href: 'https://e-commerce-redux.web.app/' },
      { type: 'repo', href: 'https://github.com/LeoZorzoli/React-Redux-Ecommerce' },
    ],
  },
  {
    name: 'Restaurant',
    year: '2020',
    stack: 'MongoDB, Express, React, Node',
    description: {
      es: 'Sitio de un restaurante donde los clientes pueden reservar mesa.',
      en: 'Restaurant website where customers can book a table.',
    },
    links: [
      { type: 'repo', href: 'https://github.com/LeoZorzoli/Restaurant' },
    ],
  },
  {
    name: 'Social Network',
    year: '2020',
    stack: 'JavaScript, Python, Django',
    description: {
      es: 'Red social donde los usuarios publican y leen las publicaciones de otros.',
      en: 'Social network where users post and read each other’s posts.',
    },
    links: [
      { type: 'repo', href: 'https://github.com/LeoZorzoli/Network' },
    ],
  },
  {
    name: 'ChatApp',
    year: '2020',
    stack: 'JavaScript, Python, Flask, Socket.io',
    description: {
      es: 'Chat en tiempo real al estilo Slack, con canales donde conversan varios usuarios.',
      en: 'Slack-style real-time chat with channels where several users talk.',
    },
    links: [
      { type: 'repo', href: 'https://github.com/LeoZorzoli/Flack' },
    ],
  },
  {
    name: 'Books',
    year: '2020',
    stack: 'Python, Flask, PostgreSQL',
    description: {
      es: 'Sitio para buscar libros y dejar reseñas.',
      en: 'Website to search for books and leave reviews.',
    },
    links: [
      { type: 'repo', href: 'https://github.com/LeoZorzoli/Books' },
    ],
  },
]

export default projects
