import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { transpileCode, generateScriptTag } from "./helpers";
import "./App.scss";
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/javascript/javascript.js");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/monokai.css");

const some = {
  problemMarkup: `
  <div><p>Given a 32-bit signed integer, reverse digits of an integer.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> 123
<strong>Output:</strong> 321
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> -123
<strong>Output:</strong> -321
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> 120
<strong>Output:</strong> 21
</pre>

<p><strong>Note:</strong><br>
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2<sup>31</sup>,&nbsp; 2<sup>31&nbsp;</sup>− 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.</p>
</div>`,
  functionName: "reverse",
  assertations: [
    {
      input: [123],
      output: 321
    },
    {
      input: [-123],
      output: -321
    },
    {
      input: [120],
      output: 21
    }
  ]
};

const options = {
  mode: "javascript",
  theme: "monokai",
  lineNumbers: true
};
class App extends Component {
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
    this.state = {
      value: "",
      error: undefined,
      success: undefined
    };
  }
  // serverside
  // handleClick = async () => {
  //   const rawResponse = await fetch(
  //     "http://localhost:5000/api/v1/coditor/run",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ code: this.state.value })
  //     }
  //   );
  //   const content = await rawResponse.json();

  //   this.setState({
  //     error: content.error
  //   });
  // };

  //client side

  handleClick = () => {
    let code;
    try {
      code = transpileCode(this.state.value);
    } catch ({ stack }) {
      this.setState({
        error: stack.substring(0, stack.indexOf("at Parser."))
      });
      return;
    }
    const scriptTag = generateScriptTag(code, some.assertations, some.functionName);
    this.iframeRef.current.srcdoc = scriptTag;
  };

  componentDidMount() {
    window.addEventListener("message", e => {
      if (e.data.type === "RUN_TIME_ERROR") {
        this.setState({
          error: e.data.response
        });
      }
      if (e.data.type === "TEST_RESULTS") {
        this.setState({
          success: e.data.response
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <main>
          <section className="left-container">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: some.problemMarkup }}
            />
          </section>
          <section className="right-container">
            <CodeMirror
              value={this.state.value}
              options={options}
              onBeforeChange={(editor, data, value) => {
                this.setState({ value });
              }}
            />
            {this.state.error && (
              <pre className="error">{this.state.error}</pre>
            )}
          </section>
        </main>
        <iframe title="hrmlo" ref={this.iframeRef}></iframe>
        <button className="btn" onClick={this.handleClick}>Run</button>
        {this.state.success && (
          <pre className="sucess">{this.state.success}</pre>
        )}
      </div>
    );
  }
}

export default App;
