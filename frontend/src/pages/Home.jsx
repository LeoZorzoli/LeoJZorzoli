import { Link } from 'react-router'

import Rich from '../components/Rich'
import Timeline, { TimelineRow } from '../components/Timeline'
import now from '../data/now'
import timeline from '../data/timeline'

const typeLabels = {
  launch: 'Lanzamiento',
  project: 'Proyecto',
  work: 'Trabajo',
  education: 'Formación',
}

const formatMonth = value => {
  const [year, month] = value.split('-').map(Number)
  return new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' })
    .format(new Date(year, month - 1))
    .replace(' de ', ' ')
}

const Home = () => (
  <>
    <title>Leonel J Zorzoli · Desarrollador de Software</title>

    <h1 className="headline">
      Hago productos web que resuelven problemas reales, en la intersección entre{' '}
      <span className="accent">diseño</span>, producto y código.
    </h1>
    <p className="lead">
      Llevo cinco años construyendo software en producción: en Mercado Libre, sistemas backend para
      planificar y rutear envíos a escala en varios países de Latinoamérica y automatizaciones que
      redujeron el trabajo manual de los equipos, y en Crédito Argentino,
      creando aplicaciones de gestión y automatizaciones para las áreas comercial y de administración.
      Hoy llevo esa experiencia a proyectos propios y los desarrollo usando IA en cada etapa, de la
      idea al producto publicado: <strong>Rumbo</strong>, un juego diario para adivinar localidades
      argentinas, y <strong>LoteosAPP</strong>, un sistema de gestión de loteos para inmobiliarias.
    </p>

    <section className="now" aria-labelledby="now-title">
      <h2 id="now-title" className="section-title">Ahora · {formatMonth(now.updated)}</h2>
      <ul>
        {now.items.map(item => (
          <li key={item}><Rich text={item} /></li>
        ))}
      </ul>
    </section>

    <section className="section" aria-labelledby="timeline-title">
      <div className="section-header">
        <h2 id="timeline-title" className="section-title">Trayectoria</h2>
        <Link className="section-more" to="/experiencia">ver todo →</Link>
      </div>
      <Timeline>
        {timeline.map(entry => (
          <TimelineRow key={entry.date + entry.text} date={entry.date} label={typeLabels[entry.type]}>
            <p><Rich text={entry.text} /></p>
          </TimelineRow>
        ))}
      </Timeline>
    </section>
  </>
)

export default Home
