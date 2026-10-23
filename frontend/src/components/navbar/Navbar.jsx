import './navbar.css'

import resume from '../../utilities/resume/resume.pdf'

import { NavLink, Link } from 'react-router'

const NavbarComponent = () => {
    return (
        <div className="principalNavbar">
            <div className="my-info">
                <p className="text-navbar text1">home page of</p>
                <Link className="logo" to="/"><p className="text-navbar text2"><strong>Leonel Zorzoli</strong></p></Link>
                <p><a href= "mailto:zorzolileonel@gmail.com" className="text-navbar text3">zorzolileonel@gmail.com</a></p>
                <a href="https://twitter.com/ProgramandoM" target="_blank" rel="noreferrer" className="navbar-icon">twitter</a>
                <a href="https://www.linkedin.com/in/leonelzorzoli/" target="_blank" rel="noreferrer" className="navbar-icon">linkedin</a>
                <a href="https://github.com/LeoZorzoli" target="_blank" rel="noreferrer" className="navbar-icon">github</a>
            </div>
            <nav className="flex-column">
                <NavLink className="link-navbar text-navbar" to="/bio">Bio</NavLink>
                <NavLink className="link-navbar text-navbar" to="/education">Education</NavLink>
                <NavLink className="link-navbar text-navbar" to="/experience">Experience</NavLink>
                <NavLink className="link-navbar text-navbar" to="/projects">Projects</NavLink>
                <NavLink className="link-navbar text-navbar" to="/technologies">Technologies</NavLink>
                <NavLink className="link-navbar text-navbar" to="/publications">Publications</NavLink>
                <a className="link-navbar text-navbar" href={resume} target="_blank" rel="noreferrer">Resume</a>
            </nav>
        </div>
    )
}

export default NavbarComponent
