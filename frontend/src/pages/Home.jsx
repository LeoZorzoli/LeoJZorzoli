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
    <title>Leonel Zorzoli · desarrollador web</title>

    <h1 className="headline">
      Hago productos web que resuelven problemas reales, en la intersección entre{' '}
      <span className="accent">diseño</span>, producto y código.
    </h1>
    <p className="lead">
      Empecé con CS50 en 2020 y desde entonces construyo aplicaciones de punta a punta.
      [COMPLETAR: rol y stack actual]
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
