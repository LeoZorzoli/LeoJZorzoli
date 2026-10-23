import Entry from '../components/Entry'
import Timeline, { TimelineRow } from '../components/Timeline'
import { experience, volunteering } from '../data/experience'

const Rows = ({ entries }) => (
  <Timeline>
    {entries.map(entry => (
      <TimelineRow key={entry.title + entry.date} date={entry.date} end={entry.end}>
        <Entry entry={entry} />
      </TimelineRow>
    ))}
  </Timeline>
)

const Experience = () => (
  <>
    <title>Experiencia · Leonel J Zorzoli</title>

    <h1 className="page-title">Experiencia</h1>
    <Rows entries={experience} />

    <section className="section" aria-labelledby="volunteering-title">
      <h2 id="volunteering-title" className="section-title">Voluntariado</h2>
      <Rows entries={volunteering} />
    </section>

    <a className="button" href="/cv.pdf" download="Leonel-Zorzoli-CV.pdf">Descargar CV en PDF</a>
  </>
)

export default Experience
