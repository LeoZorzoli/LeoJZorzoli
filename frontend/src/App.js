import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Blogs from './components/pages/Blogs'

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
            <Col xl={6} md={12} xs={12}>
              <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/aboutme" component={About} />
                    <Route path="/blogs" component={Blogs} />
                    <Route path="/projects" component={Projects} />
              </Switch>
            </Col>
          </Row>
      </Router>
    </Container>
  )
}

export default App;
