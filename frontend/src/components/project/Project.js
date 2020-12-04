import React from 'react'
import '../pages/projects.css'

const Project = (props) => {
    return(
        <div className="col-md-12 col-sm-12 col-lg-4 project">
            <img src={props.src} alt={props.name} className="img-fluid img-responsive rounded"/>
            <div className="project-info rounded">
                <p className="tecnologies">{props.tecnologies}</p>
                <p className="projectName">{props.name}</p>
                <p className="projectDescription">{props.description}</p>
                <p className="links">
                    <a href={props.github} className="link" target="_blank" rel="noopener noreferrer">Github</a> 
                    <a href={props.demo} className="link" target="_blank" rel="noopener noreferrer">Demo</a>
                </p>
            </div>
        </div>
    )
}

export default Project
