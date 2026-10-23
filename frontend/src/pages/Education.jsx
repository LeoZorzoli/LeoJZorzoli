import diploma from '../assets/diploma.png'
import graduated from '../assets/graduated.png'
import Entry from '../components/Entry'
import MaskIcon from '../components/MaskIcon'
import Timeline, { TimelineRow } from '../components/Timeline'
import education from '../data/education'

const Education = () => (
  <>
    <title>Formación · Leonel Zorzoli</title>

    <h1 className="page-title">Formación</h1>
    <Timeline>
      {education.map(entry => (
        <TimelineRow key={entry.title} date={entry.date}>
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
                <MaskIcon src={diploma} />
              </a>
            ) : (
              <span className="entry-icon"><MaskIcon src={graduated} /></span>
            )}
            <div>
              <Entry entry={entry}>
                {entry.certificate && (
                  <>
                    {' · '}
                    <a href={entry.certificate} target="_blank" rel="noreferrer">certificado ↗</a>
                  </>
                )}
              </Entry>
            </div>
          </div>
        </TimelineRow>
      ))}
    </Timeline>
  </>
)

export default Education
