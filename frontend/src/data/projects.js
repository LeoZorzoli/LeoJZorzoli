// Proyectos, en el orden en que se muestran.
// `status: 'archived'` agrega la etiqueta "archivado".
// `links`: { label, href }. Los demos que vivían en Heroku ya no existen; quedan solo los repositorios.

const projects = [
  {
    name: 'LoteosAPP',
    year: '2026',
    stack: '[COMPLETAR: stack]',
    description: '[COMPLETAR: qué es y qué problema resuelve]',
    links: [
      // { label: 'sitio', href: '[COMPLETAR]' },
    ],
  },
  {
    name: 'FindT',
    year: '2021',
    status: 'archived',
    stack: 'MongoDB, Express, React, Node, Socket.io',
    description: 'Plataforma para que estudiantes y programadores se conecten para colaborar en proyectos y aprendan cómo trabaja un equipo de desarrollo.',
    links: [],
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
