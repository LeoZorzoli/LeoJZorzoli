import React from 'react';
import './EducationPage.scss'
import { Row, Col, Image } from 'react-bootstrap'
import educationList from '../../utilities/educationList';

const Education = ({ edu }) => {
    return (
        <Row>
            <Col xl={1} xs={1}>
            <a href={edu.dip} target="_blank" rel="noreferrer"><Image src={edu.img} width="36px" /></a>
            </Col>
            <Col xl={11} xs={10} className="education">
                <p className="edu-title">{edu.title}</p>
                <p className="edu-school">{edu.school}, <span className="edu-date">{edu.date}</span></p>
            </Col>
        </Row>
    )
}

const EducationPage = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <p className="education-info">I am a person who currently studies online on his own but wants to start a career in software engineering in the future.</p>
            {
                educationList.map(education => <Education key={education.id} edu={education} /> )
            }
        </div>
    )
}

export default EducationPage;