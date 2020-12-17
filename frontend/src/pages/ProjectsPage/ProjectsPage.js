import React from 'react';
import projectList from '../../utilities/projectsList';
import './ProjectsPage.scss'

import { Col, NavLink, Accordion, Card } from 'react-bootstrap'

const Project = ({ project }) => {
    return (
        <Col xl={12}>
            <p className="project-tecnologies">{project.tecnologies}</p>
            <p className="project-description">{project.description}</p>
            <p>
                {project.demo ? <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">Demo</a> : null }
                {project.github ? <a className="project-link" href={project.github} target="_blank" rel="noreferrer">Repository</a> : null }
            </p>
        </Col>
    )
}

const ProjectsPage = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <Accordion defaultActiveKey="0">
                {projectList.map(p => 
                    <Card key={p.id} className="project">
                        <Card.Header>
                            <Accordion.Toggle className="project-title" as={NavLink} eventKey={p.name}>
                                {p.name}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={p.name}>
                            <Card.Body><Project project={p} /></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )}
            </Accordion>
        </div>
    )
}

export default ProjectsPage;