import { Link, NavLink } from 'react-router'

import { LANGUAGES, useI18n } from '../i18n/LanguageContext'
import { useTheme } from '../theme'
import { MoonIcon, SunIcon } from './icons'

const links = [
  { to: '/', label: 'nav.home', end: true },
  { to: '/sobre-mi', label: 'nav.about' },
  { to: '/proyectos', label: 'nav.projects' },
  { to: '/experiencia', label: 'nav.experience' },
  { to: '/formacion', label: 'nav.education' },
  { to: '/tecnologias', label: 'nav.technologies' },
]

const languageNames = { es: 'Español', en: 'English' }

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useI18n()
  const isDark = theme === 'dark'

  return (
    <aside className="sidebar">
      <p className="whoami">~/whoami <span className="prompt">$</span></p>
      <p className="name"><Link to="/">Leonel J Zorzoli</Link></p>
      <p className="tagline">{t('tagline')}</p>

      <p className="contact">
        <a href="mailto:zorzolileonel@gmail.com">zorzolileonel@gmail.com</a>
        <br />
        <a href="https://github.com/LeoZorzoli" target="_blank" rel="noreferrer">github</a>
        <span className="sep"> · </span>
        <a href="https://www.linkedin.com/in/leonelzorzoli/" target="_blank" rel="noreferrer">linkedin</a>
      </p>

      <nav className="menu" aria-label={t('nav.label')}>
        <ul>
          {links.map(link => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end}>{t(link.label)}</NavLink>
            </li>
          ))}
          <li>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">CV ↗</a>
          </li>
        </ul>
      </nav>

      <div className="controls">
        <div className="lang-switch" role="group" aria-label={t('lang.label')}>
          {LANGUAGES.map(code => (
            <button
              key={code}
              type="button"
              className="control"
              lang={code}
              aria-label={languageNames[code]}
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="control"
          onClick={toggleTheme}
          aria-label={isDark ? t('theme.toLight') : t('theme.toDark')}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
