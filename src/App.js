import React, { Component } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Header from './Components/Header';
import ClinicProject from './Components/ClinicProject';
import RecipeSearchProject from './Components/RecipeSearchProject';
import TrainWebAppProject from './Components/TrainProject';
import UPayProject from './Components/UPayProject';
import InsuranceClaimProject from './Components/InsuranceClaimProject';

import RoutePathConstants from './Constants/RoutePathConstants';
import history from './history';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactLinkSection from './Components/ContactLinkSection';

const { home, about, portfolio, resume, contact, clinicProject, recipeSearch, trainWebApp, upay, insuranceClaim } = RoutePathConstants;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App wrapper">
          <Header />
          <Route render={({location})=> (
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch>
                  <Route path={`/${home}`} component={Home} exact/>
                  <Route path={`/${about}`} component={About} exact/>
                  <Route path={`/${portfolio}`} component={Portfolio} exact/>
                  <Route path={`/${resume}`} component={Resume} exact/>
                  <Route path={`/${contact}`} component={Contact} exact/>
                  <Route path={`/${clinicProject}`} component={ClinicProject} exact/>
                  <Route path={`/${recipeSearch}`} component={RecipeSearchProject} exact/>
                  <Route path={`/${trainWebApp}`} component={TrainWebAppProject} exact/>
                  <Route path={`/${upay}`} component={UPayProject} exact/>
                  <Route path={`/${insuranceClaim}`} component={InsuranceClaimProject} exact/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
          <ContactLinkSection />
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
