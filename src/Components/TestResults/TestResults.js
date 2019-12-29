import React from "react";
import PropTypes from "prop-types";

const TestResults = props => {
  let { results } = props;
  results = !results ? [] : JSON.parse(results);
  const passedCount = results.filter(r => r.status === "Pass").length;
  const failedCount = results.filter(r => r.status === "Fail").length;
  return (
    <div>
      <div className="mb-3">
        <span className="font-bold text-green-500 mr-3">
          {passedCount} Passed
        </span>
        <span className="font-bold text-red-500">{failedCount} failed!</span>
      </div>
      <ul>
        {results.map(result => {
          let statusClassNames =
            result.status == "Fail"
              ? "icon-x-circle text-red-500"
              : "icon-check-circle text-green-500";
          return (
            <li className="p-2 flex items-center border-b border-gray-400">
              <i className={`${statusClassNames} text-xl mr-2`}></i>
              {result.scenario}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
TestResults.propTypes = {
  results: PropTypes.string.isRequired
};

export default TestResults;
