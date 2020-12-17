import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home/HomePage'
import BioPage from './pages/BioPage/BioPage'
import EducationPage from './pages/EducationPage/EducationPage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import ProjectPage from './pages/ProjectsPage/ProjectsPage'
import TecnologiesPage from './pages/TecnologiesPage/TecnologiesPage'
import PublicationsPage from './pages/PublicationsPage/PublicationsPage'

import Navbar from './components/navbar/Navbar'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Router>
          <Row>
            <Col xl={5} xs={12} md={12}>
              <Navbar />
            </Col>
            <Col xl={6} xs={12} md={12} className="principal">
              <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/bio" component={BioPage} />
                    <Route path="/education" component={EducationPage} />
                    <Route path="/experience" component={ExperiencePage} />
                    <Route path="/projects" component={ProjectPage} />
                    <Route path="/tecnologies" component={TecnologiesPage} />
                    <Route path="/publications" component={PublicationsPage} />
              </Switch>
            </Col>
          </Row>
      </Router>
    </Container>
  )
}

export default App;
