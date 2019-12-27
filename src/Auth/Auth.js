import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { withRouter } from "react-router";
import config from "./../configuration";

firebase.initializeApp(config);

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isSignedIn: false
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="mt-20">
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }
    return (
      <div>
        <div>Welcome {firebase.auth().currentUser.displayName}!</div>
        <div>
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </div>
        <button
          onClick={() => {
            this.props.history.push("/challenge");
          }}
          className="bg-green-500 mt-5 text-gray-100 p-2 px-4 rounded font-medium"
        >
          <i class="text-base icon-zap"></i>
          Start test
        </button>
      </div>
    );
  }
}

export { Auth };
export default withRouter(Auth);
