import React, { Component, Fragment } from "react";
import Editor from "./../Components/Editor/Editor";
import Problem from "./../Components/Problem/problem";
import CodeError from "./../Components/CodeError/CodeError";
import TestResults from "./../Components/TestResults/TestResults";
import { fetchProblem } from "./../helpers";
import { transpileCode, generateScriptTag } from "./helpers";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
    this.state = {
      loading: true,
      data: {},
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
      code
      // some.assertations,
      // some.functionName
    );
    this.iframeRef.current.srcdoc = scriptTag;
  };

  onEditorChange = value => {
    this.setState({
      value
    });
  };

  renderLoader = () => {
    return <div className="loading">loading ...</div>;
  };

  renderCodeError = () => {
    return <CodeError error={this.state.error} />;
  };

  renderTestResults = () => {
    return <TestResults results={this.state.success} />;
  };

  async componentDidMount() {
    const data = await fetchProblem(1);
    this.setState({
      loading: false,
      data
    });

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
    const { problemStatment } = this.state.data;
    return (
      <div className="container">
        {this.state.loading && this.renderLoader()}
        <Fragment>
          {!this.state.loading && (
            <main>
              <section className="left-container">
                <Problem content={problemStatment} />
              </section>
              <section className="right-container">
                <Editor onEditorChange={this.onEditorChange} />
                {this.state.error && this.renderCodeError()}
              </section>
              <iframe title="hrmlo" ref={this.iframeRef}></iframe>
              <button className="btn" onClick={this.handleClick}>
                Run
              </button>
            </main>
          )}
        </Fragment>
        {this.state.success && this.renderTestResults()}
      </div>
    );
  }
}

export default App;
