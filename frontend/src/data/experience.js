// Experiencia laboral, de la más nueva a la más vieja.
// `date` (inicio) y `end` (fin, o 'hoy') van en la columna de la izquierda.
// `meta` (opcional) se muestra debajo del título; `highlights` (opcional) es la lista de logros del puesto.
// `roles` (opcional) agrupa varios equipos dentro de una misma empresa: cada uno con sus fechas y logros.

export const experience = [
  {
    date: '2024·09',
    end: '2026·08',
    meta: 'híbrido',
    title: 'Mercado Libre',
    description: 'Equipos backend del área de Envíos (Última Milla), enfocados en la rentabilidad, la velocidad y la experiencia de los envíos. En ambos equipos, desarrollé con foco fuerte en IA, análisis y revisión de métricas, despliegues e infraestructura.',
    roles: [
      {
        date: '2026·03',
        end: '2026·08',
        title: 'Software Developer',
        team: 'Routing PrePost',
        description: 'Lideré la migración de los 3 flujos que generan los clusters de paquetes previos al ruteo desde dos APIs existentes a una librería y una API nueva, cuya arquitectura e infraestructura definí (streams, jobs y work queues).',
      },
      {
        date: '2024·09',
        end: '2026·03',
        title: 'Software Developer',
        team: 'Fleet Planning',
        highlights: [
          'Junto a los equipos de Producto y UX desarrollamos una aplicación web que genera planificaciones simuladas de envíos proyectados hasta un año hacia adelante.',
          'Diseñé y desarrollé un flujo automatizado que predice los paquetes que faltan despachar en D-1, con un motor de machine learning entrenado con el histórico por service center, ciclo y site (días, meses, años y feriados), con una precisión del 90%.',
          'Automaticé la generación de documentos y configuración para el rollout de nuevos service centers: pasamos de 5–10 a 100 por mes, cubrimos casi todos los sites de México, Brasil y Argentina y habilitamos la expansión a Chile, Colombia y Uruguay.',
        ],
      },
    ],
  },
  {
    date: '2021·07',
    end: '2024·08',
    meta: 'remoto',
    title: 'Analista Desarrollador de Software',
    org: 'Crédito Argentino',
    description: 'Equipo de sistemas del área comercial: todas las etapas de desarrollo, soporte y mantenimiento de aplicaciones clave para el área de administración.',
    highlights: [
      'Con dos compañeros lideramos el desarrollo de una aplicación web para gestionar usuarios (alta, modificación y baja) y sus permisos sobre las aplicaciones internas.',
      'Junto al equipo de administración desarrollé el sistema detrás de un bot de WhatsApp que permite a los comercios generar créditos de consumo para sus clientes.',
      'Con el equipo de infraestructura desarrollé un sistema de autenticación con segundo factor para las aplicaciones web.',
    ],
  },
]

export const volunteering = [
  {
    date: '2025·10',
    end: 'hoy',
    title: 'Mentor',
    org: 'Junior Achievement',
    description: 'Acompaño como mentor a jóvenes estudiantes de tecnología en su inserción en el mercado laboral IT.',
  },
]
