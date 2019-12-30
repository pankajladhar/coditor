import React from "react";
import PropTypes from "prop-types";

const CodeError = ({ error }) => {
  return <pre className="error">{error}</pre>;
};

CodeError.propTypes = {
  error: PropTypes.string
};

export default CodeError;
