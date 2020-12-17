import React from 'react'
import './navbar.scss'

import resume from '../../utilities/resume/resume.pdf'

import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const NavbarComponent = () => {

    const toggle = () => {
        document.getElementById('navbar-toggler').classList.toggle("active");
    }

    return (

        <div className="principalNavbar animate__animated animate__fadeIn">
            <div className="my-info">
                <p className="text-navbar text1">home page of</p>
                <Link className="logo" to="/"><p className="text-navbar text2"><strong>Leonel Zorzoli</strong></p></Link>
                <p><a href= "mailto:zorzolileonel@gmail.com" className="text-navbar text3">zorzolileonel@gmail.com</a></p>
                <a href="https://twitter.com/ProgramandoM" target="_blank" rel="noreferrer"><i className="fa fa-twitter navbar-icon"></i></a>
                <a href="https://www.linkedin.com/in/leonelzorzoli/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square navbar-icon"></i></a>
                <a href="https://github.com/LeoZorzoli" target="_blank" rel="noreferrer"><i className="fa fa-github navbar-icon"></i></a>
            </div>
            <Navbar className="navbarExp" expand="xl">
                <Navbar.Toggle className="toggler" aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="flex-column ml-auto">
                        <NavLink className="link-navbar text-navbar" to="/bio">Bio</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/education">Education</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/experience">Experience</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/projects">Projects</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/tecnologies">Tecnologies</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/publications">Publications</NavLink>
                        <a className="link-navbar text-navbar" href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent