import React, { useState } from 'react'
import './navbar.scss'

import resume from '../../utilities/resume/resume.pdf'

import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="principalNavbar animate__animated animate__fadeIn">
            <div className="my-info">
                <p className="text-navbar text1">home page of</p>
                <Link onClick={() => setExpanded(false)} className="logo" to="/"><p className="text-navbar text2"><strong>Leonel Zorzoli</strong></p></Link>
                <p><a href= "mailto:zorzolileonel@gmail.com" className="text-navbar text3">zorzolileonel@gmail.com</a></p>
                <a href="https://twitter.com/ProgramandoM" target="_blank" rel="noreferrer"><i className="fa fa-twitter navbar-icon"></i></a>
                <a href="https://www.linkedin.com/in/leonelzorzoli/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square navbar-icon"></i></a>
                <a href="https://github.com/LeoZorzoli" target="_blank" rel="noreferrer"><i className="fa fa-github navbar-icon"></i></a>
            </div>
            <Navbar expanded={expanded} className="navbarExp" expand="xl">
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} className="toggler" aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="flex-column ml-auto">
                        <NavLink onClick={() => setExpanded(false)} className="link-navbar text-navbar" to="/bio">Bio</NavLink>
                        <NavLink onClick={() => setExpanded(false)} className="link-navbar text-navbar" to="/education">Education</NavLink>
                        <NavLink onClick={() => setExpanded(false)} className="link-navbar text-navbar" to="/experience">Experience</NavLink>
                        <NavLink onClick={() => setExpanded(false)} className="link-navbar text-navbar" to="/projects">Projects</NavLink>
                        <NavLink onClick={() => setExpanded(false)} className="link-navbar text-navbar" to="/technologies">Technologies</NavLink>
                        <NavLink onClick={() => setExpanded(false)} className="link-navbar text-navbar" to="/publications">Publications</NavLink>
                        <a className="link-navbar text-navbar" href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent