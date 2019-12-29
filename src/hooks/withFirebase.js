import React, { useContext } from "react";
import FirebaseConfig from "../firebase.config";
import firebase from "firebase";

firebase.initializeApp(FirebaseConfig);

const firebaseContext = React.createContext(firebase);

const withFirebase = WrappedComponent => {
  const ComponentWithFirebaseCtx = props => {
    const firebase = useContext(firebaseContext);
    return <WrappedComponent {...props} firebase={firebase} />;
  };
  return ComponentWithFirebaseCtx;
};

export default withFirebase;
