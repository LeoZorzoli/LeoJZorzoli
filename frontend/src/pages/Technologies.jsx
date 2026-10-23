import MaskIcon from '../components/MaskIcon'
import technologies from '../data/technologies'
import { useI18n } from '../i18n/LanguageContext'

const Technologies = () => {
  const { t, tx } = useI18n()

  return (
    <>
      <title>{`${t('nav.technologies')} · Leonel J Zorzoli`}</title>

      <h1 className="page-title">{t('nav.technologies')}</h1>
      {technologies.map(({ id, group, items }) => (
        <section key={id} className="tech-group" aria-labelledby={`tech-${id}`}>
          <h2 id={`tech-${id}`} className="section-title">{tx(group)}</h2>
          <ul className="tech-grid">
            {items.map(item => (
              <li key={item.name} className="tech-item">
                <MaskIcon src={item.icon} size={40} />
                <span className="tech-name">{item.name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}

export default Technologies
