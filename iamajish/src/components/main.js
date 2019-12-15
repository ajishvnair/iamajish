import React from 'react';
import Landingpage from "./landingpage";
import AboutMe from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Project from './projects';
import Certification from './certifications';

import {Switch,Route}from 'react-router-dom';

const Main = () =>
(
  <Switch>
  <Route exact path="/" component={Landingpage} />
  <Route  path="/resume" component={Resume} />
  <Route  path="/aboutme" component={AboutMe} />
  <Route  path="/contact" component={Contact} />
  <Route  path="/projects" component={Project} />
  <Route  path="/certification" component={Certification} />


  </Switch>
)
export default Main;
