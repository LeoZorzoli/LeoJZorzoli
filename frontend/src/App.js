import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Blogs from './components/pages/Blogs'

import HomePage from './pages/Home/HomePage'
import BioPage from './pages/BioPage/BioPage'
import EducationPage from './pages/EducationPage/EducationPage'
import ProjectPage from './pages/ProjectsPage/ProjectsPage'

import Navbar from './components/navbar/Navbar'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Router>
          <Row>
            <Col xl={5} xs={12} md={5}>
              <Navbar />
            </Col>
            <Col xl={6} xs={12} md={6} className="principal">
              <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/bio" component={BioPage} />
                    <Route path="/education" component={EducationPage} />
                    <Route path="/blogs" component={Blogs} />
                    <Route path="/projects" component={ProjectPage} />
              </Switch>
            </Col>
          </Row>
      </Router>
    </Container>
  )
}

export default App;
