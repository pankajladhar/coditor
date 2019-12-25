import React from "react";
import PropTypes from "prop-types";

const ActionBtns = props => {
  let themeColorIcon = props.isDarkTheme ? "moon" : "sun";
  let fullScreenIcon = "maximize-2";
  let codeFormatIcon = "align-left";
  let codeResetIcon = "refresh-ccw";
  let actionsBtns = [
    [themeColorIcon, props.themeChangeHandler],
    [fullScreenIcon, props.fullScreenChangeHandler],
    [codeFormatIcon, props.codeFormatHandler],
    [codeResetIcon, props.codeResetHandler]
  ];

  return (
    <div className="flex flex-auto rounded overflow-hidden mr-4">
      {actionsBtns.map(([name, handler]) => {
        return (
          <button
            className="bg-gray-300 text-gray-700 p-2 px-4"
            onClick={handler}
          >
            <i className={`text-base icon-${name}`}></i>
          </button>
        );
      })}
    </div>
  );
};

ActionBtns.defaultProps = {
  isDarkTheme: false,
  themeChangeHandler: () => {},
  fullScreenChangeHandler: () => {},
  codeFormatHandler: () => {},
  codeResetHandler: () => {}
};

ActionBtns.propTypes = {
  isDarkTheme: PropTypes.bool,
  themeChangeHandler: PropTypes.func,
  fullScreenChangeHandler: PropTypes.func,
  codeFormatHandler: PropTypes.func,
  codeResetHandler: PropTypes.func
};

export default ActionBtns;
