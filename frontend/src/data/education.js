// Formación, de la más nueva a la más vieja.
// `date` (y `end` si es un rango, o 'hoy') van en la columna de la izquierda.
// Los textos traducibles van en `{ es, en }`; si falta `en`, se muestra el español. Los nombres de
// cursos dictados en español quedan igual en los dos idiomas.
// `certificate` es el link a la credencial (o un archivo dentro de /public); si está, el ícono de diploma linkea a él.

// Estudios formales.
export const studies = [
  {
    date: '2023·04',
    end: 'hoy',
    title: { es: 'Tecnicatura en Informática aplicada al Diseño Multimedial y de Sitios Web', en: 'Technical degree in Computing applied to Multimedia and Web Design' },
    org: 'Universidad Nacional del Litoral',
  },
  {
    date: '2007',
    end: '2012',
    title: { es: 'Secundario con orientación en Economía y Administración', en: 'High school, specializing in Economics and Administration' },
    org: 'Instituto Comercial Crespo',
  },
]

// Cursos y certificaciones (fuente: LinkedIn). `date` es la fecha de expedición.
export const courses = [
  {
    date: '2024·09',
    title: 'Fundamentos de Nube AWS',
    org: 'Amazon Web Services',
    certificate: '/diplomas/aws-fundamentos-nube.pdf',
  },
  {
    date: '2024·09',
    title: 'Gestión de Proyectos y Fundamentos de metodología Agile',
    org: 'Santander Open Academy',
    certificate: '/diplomas/santander-agile.pdf',
  },
  {
    date: '2024·04',
    title: 'Reactive Angular Course (with RxJs, Angular 17)',
    org: 'Udemy',
    certificate: 'https://udemy-certificate.s3.amazonaws.com/image/UC-d3a0d7b1-1d5f-45f9-aa77-1913a7138ab5.jpg',
  },
  {
    date: '2023·06',
    title: 'Patrones de diseño en C# aplicado en ASP.NET',
    org: 'Udemy',
    certificate: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8390a56f-0fc6-450e-8e82-0bd856ffd0b2.jpg',
  },
  {
    date: '2022·11',
    title: 'Diseño UX: experiencia de usuario UX/UI + Figma 2023',
    org: 'Udemy',
    certificate: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a9a699b4-e318-4f28-b5b7-9b61068b05d4.jpg',
  },
  {
    date: '2022·01',
    title: 'Desarrollo Web con Angular 11+. ¡La biblia!',
    org: 'Udemy',
    certificate: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5761080a-5c7d-4c5e-b55b-b00141122ce4.jpg',
  },
  {
    date: '2021·08',
    title: 'Certificación Microsoft Programming in C#',
    org: 'Udemy',
    certificate: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f731d4d3-b0b5-4ede-af28-76985177f63a.jpg',
  },
  {
    date: '2020·11',
    end: '2021·02',
    title: 'Full Stack Open',
    org: { es: 'Universidad de Helsinki', en: 'University of Helsinki' },
    description: { es: 'React, Redux, Node.js, Express, MongoDB y GraphQL.', en: 'React, Redux, Node.js, Express, MongoDB and GraphQL.' },
    certificate: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/fa5ea631a2fb39fab3f20f36720bc72a',
  },
  {
    date: '2020·11',
    title: 'Google IT Support Professional Certificate',
    org: 'Google',
    description: { es: 'Redes, computación en la nube, Windows y Linux, administración de sistemas y resolución de problemas.', en: 'Networking, cloud computing, Windows and Linux, systems administration and troubleshooting.' },
    certificate: 'https://www.coursera.org/account/accomplishments/specialization/certificate/T5SLHLEUKD7T',
  },
  {
    date: '2020·07',
    title: { es: 'CS50W: programación web con Python y JavaScript', en: 'CS50W: Web Programming with Python and JavaScript' },
    org: 'HarvardX',
    description: { es: 'Python, Flask, Django, JavaScript, Git, diseño de bases de datos y APIs, escalabilidad y seguridad.', en: 'Python, Flask, Django, JavaScript, Git, database and API design, scalability and security.' },
    certificate: 'https://certificates.cs50.io/437ca50e-b43f-4c70-8af5-893e7bf85bf1',
  },
  {
    date: '2020',
    title: { es: 'CS50AI: Introducción a la inteligencia artificial con Python', en: 'CS50AI: Introduction to Artificial Intelligence with Python' },
    org: 'HarvardX',
  },
  {
    date: '2020·04',
    end: '2020·06',
    title: { es: 'CS50x: Introducción a las ciencias de la computación', en: 'CS50x: Introduction to Computer Science' },
    org: 'HarvardX',
    description: { es: 'Algoritmos, estructuras de datos, C, Python y SQL.', en: 'Algorithms, data structures, C, Python and SQL.' },
    certificate: '/diplomas/cs50x.pdf',
  },
]
