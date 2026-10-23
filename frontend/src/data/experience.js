// Experiencia laboral, de la más nueva a la más vieja.
// `date` (inicio) y `end` (fin, o 'hoy') van en la columna de la izquierda.
// `meta` (opcional) se muestra debajo del título; `highlights` (opcional) es la lista de logros del puesto.
// `roles` (opcional) agrupa varios equipos dentro de una misma empresa: cada uno con sus fechas y logros.
// Los textos traducibles van en `{ es, en }`; si falta `en`, se muestra el español.

export const experience = [
  {
    date: '2024·09',
    end: '2026·08',
    meta: { es: 'híbrido', en: 'hybrid' },
    title: 'Mercado Libre',
    description: {
      es: 'Equipos backend del área de Envíos (Última Milla), enfocados en la rentabilidad, la velocidad y la experiencia de los envíos. En ambos equipos, desarrollé con foco fuerte en IA, análisis y revisión de métricas, despliegues e infraestructura.',
      en: 'Backend teams in the Shipping area (Last Mile), focused on the profitability, speed and experience of deliveries. On both teams I worked with a strong focus on AI, metrics analysis and review, deployments and infrastructure.',
    },
    roles: [
      {
        date: '2026·03',
        end: '2026·08',
        title: 'Software Developer',
        team: 'Routing PrePost',
        description: {
          es: 'Lideré la migración de los 3 flujos que generan los clusters de paquetes previos al ruteo desde dos APIs existentes a una librería y una API nueva, cuya arquitectura e infraestructura definí (streams, jobs y work queues).',
          en: 'Led the migration of the 3 flows that build package clusters ahead of routing, from two existing APIs to a library and a new API whose architecture and infrastructure I defined (streams, jobs and work queues).',
        },
      },
      {
        date: '2024·09',
        end: '2026·03',
        title: 'Software Developer',
        team: 'Fleet Planning',
        highlights: [
          {
            es: 'Junto a los equipos de Producto y UX desarrollamos una aplicación web que genera planificaciones simuladas de envíos proyectados hasta un año hacia adelante.',
            en: 'Together with the Product and UX teams, we built a web app that generates simulated plans for projected shipments up to a year ahead.',
          },
          {
            es: 'Diseñé y desarrollé un flujo automatizado que predice los paquetes que faltan despachar en D-1, con un motor de machine learning entrenado con el histórico por service center, ciclo y site (días, meses, años y feriados), con una precisión del 90%.',
            en: 'Designed and built an automated flow that predicts the packages still pending dispatch on D-1, using a machine learning engine trained on historical data by service center, cycle and site (days, months, years and holidays), with 90% accuracy.',
          },
          {
            es: 'Automaticé la generación de documentos y configuración para el rollout de nuevos service centers: pasamos de 5–10 a 100 por mes, cubrimos casi todos los sites de México, Brasil y Argentina y habilitamos la expansión a Chile, Colombia y Uruguay.',
            en: 'Automated the documents and configuration needed to roll out new service centers: we went from 5–10 to 100 per month, covered nearly every site in Mexico, Brazil and Argentina, and enabled the expansion to Chile, Colombia and Uruguay.',
          },
        ],
      },
    ],
  },
  {
    date: '2021·07',
    end: '2024·08',
    meta: { es: 'remoto', en: 'remote' },
    title: { es: 'Analista Desarrollador de Software', en: 'Software Developer Analyst' },
    org: 'Crédito Argentino',
    description: {
      es: 'Equipo de sistemas del área comercial: todas las etapas de desarrollo, soporte y mantenimiento de aplicaciones clave para el área de administración.',
      en: 'Systems team in the sales area: every stage of development, plus support and maintenance of key applications for the administration area.',
    },
    highlights: [
      {
        es: 'Con dos compañeros lideramos el desarrollo de una aplicación web para gestionar usuarios (alta, modificación y baja) y sus permisos sobre las aplicaciones internas.',
        en: 'With two teammates, led the development of a web app to manage users (creation, updates and removal) and their permissions across internal applications.',
      },
      {
        es: 'Junto al equipo de administración desarrollé el sistema detrás de un bot de WhatsApp que permite a los comercios generar créditos de consumo para sus clientes.',
        en: 'Together with the administration team, built the system behind a WhatsApp bot that lets merchants issue consumer loans to their customers.',
      },
      {
        es: 'Con el equipo de infraestructura desarrollé un sistema de autenticación con segundo factor para las aplicaciones web.',
        en: 'With the infrastructure team, built a two-factor authentication system for the web applications.',
      },
    ],
  },
]

export const volunteering = [
  {
    date: '2025·10',
    end: 'hoy',
    title: 'Mentor',
    org: 'Junior Achievement',
    description: {
      es: 'Acompaño como mentor a jóvenes estudiantes de tecnología en su inserción en el mercado laboral IT.',
      en: 'I mentor young tech students as they enter the IT job market.',
    },
  },
]
