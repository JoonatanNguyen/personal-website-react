import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Header from './Components/Header';
import RoutePathConstants from './Constants/RoutePathConstants';
import history from './history';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const { home, about, portfolio, resume, contact } = RoutePathConstants;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App wrapper">
          <Header/>
          <Route render={({location})=> (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path={`/${home}`} component={Home} exact/>
                  <Route path={`/${about}`} component={About} exact/>
                  <Route path={`/${portfolio}`} component={Portfolio} exact/>
                  <Route path={`/${resume}`} component={Resume} exact/>
                  <Route path={`/${contact}`} component={Contact} exact/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
