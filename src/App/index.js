import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Challenge from "../Pages/Challenge/Challenge";
import withFirebase from "../hooks/withFirebase";
import SidePanel from "../Components/SidePanel/SidePanel";
import RootLayout from "../Components/Layouts/Root";
import Loader from "../Components/Common/Loader/Loader";
import { Store } from "../store";

const App = ({ firebase }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setAuthenticated(!!user);
      setLoadingStatus(false);
    });
  }, [firebase]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <Store.Container>
      <RootLayout>
        <Router>
          <div className="home flex h-screen">
            <section className="w-2/6 pt-6 bg-white border-r border-gray-300 flex-shrink-0 border-r border-gray-400">
              <Route
                exact
                path="/"
                render={() => {
                  if (isAuthenticated) {
                    return (
                      <SidePanel.WelcomeView
                        user={firebase.auth().currentUser}
                      />
                    );
                  } else {
                    return <SidePanel.GuestView />;
                  }
                }}
              />
              <Route
                path="/challenge"
                render={() => (
                  <SidePanel.ProblemsListView
                    user={firebase.auth().currentUser}
                  />
                )}
              />
            </section>
            <section className="border-gray-300 flex-grow">
              <div className="App">
                <Route exact path="/" render={() => <Home />} />
                <Route
                  exact
                  path="/challenge/:challengeID"
                  render={() => {
                    if (isAuthenticated) return <Challenge />;
                    return <Redirect to={{ pathname: "/" }} />;
                  }}
                />
              </div>
            </section>
          </div>
        </Router>
      </RootLayout>
    </Store.Container>
  );
};
export default withFirebase(App);
