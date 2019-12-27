import React, { useReducer, useEffect, useCallback, useRef } from "react";
import Editor from "./../Components/Editor/Editor";
import Problem from "../Components/Problem/Problem";
import { fetchProblem } from "./../helpers";
import { transpileCode, generateScriptTag } from "./helpers";
import Timer from "../Components/Timer/Timer";
import Tabs from "../Components/Tabs/Tabs";
import CoditorLogo from "../Components/CoditorLogo/CoditorLogo";
import Loader from "../Components/Loader/Loader";
import ActionBtns from "../Components/ActionBtns/ActionBtns";
import {
  AssertionsSection,
  OutputSection,
  TestsSection,
  TabActionsSection
} from "../Components/TabSections/TabSections";
import Config from "../coditor.config";
import "../styles.css";

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
    case "SWITCH_THEME":
      return { ...state, isDarkTheme: !state.isDarkTheme };
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
    results: undefined,
    isDarkTheme: false
  };
  const iframeRef = useRef();
  let actions = {};

  const [state, dispatch] = useReducer(appReducer, initialState);
  const { dark, light } = Config.themes;

  const onEditorChange = code => {
    dispatch({ type: "SHOW_ERRORS", payload: undefined });
    dispatch({ type: "SHOW_RESULTS", payload: undefined });
    dispatch({ type: "STORE_CODE", payload: code });
  };

  const onThemeChange = e => {
    e.stopPropagation();
    dispatch({ type: "SWITCH_THEME" });
  };

  const onTestRun = e => {
    e.stopPropagation();
    if (actions.switchTab) actions.switchTab("Tests");
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
      actions.switchTab("Output");
      return;
    }
    const scriptTag = generateScriptTag(
      transpiledCode,
      state.data.testCases,
      state.data.functionName
    );

    iframeRef.current.srcdoc = scriptTag;
    actions.switchTab("Tests");
  };

  const loadData = useCallback(async () => {
    const data = await fetchProblem(1);
    dispatch({ type: "STORE_DATA", payload: data });
    dispatch({ type: "STORE_CODE", payload: data.scaffoldCode });
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

  useEffect(() => {
    let method = state.isDarkTheme ? "add" : "remove";
    document.body.classList[method]("dark-theme");
  }, [state.isDarkTheme]);

  const actionsHandler = () => {
    const { defaultActiveTab, hiddenTabs } = Config.tabs;
    return {
      handler: _actions => (actions = _actions),
      config: { defaultActiveTab, hiddenTabs }
    };
  };

  return (
    <div className="app-container">
      {state.loading ? (
        <Loader />
      ) : (
        <main className="flex  h-screen">
          <section className="w-2/5 p-12 pt-7 bg-white border-r border-gray-300 flex-shrink-0">
            <div className="flex justify-between mb-8">
              <CoditorLogo size={80} />
              <span className="text-sm flex items-center">
                <i className="icon-clock text-xl mr-1"></i> Duration: 3 hrs
              </span>
            </div>
            <div className="instructions-section">
              <Problem content={state.data} />
            </div>
          </section>
          <section className="flex-auto px-12 overflow-hidden">
            <div className="py-4 flex justify-between my-5">
              <Timer />
              <div className="flex">
                <ActionBtns
                  isDarkTheme={state.isDarkTheme}
                  themeChangeHandler={onThemeChange}
                />
                <button
                  className="bg-green-500 text-gray-100 p-2 px-4 rounded font-medium"
                  onClick={handleClick}
                >
                  <i className="text-base icon-zap"></i> Submit code
                </button>
              </div>
            </div>
            <div className="code-section flex flex-col">
              <div className="bg-white p-3 rounded border-4 border-gray-400  flex-1 relative">
                <span className="absolute top-0 right-0 bg-gray-400 px-4 py-2 z-10 text-xs">
                  ES6 enabled
                </span>
                <Editor
                  onEditorChange={onEditorChange}
                  initialDefination={state.data.scaffoldCode}
                  theme={state.isDarkTheme ? dark : light}
                />
              </div>

              <Tabs actionsHandler={actionsHandler}>
                <Tabs.Tab icon="dashboard" title="Assertions">
                  <AssertionsSection assertions={state.data.assertions} />
                </Tabs.Tab>
                <Tabs.Tab icon="bug" title="Tests">
                  <TestsSection results={state.results} />
                </Tabs.Tab>
                <Tabs.Tab icon="browser-window" title="Output">
                  <OutputSection output={state.error} />
                </Tabs.Tab>
                <Tabs.Extra>
                  <TabActionsSection testRunnerHandler={onTestRun} />
                </Tabs.Extra>
              </Tabs>
            </div>
          </section>

          <iframe
            title="code iframe"
            className="hidden"
            ref={iframeRef}
          ></iframe>
        </main>
      )}
    </div>
  );
};

export default App;
