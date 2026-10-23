import Entry from '../components/Entry'
import Timeline, { TimelineRow } from '../components/Timeline'
import { experience, volunteering } from '../data/experience'
import { useI18n } from '../i18n/LanguageContext'

const Rows = ({ entries }) => (
  <Timeline>
    {entries.map(entry => (
      <TimelineRow key={entry.date} date={entry.date} end={entry.end}>
        <Entry entry={entry} />
      </TimelineRow>
    ))}
  </Timeline>
)

const Experience = () => {
  const { t } = useI18n()

  return (
    <>
      <title>{`${t('nav.experience')} · Leonel J Zorzoli`}</title>

      <h1 className="page-title">{t('nav.experience')}</h1>
      <Rows entries={experience} />

      <section className="section" aria-labelledby="volunteering-title">
        <h2 id="volunteering-title" className="section-title">{t('experience.volunteering')}</h2>
        <Rows entries={volunteering} />
      </section>

      <a className="button" href="/cv.pdf" download="Leonel-J-Zorzoli-CV.pdf">{t('experience.download')}</a>
    </>
  )
}

export default Experience
