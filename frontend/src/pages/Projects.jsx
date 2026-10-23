import projects from '../data/projects'
import { useI18n } from '../i18n/LanguageContext'

const Projects = () => {
  const { t, tx } = useI18n()

  return (
    <>
      <title>{`${t('nav.projects')} · Leonel J Zorzoli`}</title>

      <h1 className="page-title">{t('nav.projects')}</h1>
      <ul className="projects">
        {projects.map(project => (
          <li key={project.name} className="project">
            <div className="project-header">
              <h2 className="project-name">{project.name}</h2>
              <span className="project-meta">
                {project.year}
                {project.status === 'archived' && <span className="tag">{t('projects.archived')}</span>}
              </span>
            </div>
            <p className="project-stack">{project.stack}</p>
            <p className="project-description">{tx(project.description)}</p>
            {project.links.length > 0 && (
              <p className="project-links">
                {project.links.map(link => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {t(`link.${link.type}`)} ↗
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Projects
