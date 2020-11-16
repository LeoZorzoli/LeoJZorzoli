import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import About from './About'
import Projects from './Projects'

const Main = () => {
    
    return(
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/aboutme" component={About} />
            <Route path="/projects" component={Projects} />
        </Switch>
    )
}
    
export default Main