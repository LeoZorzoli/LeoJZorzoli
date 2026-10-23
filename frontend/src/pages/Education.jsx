import diploma from '../assets/diploma.png'
import graduated from '../assets/graduated.png'
import Entry from '../components/Entry'
import MaskIcon from '../components/MaskIcon'
import Timeline, { TimelineRow } from '../components/Timeline'
import { courses, studies } from '../data/education'
import { useI18n } from '../i18n/LanguageContext'

const EducationRow = ({ entry, icon }) => {
  const { t } = useI18n()

  return (
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
              <a href={entry.certificate} target="_blank" rel="noreferrer">{t('education.certificate')}</a>
            )}
          </Entry>
        </div>
      </div>
    </TimelineRow>
  )
}

const Education = () => {
  const { t } = useI18n()

  return (
    <>
      <title>{`${t('nav.education')} · Leonel J Zorzoli`}</title>

      <h1 className="page-title">{t('nav.education')}</h1>

      <section aria-labelledby="studies-title">
        <h2 id="studies-title" className="section-title">{t('education.studies')}</h2>
        <Timeline>
          {studies.map((entry, i) => <EducationRow key={i} entry={entry} icon={graduated} />)}
        </Timeline>
      </section>

      <section className="section" aria-labelledby="courses-title">
        <h2 id="courses-title" className="section-title">{t('education.courses')}</h2>
        <Timeline>
          {courses.map((entry, i) => <EducationRow key={i} entry={entry} icon={diploma} />)}
        </Timeline>
      </section>
    </>
  )
}

export default Education
