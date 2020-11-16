import React from 'react'
import './projects.css'
import projectsList from '../project/projectsList'
import Project from '../project/Project'   

const Projects = () => {
    return(
        <div className="principalProjects animate__animated animate__fadeIn animate__slower">
            <div className="row">
                {projectsList.map(project => 
                    <Project 
                        key={project.name} 
                        name={project.name} 
                        description={project.description} 
                        src={project.src} 
                        github={project.github} 
                        demo={project.demo} 
                        tecnologies={project.tecnologies}
                    />
                )}
            </div>
        </div>
    )
}

export default Projects