import React from 'react';
import './PublicationsPage.scss';
import publicationsList from '../../utilities/publicationsList';
import { Row, Col } from 'react-bootstrap'

const Publication = ({ publication }) => {
    return (
            <div className="publication">
                <p className="publication-title"><a className="publi-link" href={publication.src} target="_blank" rel="noreferrer">{publication.type} - {publication.name} </a></p>
                <p className="publication-school">{publication.date}, <span className="publication-date">{publication.read} read</span></p>
            </div>
    )
}

const PublicationsPage = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <p className="publication-info">Here I am going to upload all the interesting things that I will be posting on the internet 
                whether they are designs, blogs, post or new ideas.</p>
            {publicationsList.map(publi => 
                <Publication publication={publi} key={publi.id} />
            )}
        </div>
    )
}

export default PublicationsPage