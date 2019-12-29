import React from "react";
import PropTypes from "prop-types";

const Timer = props => {
  const { duration } = props;
  return (
    <>
      <div className="text-xs flex justify-between mb-2 text-gray-600">
        <span>Time remaining</span>
        <span>32 mins</span>
      </div>
      <div className="bg-gray-300 w-full h-2 rounded-lg">
        <span className="bg-red-400 w-2/4 h-2 block rounded-lg"></span>
      </div>
    </>
  );
};
Timer.propTypes = {
  duration: PropTypes.string.isRequired
};

export default Timer;
