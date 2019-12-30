import React from "react";
import TestResults from "../TestResults/TestResults";
import CodeError from "../CodeError/CodeError";

const TestsSection = ({ results }) => {
  return (
    <div className=" rounded p-6 bg-gray-100" style={{ minHeight: "205px" }}>
      <TestResults results={results} />
    </div>
  );
};

const OutputSection = ({ output }) => {
  return (
    <div className=" rounded p-6 bg-gray-100" style={{ minHeight: "205px" }}>
      <CodeError error={output} />
    </div>
  );
};
const TabActionsSection = ({ testRunnerHandler }) => {
  return (
    <button
      className="bg-gray-200 text-gray-600 p-2 px-4 rounded font-medium mr-4"
      onClick={testRunnerHandler}
    >
      <i className="text-base icon-code"></i> Run test
    </button>
  );
};

export { TestsSection, OutputSection, TabActionsSection };
