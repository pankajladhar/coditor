import React, { useReducer, useEffect, useCallback, useRef } from "react";
import Editor from "./../Components/Editor/Editor";
import Problem from "./../Components/Problem/problem";
import CodeError from "./../Components/CodeError/CodeError";
import TestResults from "./../Components/TestResults/TestResults";
import { fetchProblem } from "./../helpers";
import { transpileCode, generateScriptTag } from "./helpers";
import "./App.scss";

const appReducer = (state, action) => {
  switch (action.type) {
    case "DISABLE_LOADER":
      return { ...state, loading: false };
    case "STORE_DATA":
      return { ...state, data: action.payload };
    case "STORE_CODE":
      return { ...state, code: action.payload };
    case "SHOW_RESULTS":
      return { ...state, results: action.payload };
    case "SHOW_ERRORS":
      return { ...state, error: action.payload };
    default:
      throw new Error();
  }
};

const App = () => {
  const initialState = {
    loading: true,
    data: {},
    code: "",
    error: undefined,
    results: undefined
  };
  const iframeRef = useRef();

  const [state, dispatch] = useReducer(appReducer, initialState);
  const renderLoader = () => {
    return <div className="loading">loading ...</div>;
  };

  const renderCodeError = () => {
    return <CodeError error={state.error} />;
  };

  const renderTestResults = () => {
    return <TestResults results={state.results} />;
  };

  const onEditorChange = code => {
    dispatch({ type: "SHOW_ERRORS", payload: undefined });
    dispatch({ type: "SHOW_RESULTS", payload: undefined });
    dispatch({ type: "STORE_CODE", payload: code });
  };

  const handleClick = () => {
    let transpiledCode;
    try {
      transpiledCode = transpileCode(state.code);
    } catch ({ stack }) {
      dispatch({
        type: "SHOW_ERRORS",
        payload: stack.substring(0, stack.indexOf("at Parser."))
      });
      return;
    }
    const scriptTag = generateScriptTag(
      transpiledCode,
      state.data.assertations,
      state.data.functionName
    );

    iframeRef.current.srcdoc = scriptTag;
  };

  const loadData = useCallback(async () => {
    const data = await fetchProblem(1);
    dispatch({ type: "STORE_DATA", payload: data });
    dispatch({ type: "STORE_CODE", payload: data.defination });
    dispatch({ type: "DISABLE_LOADER" });
  }, []);

  useEffect(() => {
    loadData();
    window.addEventListener("message", e => {
      if (e.data.type === "RUN_TIME_ERROR") {
        dispatch({ type: "SHOW_ERRORS", payload: e.data.response });
      }
      if (e.data.type === "TEST_RESULTS") {
        dispatch({ type: "SHOW_RESULTS", payload: e.data.response });
      }
    });
  }, [loadData]);

  return (
    <div className="container">
      {state.loading ? (
        renderLoader()
      ) : (
        <div className="container">
          <header className="header">
            <h1> TW TECH1</h1>
            <div className="timer">1:00:00</div>
            <div className="menu"><a className="menu-logout">Logout</a></div>
            </header>
          <main>
            <section class="instruction">Instructions:</section>
            <ul className="puzzle-list">
            <li className="puzzle-list-item">
              <header className="puzzle-header"><b>Question1:</b> <button className="button-run" onClick={handleClick}> Run</button></header>
              <section class="puzzle-question">
                <Problem content={state.data.problemStatment} />
              </section>
              <section class="puzzle-editor">
                <Editor
                  onEditorChange={onEditorChange}
                  initialDefination={state.data.defination}
                />
                {state.error && renderCodeError()}
                {state.results && renderTestResults()}
              </section>
            </li>
            <li className="puzzle-list-item">
              <header className="puzzle-header"><b>Question1:</b> <button className="button-run" onClick={handleClick}> Run</button></header>
              <section class="puzzle-question">
                <Problem content={state.data.problemStatment} />
              </section>
              <section class="puzzle-editor">
                <Editor
                  onEditorChange={onEditorChange}
                  initialDefination={state.data.defination}
                />
                {state.error && renderCodeError()}
                {state.results && renderTestResults()}
              </section>
            </li>
            </ul>
            <iframe title="code iframe" ref={iframeRef}></iframe>
          </main>
          <footer>
            <button className="button-save">Save</button>
            <button className="button-submit">Submit</button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
