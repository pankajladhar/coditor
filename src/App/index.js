import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './../Home/Home'
import Challenge from './../Challenge/Challenge'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/challenge/:challengeID" render={() => <Challenge />} />
        </div>
      </Router>
    );
  }
}

export default App;
