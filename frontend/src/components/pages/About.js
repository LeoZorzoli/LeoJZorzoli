import React from 'react'
import './about.css'

const About = () => {
    return(
        <div className="principalAbout animate__animated animate__fadeIn animate__slower">
            <div className="row">
                <div className="col-xl-6 col-md-12 col-sm-12">
                    <p className="aboutText introduction">
                        I'm a passionate about Technologies who have been familiar
                        with them since 1999, when i was four years old. At the age of fifteen 
                        I met Flash and for the first time I wrote a line of code, it was a little hobby for a short time until I completely forgot about it. 
                        Life took me to the side of the economy, but it could never fill me like computer science. 
                        It was not until 2020 that I re-entered the world of programming and then the curiosity to learn new things led me through 
                        different courses on software engineering. Today I feel totally renewed and with a long way to go, 
                        with many lessons learned and many to come.
                    </p>
                </div>
                <div className="col-xl-6 col-md-12 col-sm-12">
                    <div className="timeline">
                    <h1 className="titleInfo">My life like a developer</h1>
                        <div className="timeline-item">
                            <p className="titleAbout">Lost in the mist</p>
                            <p className="descriptionAbout">
                                2020 March in the middle of the pandemic for Covid-19 I started to take my first steps in HTML, CSS and Javascript, 
                                learning how to create basic pages from scratch. It was a rough start 
                                but it opened my head wide enough to become more interested in this world.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <p className="titleAbout">What is that?</p>
                            <p className="descriptionAbout">
                                First week of April surfing the internet and looking for new tools and things to 
                                learn I come across the Harvard CS50x course. It automatically caught my attention 
                                and without hesitation I began to pass it. Almost without realizing it, I had learned 
                                the fundamentals of software engineering and programming in C and Python. They were 
                                crazy times with many challenges but I managed to overcome them and by June I had 
                                already completed my final project. It was one of the best experiences I had in a 
                                course and much of it was due to the excellent teacher David J. Malan and all the CS50 stuff.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <p className="titleAbout">Hay caramba!</p>
                            <p className="descriptionAbout">
                                Interested much more in the world of web programming, and after having a few insights 
                                into front-end and back-end programming I find myself undecided about what I should continue learning, 
                                go the way of React and Node or continue with Python and Django. Difficult decision, no? Well finally 
                                choose to continue with Harvard and guide myself through the CS50 Web programming with Python and 
                                Javascript course. Here I thought.. I already know how to use HTML, CSS, Javascript and also Python,
                                this course should be easy.. Well NO! I spent three months battling with the classes,
                                materials and projects, but at the end of the tunnel I found the light and by September my path through 
                                CS50 had concluded (For now). It was crazy and I learned too many things in a very short time, from creating 
                                a Wikipedia or an E-Commerce, to creating a real-time chat or my own social network. Again, it wouldn't have 
                                been possible if it weren't for the CS50 stuff and the amazing professor Brian Yu, 
                                who finally got me to understand React.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row skillsDiv">
                <div className="col-xl-6 col-md-12 col-sm-12">
                    <p className="titleInfo">My list of skills <span style={{color: '#ffdd80'}}>(Or powers)</span></p>
                    <div className="row">
                        <div className="column">
                            <ul>
                                <li><i className="fab fa-html5"></i>HTML</li>
                                <li><i className="fab fa-css3-alt"></i>CSS</li>
                            <ul>
                                <li><i className="fab fa-bootstrap"></i>Bootstrap</li>
                                <li><i className="fab fa-sass"></i>Sass</li>
                            </ul>
                                <li><i className="fas fa-database"></i>SQL</li>
                                <li>C</li>
                            </ul> 
                        </div>
                        <div className="column">
                            <ul>
                                <li><i className="fab fa-js-square"></i>Javascript</li>
                                <ul>
                                    <li><i className="fab fa-node-js"></i>Node</li>
                                    <li><i className="fab fa-react"></i>React</li>
                                </ul>
                                <li><i className="fab fa-python"></i>Python</li>
                                <ul>
                                    <li>Django</li>
                                    <li>Flask</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12 col-sm-12">
                <p className="titleInfo">What's Next?</p>
                <p className="aboutText">
                    I am currently taking the Full Stack Open course and learning more about React, Node, MongoDB, GraphQL,
                    and TypeScript, and I am also doing some projects to gain more experience and continue learning 
                    new skills to become a better programmer.
                </p>
                </div>
            </div>
        </div>
    )
}

export default About