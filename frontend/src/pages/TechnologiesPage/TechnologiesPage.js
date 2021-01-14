import React from 'react';
import technologiesList from '../../utilities/technologiesList'
import { Image, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap'
import './TechnologiesPage.scss'

const Technology = ({technology}) => {
    return (
        <Col className="technology" xl={3} xs={4}>
            <p className="technology-name">{technology.name}</p>
            <OverlayTrigger 
                placement="bottom"
                overlay={
                    <Tooltip id={`tooltip-${technology.name}`}>
                        {technology.tooltip}
                    </Tooltip>
                }
            >
                <Image src={technology.src} height="60px" />
            </OverlayTrigger>
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