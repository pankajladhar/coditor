import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Rules from "../Components/Rules/Rules";
import Challenge from "../Pages/Challenge/Challenge";
import withFirebase from "../hooks/withFirebase";
import SidePanel from "../Components/SidePanel/SidePanel";
import RootLayout from "../Components/Layouts/Root";
import ChildLayout from "../Components/Layouts/Child";
import Loader from "../Components/Common/Loader/Loader";
import { Store } from "../store";
// import { useBeforeunload } from "react-beforeunload";

const App = ({ firebase }) => {
  // useBeforeunload(event => event.preventDefault());
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
          <Route
            exact
            path="/coditor"
            render={() => {
              const leftComponent = () => {
                if (isAuthenticated) {
                  return (
                    <SidePanel.WelcomeView user={firebase.auth().currentUser} />
                  );
                } else {
                  return <SidePanel.GuestView />;
                }
              };
              const rightComponent = () => <Rules />;
              const content = {
                leftComponent: leftComponent,
                rightComponent: rightComponent
              };
              return <ChildLayout content={content} />;
            }}
          />
          <Route
            exact
            path="/coditor/challenge/:challengeID"
            render={() => {
              const leftComponent = () => {
                return (
                  <SidePanel.ProblemsListView
                    user={firebase.auth().currentUser}
                  />
                );
              };
              const rightComponent = () => {
                if (isAuthenticated) return <Challenge />;
                return <Redirect to={{ pathname: "/coditor" }} />;
              };
              const content = {
                leftComponent: leftComponent,
                rightComponent: rightComponent
              };
              return <ChildLayout content={content} />;
            }}
          />
        </Router>
      </RootLayout>
    </Store.Container>
  );
};
export default withFirebase(App);
