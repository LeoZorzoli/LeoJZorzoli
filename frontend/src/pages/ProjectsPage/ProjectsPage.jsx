import projectList from '../../utilities/projectsList';
import './ProjectsPage.css'

const Project = ({ project }) => {
    return (
        <div>
            <p className="project-tecnologies">{project.tecnologies}</p>
            <p className="project-description">{project.description}</p>
            <p>
                {project.demo ? <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">Demo</a> : null }
                {project.github ? <a className="project-link" href={project.github} target="_blank" rel="noreferrer">Repository</a> : null }
            </p>
        </div>
    )
}

const ProjectsPage = () => {
    return (
        <div>
            {projectList.map(p => 
                <details key={p.id} className="project">
                    <summary className="project-title">{p.name}</summary>
                    <Project project={p} />
                </details>
            )}
        </div>
    )
}

export default ProjectsPage;
