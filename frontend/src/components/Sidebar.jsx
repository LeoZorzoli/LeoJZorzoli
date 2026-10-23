import { Link, NavLink } from 'react-router'

import { useTheme } from '../theme'
import { MoonIcon, SunIcon } from './icons'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/cv', label: 'CV' },
]

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <aside className="sidebar">
      <p className="whoami">~/leonel <span className="prompt">$</span> whoami</p>
      <p className="name"><Link to="/">Leonel Zorzoli</Link></p>
      <p className="tagline">desarrollador web · Argentina</p>

      <p className="contact">
        <a href="mailto:zorzolileonel@gmail.com">zorzolileonel@gmail.com</a>
        <br />
        <a href="https://github.com/LeoZorzoli" target="_blank" rel="noreferrer">github</a>
        <span className="sep"> · </span>
        <a href="https://www.linkedin.com/in/leonelzorzoli/" target="_blank" rel="noreferrer">linkedin</a>
        <span className="sep"> · </span>
        <a href="/cv.pdf" target="_blank" rel="noreferrer">cv.pdf</a>
      </p>

      <nav className="menu" aria-label="Principal">
        <ul>
          {links.map(link => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="controls">
        <button
          type="button"
          className="control"
          onClick={toggleTheme}
          aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
