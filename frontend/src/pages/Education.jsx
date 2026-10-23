import diploma from '../assets/diploma.png'
import graduated from '../assets/graduated.png'
import Entry from '../components/Entry'
import MaskIcon from '../components/MaskIcon'
import Timeline, { TimelineRow } from '../components/Timeline'
import { courses, studies } from '../data/education'

const EducationRow = ({ entry, icon }) => (
  <TimelineRow date={entry.date} end={entry.end}>
    <div className="entry-with-icon">
      {entry.certificate ? (
        <a
          className="entry-icon"
          href={entry.certificate}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
          aria-hidden="true"
        >
          <MaskIcon src={icon} />
        </a>
      ) : (
        <span className="entry-icon"><MaskIcon src={icon} /></span>
      )}
      <div>
        <Entry entry={entry}>
          {entry.certificate && (
            <a href={entry.certificate} target="_blank" rel="noreferrer">certificado ↗</a>
          )}
        </Entry>
      </div>
    </div>
  </TimelineRow>
)

const Education = () => (
  <>
    <title>Formación · Leonel J Zorzoli</title>

    <h1 className="page-title">Formación</h1>

    <section aria-labelledby="studies-title">
      <h2 id="studies-title" className="section-title">Estudios</h2>
      <Timeline>
        {studies.map(entry => <EducationRow key={entry.title} entry={entry} icon={graduated} />)}
      </Timeline>
    </section>

    <section className="section" aria-labelledby="courses-title">
      <h2 id="courses-title" className="section-title">Cursos y certificaciones</h2>
      <Timeline>
        {courses.map(entry => <EducationRow key={entry.title} entry={entry} icon={diploma} />)}
      </Timeline>
    </section>
  </>
)

export default Education
