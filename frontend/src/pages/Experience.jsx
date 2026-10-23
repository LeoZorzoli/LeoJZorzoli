import Entry from '../components/Entry'
import Timeline, { TimelineRow } from '../components/Timeline'
import experience from '../data/experience'

const Experience = () => (
  <>
    <title>Experiencia · Leonel Zorzoli</title>

    <h1 className="page-title">Experiencia</h1>
    <Timeline>
      {experience.map(entry => (
        <TimelineRow key={entry.title} date={entry.date}>
          <Entry entry={entry} />
        </TimelineRow>
      ))}
    </Timeline>

    <a className="button" href="/cv.pdf" download="Leonel-Zorzoli-CV.pdf">Descargar CV en PDF</a>
  </>
)

export default Experience
