import React, { useState, useEffect, Fragment } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { withRouter } from "react-router";
import withFirebase from "./../hooks/withFirebase";

const Auth = ({ history, firebase }) => {
  const [isSignedIn, setSignedIn] = useState(false);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setSignedIn(!!user);
    });
  }, [isSignedIn, firebase]);

  const renderAfterLoginView = () => {
    return (
      <div>
        <div className="flex justify-between mt-10">
          <div className="welcome">
            Welcome {firebase.auth().currentUser.displayName}!
          </div>
          <a
            className="underline cursor-pointer"
            onClick={() => firebase.auth().signOut()}
          >
            Sign-out
          </a>
        </div>
        <h2 className="leading-none text-2xl mt-10 mb-5 font-display text-indigo-900 font-extrabold">
          The life of a designer is a life of fight against the ugliness
        </h2>
        <button
          onClick={() => {
            history.push("/challenge");
          }}
          className="bg-green-500 mt-5 text-gray-100 p-2 px-4 rounded font-medium"
        >
          <i class="text-base icon-zap"></i>
          Start your 60 mins
        </button>
      </div>
    );
  };
  const renderBeforeLoginView = () => {
    return (
      <div className="mt-20">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  };

  return (
    <Fragment>
      {!isSignedIn && renderBeforeLoginView()}
      {isSignedIn && renderAfterLoginView()}
    </Fragment>
  );
};

export { Auth };
export default withFirebase(withRouter(Auth));
