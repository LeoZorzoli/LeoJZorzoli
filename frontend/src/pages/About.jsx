import { useI18n } from '../i18n/LanguageContext'

const About = () => {
  const { t } = useI18n()

  return (
    <>
      <title>{`${t('nav.about')} · Leonel J Zorzoli`}</title>

      <h1 className="page-title">{t('nav.about')}</h1>
      <div className="prose">
        {t('about.paragraphs').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        <p className="interests">
          <span className="section-title">{t('about.interests.title')}</span>
          {t('about.interests')}
        </p>
      </div>
    </>
  )
}

export default About
