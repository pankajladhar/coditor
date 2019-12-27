import React from "react";
import TopBar from "./../TopBar/TopBar";

const Layout = props => {
  return (
    <div className="Layout">
      <TopBar />
      <div className="container">{props.children}</div>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
