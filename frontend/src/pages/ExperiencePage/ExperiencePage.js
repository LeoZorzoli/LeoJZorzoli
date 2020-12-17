import React from 'react'
import './ExperiencePage.scss'
import workList from '../../utilities/workList'
import { Row, Col } from 'react-bootstrap'

const Work = ({experience}) => {
    return (
        <Row>
            <Col>
                <p className="experience-title">{experience.name}, <span className="experience-date">{experience.date}</span></p>
                <ul className="experience">
                    {experience.work.map(work => <li key={work}>{work}</li>)}
                </ul>
            </Col>
        </Row>
    )
}

const ExperiencePage = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <p className="experience-info">Although I still have no experience in any company, I am always doing work as a freelancer and my own projects.</p>
            {workList.map(work => 
                <Work key={work.id} experience={work} />    
            )}
        </div>
    )
}

export default ExperiencePage