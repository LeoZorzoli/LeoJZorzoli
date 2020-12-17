import React from 'react';
import tecnologiesList from '../../utilities/tecnologiesList'
import { Image, Col, Row } from 'react-bootstrap'
import './TecnologiesPage.scss'

const Tecnology = ({tecnology}) => {
    return (
        <Col className="tecnology" xl={3} xs={4}>
            <p className="tecnology-name">{tecnology.name}</p>
            <Image src={tecnology.src} height="60px" />
        </Col>
    )
}

const TecnologiesPage = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <Row>
                {tecnologiesList.map(tec => 
                    <Tecnology key={tec.id} tecnology={tec}/>
                )}
            </Row>
        </div>
    )
}

export default TecnologiesPage