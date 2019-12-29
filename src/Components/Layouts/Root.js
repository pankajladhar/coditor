import React from "react";
import PropTypes from "prop-types";
import { Store } from "../../store";
import { httpGet } from "../../utils";
import { AppConfig, ConstantsConfig } from "../../config";

function RootLayout({ children }) {
  let state = Store.useStore();
  let keyName = ConstantsConfig.STATE_KEYS.CHALLENGE;
  let url = AppConfig.mockChallengeJsonUrl;

  if (!state.get(keyName)) {
    httpGet(url).then(challenge => state.set(keyName)(challenge));
  }

  return <div>{children}</div>;
}

RootLayout.propTypes = {};

export default RootLayout;
