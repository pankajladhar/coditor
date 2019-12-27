import React, { useContext } from "react";
import config from "./../configuration";
import firebase from "firebase";

firebase.initializeApp(config);

const firebaseContext = React.createContext(firebase);

const withFirebase = WrappedComponent => {
  const ComponentWithFirebaseCtx = props => {
    const firebase = useContext(firebaseContext);
    return <WrappedComponent {...props} firebase={firebase} />;
  };
  return ComponentWithFirebaseCtx;
};

export default withFirebase;
