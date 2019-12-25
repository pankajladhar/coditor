import React from "react";
import PropTypes from "prop-types";
import TestResults from "../TestResults/TestResults";
import CodeError from "../CodeError/CodeError";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const AssertionsSection = ({ assertions }) => {
  return (
    <div className=" rounded p-2 bg-gray-200">
      <SyntaxHighlighter language="javascript" style={prism}>
        {assertions.join("\n")}
      </SyntaxHighlighter>
    </div>
  );
};

const TestsSection = ({ results }) => {
  return (
    <div className=" rounded p-6 bg-gray-200" style={{ minHeight: "205px" }}>
      <TestResults results={results} />
    </div>
  );
};

const OutputSection = ({ output }) => {
  return (
    <div className=" rounded p-6 bg-gray-200" style={{ minHeight: "205px" }}>
      <CodeError error={output} />;
    </div>
  );
};
const TabActionsSection = ({ testRunnerHandler }) => {
  return (
    <button
      className="border border-gray-500 text-gray-600 p-2 px-4 rounded font-medium"
      onClick={testRunnerHandler}
    >
      <i className="text-base icon-code"></i> Run test
    </button>
  );
};

export { AssertionsSection, TestsSection, OutputSection, TabActionsSection };
