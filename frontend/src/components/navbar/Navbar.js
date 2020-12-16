import React from 'react'
import './navbar.scss'

import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const NavbarComponent = () => {

    const toggle = () => {
        document.getElementById('navbar-toggler').classList.toggle("active");
    }

    return (

        <div className="principalNavbar animate__animated animate__fadeIn animate__slower">
            <div className="my-info">
                <p className="text-navbar text1">home page of</p>
                <Link className="logo" to="/"><p className="text-navbar text2"><strong>Leonel Zorzoli</strong></p></Link>
                <p className="text-navbar text3">zorzolileonel@gmail.com</p>
                <a href="https://twitter.com/ProgramandoM" target="_blank"><i className="fa fa-twitter navbar-icon"></i></a>
                <a href="https://www.linkedin.com/in/leonelzorzoli/" target="_blank"><i className="fa fa-linkedin-square navbar-icon"></i></a>
                <a href="https://github.com/LeoZorzoli" target="_blank"><i className="fa fa-github navbar-icon"></i></a>
            </div>
            <Navbar className="navbarExp" expand="lg">
                <Navbar.Toggle className="toggler" aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="flex-column ml-auto">
                        <NavLink className="link-navbar text-navbar" to="/bio">Bio</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/contact">Contact</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/projects">Projects</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/tecnologies">Tecnologies</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/publications">Publications</NavLink>
                        <NavLink className="link-navbar text-navbar" to="/resume">Resume</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent