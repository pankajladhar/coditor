import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Home from "./../Home/Home";
import Challenge from "./../Challenge/Challenge";
import Challenges from "./../Challenges/Challenges";
import withFirebase from "./../hooks/withFirebase";
import Layout from "../Components/Layout/Layout";

const App = ({ firebase }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setAuthenticated(!!user);
    });
  }, [firebase]);

  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/challenge"
          render={({ location }) =>
            isAuthenticated ? (
              <Layout>
                <Challenges />
              </Layout>
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
        <Route
          exact
          path="/challenge/:challengeID"
          render={({ location }) =>
            isAuthenticated ? (
              <Layout>
                <Challenge />
              </Layout>
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
      </div>
    </Router>
  );
};
export default withFirebase(App);
