import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./../Home/Home";
import Challenge from "./../Challenge/Challenge";
import Challenges from "./../Challenges/Challenges";
import Layout from "../Components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/challenge"
            render={() => (
              <Layout>
                <Challenges />
              </Layout>
            )}
          />
          <Route
            exact
            path="/challenge/:challengeID"
            render={() => (
              <Layout>
                <Challenge />
              </Layout>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
