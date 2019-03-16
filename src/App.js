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

const { home, about, portfolio, resume, contact } = RoutePathConstants;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App wrapper">
          <Header/>
          <Switch>
            <Route path={`/${home}`} component={Home} exact/>
            <Route path={`/${about}`} component={About}/>
            <Route path={`/${portfolio}`} component={Portfolio}/>
            <Route path={`/${resume}`} component={Resume}/>
            <Route path={`/${contact}`} component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
