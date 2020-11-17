import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs'

const Main = () => {
    
    return(
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/aboutme" component={About} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/projects" component={Projects} />
        </Switch>
    )
}
    
export default Main