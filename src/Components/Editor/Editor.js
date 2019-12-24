import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import PropTypes from "prop-types";
require("codemirror/mode/xml/xml.js");
require("codemirror/lib/codemirror.css");

const getOptions = ({ theme, mode }) => {
  return {
    mode: mode,
    theme: theme,
    lineNumbers: true
  };
};

const Editor = props => {
  const { theme, mode, onEditorChange } = props;

  const options = getOptions({ theme, mode });

  require(`codemirror/theme/${theme}.css`);
  require(`codemirror/mode/${mode}/${mode}.js`);

  const [code, setCode] = useState("");

  const handleBeforeChange = value => {
    setCode(value);
    onEditorChange(value);
  };

  return (
    <div className="editor">
      <CodeMirror
        value={code}
        options={options}
        onBeforeChange={(editor, data, value) => {
          handleBeforeChange(value);
        }}
      />
    </div>
  );
};

Editor.defaultProps = {
  theme: "monokai",
  mode: "javascript"
};

Editor.propTypes = {
  onEditorChange: PropTypes.func.isRequired
};
export default Editor;
