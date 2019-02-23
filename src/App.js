import React, { Component } from 'react';
import './App.css';

// import Container from './components/Container';
import MiddleShape from './components/MiddleShape';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <Header/>
        {/*<Container />*/}
        <MiddleShape/>
      </div>
    );
  }
}

export default App;
