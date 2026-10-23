import projects from '../data/projects'

const Projects = () => (
  <>
    <title>Proyectos · Leonel Zorzoli</title>

    <h1 className="page-title">Proyectos</h1>
    <ul className="projects">
      {projects.map(project => (
        <li key={project.name} className="project">
          <div className="project-header">
            <h2 className="project-name">{project.name}</h2>
            <span className="project-meta">
              {project.year}
              {project.status === 'archived' && <span className="tag">archivado</span>}
            </span>
          </div>
          <p className="project-stack">{project.stack}</p>
          <p className="project-description">{project.description}</p>
          {project.links.length > 0 && (
            <p className="project-links">
              {project.links.map(link => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </p>
          )}
        </li>
      ))}
    </ul>
  </>
)

export default Projects
