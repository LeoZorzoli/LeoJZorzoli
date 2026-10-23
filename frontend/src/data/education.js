// Formación, de la más nueva a la más vieja.
// `date` va en la columna de la izquierda (finalización); `period` es el rango completo que se muestra debajo del título.
// `certificate` apunta a un archivo dentro de /public; si está, el ícono de diploma linkea a él.

const education = [
  {
    date: '2023·04',
    period: 'abr 2023 — actualidad',
    title: 'Tecnicatura en Informática aplicada al Diseño Multimedial y de Sitios Web',
    org: 'Universidad Nacional del Litoral',
  },
  {
    date: '2020·11',
    period: 'nov 2020',
    title: 'Full Stack Open',
    org: 'Universidad de Helsinki',
    description: 'React, Redux, Node.js, Express, MongoDB y GraphQL.',
    certificate: '/diplomas/full-stack-open.png',
  },
  {
    date: '2020·10',
    period: 'ago 2020 — oct 2020',
    title: 'Soporte de TI',
    org: 'Google',
    description: 'Redes, computación en la nube, Windows y Linux, administración de sistemas y resolución de problemas.',
    certificate: '/diplomas/google-it-support.pdf',
  },
  {
    date: '2020·08',
    period: 'jun 2020 — ago 2020',
    title: 'CS50W: programación web con Python y JavaScript',
    org: 'HarvardX',
    description: 'Python, Flask, Django, JavaScript, Git, diseño de bases de datos y APIs, escalabilidad y seguridad.',
    certificate: '/diplomas/cs50w.pdf',
  },
  {
    date: '2020·06',
    period: 'abr 2020 — jun 2020',
    title: 'CS50x: Introducción a las ciencias de la computación',
    org: 'HarvardX',
    description: 'Algoritmos, estructuras de datos, C, Python y SQL.',
    certificate: '/diplomas/cs50x.pdf',
  },
  {
    date: '2012',
    period: '2007 — 2012',
    title: 'Secundario con orientación en Economía y Administración',
    org: 'Instituto Comercial Crespo',
  },
]

export default education
