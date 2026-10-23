// Proyectos, en el orden en que se muestran.
// `status: 'archived'` agrega la etiqueta "archivado".
// `description` va en `{ es, en }`; si falta `en`, se muestra el español.
// `links`: { type, href }, con `type` = repo | demo | play (el texto del link se traduce solo).

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
]

export default projects
