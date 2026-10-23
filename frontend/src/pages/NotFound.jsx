import { Link } from 'react-router'

import { useI18n } from '../i18n/LanguageContext'

const NotFound = () => {
  const { t } = useI18n()

  return (
    <>
      <title>{`${t('notFound.title')} · Leonel J Zorzoli`}</title>

      <h1 className="page-title">{t('notFound.title')}</h1>
      <p className="lead">
        {t('notFound.text')} <Link to="/">{t('notFound.back')}</Link>.
      </p>
    </>
  )
}

export default NotFound
