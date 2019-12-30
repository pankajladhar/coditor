import React from "react";
import { Store } from "../store";
import { ConstantsConfig } from "../config";
import { useParams } from "react-router-dom";

const withCurrentProblem = WrappedComponent => {
  const ComponentWithCurrentProblemCtx = props => {
    let appState = Store.useStore();
    let { challengeID } = useParams();
    let challenge = appState.get(ConstantsConfig.STATE_KEYS.CHALLENGE);
    let problem = challenge
      ? challenge.find(c => c.id === challengeID)
      : null;
    return (
      <WrappedComponent {...props} challenge={challenge} problem={problem} />
    );
  };
  return ComponentWithCurrentProblemCtx;
};
export default withCurrentProblem;
