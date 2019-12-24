import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import PropTypes from "prop-types";
require("codemirror/mode/xml/xml.js");
require("codemirror/lib/codemirror.css");

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.options = {
      mode: this.props.mode,
      theme: this.props.theme,
      lineNumbers: true
    };
  }
  handleBeforeChange = value => {
    this.setState(
      {
        value
      },
      () => {
        this.props.onEditorChange(this.state.value);
      }
    );
  };
  render() {
    require(`codemirror/theme/${this.props.theme}.css`);
    require(`codemirror/mode/${this.props.mode}/${this.props.mode}.js`);
    return (
      <div className="editor">
        <CodeMirror
          value={this.state.value}
          options={this.options}
          onBeforeChange={(editor, data, value) => {
            this.handleBeforeChange(value);
          }}
        />
      </div>
    );
  }
}

Editor.defaultProps = {
  theme: "monokai",
  mode: "javascript"
};

Editor.propTypes = {
  onEditorChange: PropTypes.func.isRequired
};
export default Editor;
