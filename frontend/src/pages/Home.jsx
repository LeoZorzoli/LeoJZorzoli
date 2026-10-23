import { Link } from 'react-router'

import Rich from '../components/Rich'
import Timeline, { TimelineRow } from '../components/Timeline'
import now from '../data/now'
import timeline from '../data/timeline'
import { useI18n } from '../i18n/LanguageContext'

const formatMonth = (value, locale) => {
  const [year, month] = value.split('-').map(Number)
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' })
    .format(new Date(year, month - 1))
    .replace(' de ', ' ')
}

const Home = () => {
  const { t, tx, locale } = useI18n()

  return (
    <>
      <title>{`Leonel J Zorzoli · ${t('home.title')}`}</title>

      <h1 className="headline">
        {t('home.headline.before')}{' '}
        <span className="accent">{t('home.headline.accent')}</span>{t('home.headline.after')}
      </h1>
      <p className="lead"><Rich text={t('home.lead')} /></p>

      <section className="now" aria-labelledby="now-title">
        <h2 id="now-title" className="section-title">
          {t('home.now')} · {formatMonth(now.updated, locale)}
        </h2>
        <ul>
          {now.items.map((item, i) => (
            <li key={i}><Rich text={tx(item)} /></li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="timeline-title">
        <div className="section-header">
          <h2 id="timeline-title" className="section-title">{t('home.timeline')}</h2>
          <Link className="section-more" to="/experiencia">{t('home.more')}</Link>
        </div>
        <Timeline>
          {timeline.map((entry, i) => (
            <TimelineRow key={i} date={entry.date} label={t(`type.${entry.type}`)}>
              <p><Rich text={tx(entry.text)} /></p>
            </TimelineRow>
          ))}
        </Timeline>
      </section>
    </>
  )
}

export default Home
