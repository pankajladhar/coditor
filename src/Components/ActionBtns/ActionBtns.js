import React from "react";
import PropTypes from "prop-types";

const ActionBtns = props => {
  let themeColorIcon = props.isDarkTheme ? "moon" : "sun";
  let fullScreenIcon = "maximize";
  let codeFormatIcon = "align-left";
  let codeResetIcon = "trash-2";
  let actionsBtns = [
    [themeColorIcon, props.themeChangeHandler],
    [fullScreenIcon, props.fullScreenChangeHandler],
    [codeFormatIcon, props.codeFormatHandler],
    [codeResetIcon, props.codeResetHandler]
  ];

  return (
    <div className="flex flex-auto mr-3">
      {actionsBtns.map(([name, handler]) => {
        return (
          <button
            className="text-gray-700 p-2 px-4 outline-none focus:outline-none"
            onClick={handler}
          >
            <i className={`text-base icon-${name}`}></i>
          </button>
        );
      })}
      <button
        class="bg-blue-400 hover:bg-blue-700 mr-2 px-5 rounded text-white flex ml-2"
        onClick={props.saveCodeHandler}
      >
        Save code
      </button>
    </div>
  );
};

ActionBtns.defaultProps = {
  isDarkTheme: false,
  themeChangeHandler: () => {},
  fullScreenChangeHandler: () => {},
  codeFormatHandler: () => {},
  codeResetHandler: () => {},
  saveCodeHandler: () => {}
};

ActionBtns.propTypes = {
  isDarkTheme: PropTypes.bool,
  themeChangeHandler: PropTypes.func,
  fullScreenChangeHandler: PropTypes.func,
  codeFormatHandler: PropTypes.func,
  codeResetHandler: PropTypes.func,
  saveCodeHandler: PropTypes.func
};

export default ActionBtns;
