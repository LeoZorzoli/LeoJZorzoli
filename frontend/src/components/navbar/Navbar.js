import React from 'react'
import Logo from './Logo'
import './navbar.css'
import './burger.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const toggle = () => {
        document.getElementById('navbar-toggler').classList.toggle("active");
    }

    return (
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light animate__animated animate__fadeIn animate__delay-1s">
                <Logo />
                <div onClick={toggle} id="navbar-toggler" className="navbar-toggler burger" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="collapse navbar-collapse" id="navbarLinks">
                    <ul className="navbar-nav ml-auto navbar-right">
                        <NavLink className="pill linkStyle" to="/aboutme">About Me</NavLink >
                        <NavLink className="pill linkStyle" to="/projects">Projects</NavLink >
                        <div className="redNavbar">
                            <NavLink to="https://twitter.com/ProgramandoM" className="pill linkStyle"><i className="fa fa-twitter"></i></NavLink>
                            <NavLink to="https://twitter.com/ProgramandoM" className="pill linkStyle"><i className="fa fa-google"></i></NavLink>
                            <NavLink to="https://twitter.com/ProgramandoM" className="pill linkStyle"><i className="fa fa-linkedin"></i></NavLink>
                            <NavLink to="https://twitter.com/ProgramandoM" className="pill linkStyle"><i className="fa fa-github"></i></NavLink>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar