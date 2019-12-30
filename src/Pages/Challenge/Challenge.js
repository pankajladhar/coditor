import React, { useReducer, useEffect, useCallback, useRef } from "react";
import Editor from "./../../Components/Editor/Editor";
import { transpileCode, generateScriptTag } from "./helpers";
import Tabs from "../../Components/Common/Tabs/Tabs";
import ActionBtns from "../../Components/ActionBtns/ActionBtns";
import { firebaseOps } from "./../../utils/firebaseOps";
import {
  OutputSection,
  TestsSection,
  TabActionsSection
} from "../../Components/TabSections/TabSections";
import { AppConfig } from "../../config";
import Instructions from "../../Components/Instructions/Instructions";
import withCurrentProblem from "../../hooks/withCurrentProblem";
import withFirebase from "../../hooks/withFirebase";

const appReducer = (state, action) => {
  switch (action.type) {
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

const Challenge = ({ problem, currentUser }) => {
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
  const { dark, light } = AppConfig.themes;

  const onEditorChange = code => {
    dispatch({ type: "SHOW_ERRORS", payload: undefined });
    dispatch({ type: "SHOW_RESULTS", payload: undefined });
    dispatch({ type: "STORE_CODE", payload: code });
  };

  const onThemeChange = e => {
    e.stopPropagation();
    dispatch({ type: "SWITCH_THEME" });
  };

  const onTestRun = () => {
    let transpiledCode;
    try {
      transpiledCode = transpileCode(state.code);
      if (actions.switchTab) actions.switchTab("Tests");
    } catch ({ stack }) {
      actions.switchTab("Output");
      dispatch({
        type: "SHOW_ERRORS",
        payload: stack.substring(0, stack.indexOf("at Parser."))
      });
      return;
    }
    const scriptTag = generateScriptTag(
      transpiledCode,
      problem.testCases,
      problem.functionName
    );

    iframeRef.current.srcdoc = scriptTag;
  };

  const loadData = useCallback(async () => {
    dispatch({ type: "SHOW_ERRORS", payload: undefined });
    dispatch({ type: "SHOW_RESULTS", payload: undefined });
    dispatch({ type: "STORE_CODE", payload: problem && problem.scaffoldCode });
  }, [problem]);

  const messageListner = e => {
    window.addEventListener("message", e => {
      if (e.data.type === "RUN_TIME_ERROR") {
        dispatch({ type: "SHOW_ERRORS", payload: e.data.response });
      }
      if (e.data.type === "TEST_RESULTS") {
        dispatch({ type: "SHOW_RESULTS", payload: e.data.response });
      }
    });
  };

  useEffect(() => {
    loadData();
    messageListner();
  }, [loadData]);

  useEffect(() => {
    let method = state.isDarkTheme ? "add" : "remove";
    document.body.classList[method]("dark-theme");
  }, [state.isDarkTheme]);

  const onSaveCode = async() => {
    const doc = currentUser.email;
    const result = await firebaseOps.saveCode(doc, problem.id, state.code);
    console.log(result)

  };

  const actionsHandler = () => {
    const { defaultActiveTab, hiddenTabs } = AppConfig.codeTabs;
    return {
      handler: _actions => (actions = _actions),
      config: { defaultActiveTab, hiddenTabs }
    };
  };
  if (!problem) return <></>;
  return (
    <div className="app-container">
      <main className="flex h-screen flex-col">
        <Tabs
          actionsHandler={() => ({
            config: {
              defaultActiveTab: AppConfig.problemTabs.defaultActiveTab
            }
          })}
        >
          <Tabs.Tab icon="file-text" title="Instructions">
            <Instructions data={problem} />
          </Tabs.Tab>
          <Tabs.Tab icon="code-s-slash-fill" title="Code">
            <div className="code-section flex flex-col">
              <div className="p-3 border-t border-b border-gray-400  flex-1 relative">
                <Editor
                  onEditorChange={onEditorChange}
                  initialDefination={problem.scaffoldCode}
                  theme={state.isDarkTheme ? dark : light}
                />
              </div>

              <Tabs actionsHandler={actionsHandler}>
                <Tabs.Tab icon="bug-line" title="Tests">
                  <TestsSection results={state.results} />
                </Tabs.Tab>
                <Tabs.Tab icon="lightbulb-flash-line" title="Output">
                  <OutputSection output={state.error} />
                </Tabs.Tab>
                <Tabs.Extra>
                  <TabActionsSection testRunnerHandler={onTestRun} />
                </Tabs.Extra>
              </Tabs>
            </div>
          </Tabs.Tab>
          <Tabs.Extra>
            <div className="flex">
              <ActionBtns
                saveCodeHandler={onSaveCode}
                isDarkTheme={state.isDarkTheme}
                themeChangeHandler={onThemeChange}
              />
            </div>
          </Tabs.Extra>
        </Tabs>

        <iframe title="code iframe" className="hidden" ref={iframeRef}></iframe>
      </main>
    </div>
  );
};

export default withFirebase(withCurrentProblem(Challenge));
