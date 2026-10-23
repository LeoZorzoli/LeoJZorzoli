// Trayectoria de la página de inicio, de la más nueva a la más vieja.
// `type`: launch | project | work | education (define la etiqueta de la fila).
// Cada texto va en `{ es, en }`; si falta `en`, se muestra el español. **Así** se muestra en negrita.

const timeline = [
  {
    date: '2026·10',
    type: 'launch',
    text: {
      es: 'Nuevo portfolio: diseño propio, bilingüe y con modo oscuro.',
      en: 'New portfolio: original design, bilingual, with dark mode.',
    },
  },
  {
    date: '2026·10',
    type: 'launch',
    text: {
      es: 'Lancé **Rumbo**, un juego web diario para adivinar localidades argentinas por su plano.',
      en: 'Launched **Rumbo**, a daily web game where you guess Argentine towns from their street map.',
    },
  },
  {
    date: '2026·08',
    type: 'project',
    text: {
      es: 'Empecé **LoteosAPP**, un sistema de gestión de loteos para inmobiliarias.',
      en: 'Started **LoteosAPP**, a land-lot management system for real estate agencies.',
    },
  },
  {
    date: '2026·03',
    type: 'work',
    text: {
      es: 'Software Developer en Mercado Libre, equipo de Routing PrePost.',
      en: 'Software Developer at Mercado Libre, Routing PrePost team.',
    },
  },
  {
    date: '2024·09',
    type: 'work',
    text: {
      es: 'Software Developer en **Mercado Libre**, equipo de Fleet Planning.',
      en: 'Software Developer at **Mercado Libre**, Fleet Planning team.',
    },
  },
  {
    date: '2023·04',
    type: 'education',
    text: {
      es: 'Tecnicatura en Informática aplicada al Diseño Multimedial y de Sitios Web, Universidad Nacional del Litoral.',
      en: 'Technical degree in Computing applied to Multimedia and Web Design, Universidad Nacional del Litoral.',
    },
  },
  {
    date: '2021·07',
    type: 'work',
    text: {
      es: 'Analista Desarrollador de Software en Crédito Argentino.',
      en: 'Software Developer Analyst at Crédito Argentino.',
    },
  },
  {
    date: '2020·11',
    type: 'education',
    text: {
      es: 'Full Stack Open, Universidad de Helsinki: React, Node, GraphQL.',
      en: 'Full Stack Open, University of Helsinki: React, Node, GraphQL.',
    },
  },
  {
    date: '2020·08',
    type: 'education',
    text: {
      es: 'CS50W: programación web con Python y JavaScript, HarvardX.',
      en: 'CS50W: Web Programming with Python and JavaScript, HarvardX.',
    },
  },
  {
    date: '2020·06',
    type: 'education',
    text: {
      es: 'CS50x: Introducción a las ciencias de la computación. Acá empezó todo.',
      en: 'CS50x: Introduction to Computer Science. Where it all began.',
    },
  },
]

export default timeline
