import React, { Component } from "react";
import Editor from "./../Components/Editor/editor";
import Problem from "./../Components/Problem/problem";
import { transpileCode, generateScriptTag } from "./helpers";
import "./App.scss";

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
    const scriptTag = generateScriptTag(
      code,
      some.assertations,
      some.functionName
    );
    this.iframeRef.current.srcdoc = scriptTag;
  };

  onEditorChange = value => {
    this.setState({
      value
    });
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
            <Problem content={some.problemMarkup} />
          </section>
          <section className="right-container">
            <Editor onEditorChange={this.onEditorChange} />
            {this.state.error && (
              <pre className="error">{this.state.error}</pre>
            )}
          </section>
        </main>
        <iframe title="hrmlo" ref={this.iframeRef}></iframe>
        <button className="btn" onClick={this.handleClick}>
          Run
        </button>
        {this.state.success && (
          <pre className="sucess">{this.state.success}</pre>
        )}
      </div>
    );
  }
}

export default App;
