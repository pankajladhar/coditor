import React, { useReducer, useEffect, useCallback, useRef } from "react";
import Editor from "./../Components/Editor/Editor";
import Problem from "../Components/Problem/Problem";
import { fetchProblem } from "./../helpers";
import { transpileCode, generateScriptTag } from "./helpers";
import Timer from "../Components/Timer/Timer";
import Tabs from "../Components/Tabs/Tabs";
import CoditorLogo from "../Components/CoditorLogo/CoditorLogo";
import Loader from "../Components/Loader/Loader";
import ActionBtns from "../Components/ActionBtns/ActionBtns";
import {
  AssertionsSection,
  OutputSection,
  TestsSection,
  TabActionsSection
} from "../Components/TabSections/TabSections";
import Config from "../coditor.config";
import "../styles.css";
import Loader from "../Components/Loader/Loader";

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
