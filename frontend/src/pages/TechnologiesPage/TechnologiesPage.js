import React from 'react';
import technologiesList from '../../utilities/technologiesList'
import { Image, Col, Row } from 'react-bootstrap'
import './TechnologiesPage.scss'

const Technology = ({technology}) => {
    return (
        <Col className="technology" xl={3} xs={4}>
            <p className="technology-name">{technology.name}</p>
            <Image src={technology.src} height="60px" />
        </Col>
    )
}

const TecnologiesPage = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <Row>
                {technologiesList.map(tec => 
                    <Technology key={tec.id} technology={tec}/>
                )}
            </Row>
        </div>
    )
}

export default TecnologiesPage