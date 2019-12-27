import React from "react";
import CoditorLogo from "./../CoditorLogo/CoditorLogo";
import { withRouter } from "react-router";
import withFirebase from "./../../hooks/withFirebase";

const TopBar = ({ history, firebase }) => {
  const onSignOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };
  return (
    <div className="Topbar bg-white px-8 py-2">
      <CoditorLogo size={80} name />
      <a className="underline cursor-pointer" onClick={onSignOut}>
        Sign-out
      </a>
    </div>
  );
};

export default withFirebase(withRouter(TopBar));
