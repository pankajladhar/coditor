import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './../Home/Home'
import Challenge from './../Challenge/Challenge'
import Challenges from './../Challenges/Challenges'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/challenge/:challengeID" render={() => <Challenge />} />
          <Route exact path="/challenge" render={() => <Challenges />} />
        </div>
      </Router>
    );
  }
}

export default App;
